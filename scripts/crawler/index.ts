/**
 * 下载图标
 * 1. 从 items.json 中获取 logo 地址
 * 2. 下载 logo
 * 3. 将 logo 保存到 images 目录下
 * 4. 将 items.json 中的 logo 地址替换为本地地址
 */
import { Dictionary, HttpCrawler, KeyValueStore, ProxyConfiguration, RequestOptions, log } from "crawlee";
import fse from "fs-extra";
import mime from "mime";
import path from "path";
import { join, resolve } from "path";
import { fileURLToPath } from "url";
import { useUid } from "./helpers";

const __dirname = join(fileURLToPath(import.meta.url), "..");
const dataDir = resolve(__dirname, "../../src/api/items");
const destPath = resolve(__dirname, "../../public/images/items.json");
const sourceDir = resolve(__dirname, "./storage/key_value_stores/images");
const targetDir = resolve(__dirname, "../../public/images");

const proxy = new ProxyConfiguration({
  proxyUrls: ["http://127.0.0.1:28341"],
});

export const run = async () => {
  // 清空已有数据
  const store = await KeyValueStore.open("images");
  store.forEachKey(async (key) => {
    await store.setValue(key, null);
  });
  const getUid = useUid(10);

  // 加载源数据
  const datasouce = [];
  const filenames = fse.readdirSync(dataDir);
  for (const filename of filenames) {
    if (filename.endsWith(".json")) {
      const filepath = resolve(dataDir, filename);
      const data = fse.readJSONSync(filepath);
      datasouce.push(...data);
    }
  }

  const exitedIconMap = new Map<string, any>();
  const exited = JSON.parse(fse.readFileSync(destPath, "utf-8"));
  for (const item of exited) {
    if (!exitedIconMap.has(item.logo) && item.logoFileName) {
      exitedIconMap.set(item.logo, item.logoFileName);
    }
  }

  // 跳过重复
  type Request = RequestOptions<Dictionary>;
  const requests: Request[] = [];
  const cache = new Map<string, any>();
  for (const item of datasouce) {
    if (exitedIconMap.has(item.logo)) {
      item.logoFileName = exitedIconMap.get(item.logo);
      continue;
    }
    if (item.logo.startsWith("data:")) {
      continue;
    }
    if (cache.has(item.logo)) {
      cache.get(item.logo)!.push(item);
      continue;
    }
    cache.set(item.logo, [item]);
    requests.push({ url: item.logo });
  }

  // 下载图标
  const crawler = new HttpCrawler({
    additionalMimeTypes: ["*/*"],
    proxyConfiguration: proxy,
    async requestHandler({ request, sendRequest, log }) {
      log.info(`开始下载 ${request.url}`);
      const res = await sendRequest({ responseType: "buffer" });
      log.info(`完成下载 ${request.url}`);
      const name = getUid();
      const contentType = res.headers["content-type"];
      await store.setValue(name, res.body, { contentType });
      for (const item of cache.get(request.url)!) {
        item.logoFileName = `${name}.${mime.getExtension(contentType!)}`;
      }
    },
  });

  log.info(`开始下载 ${requests.length} 个图标`);
  await crawler.run(requests);

  log.info(`开始保存`);
  await store.setValue("items", datasouce);

  log.info(`开始拷贝`);
  fse.copySync(sourceDir, targetDir);

  log.info(`开始迁移`);
  migrate();
};

const migrate = () => {
  const sourceStr = fse.readFileSync(destPath, "utf8");
  const source = JSON.parse(sourceStr);
  const sourceMap = source.reduce((acc: any, cur: any) => {
    acc[cur.url] = cur;
    return acc;
  }, {} as any);

  const filenames = fse.readdirSync(dataDir);
  for (const filename of filenames) {
    const items = JSON.parse(fse.readFileSync(path.join(dataDir, filename), "utf8"));
    for (const item of items) {
      const sourceItem = sourceMap[item.url];
      if (sourceItem) {
        item.logoFileName = sourceItem.logoFileName;
      }
    }
    fse.writeFileSync(path.join(dataDir, filename), JSON.stringify(items, null, 2));
  }
};

run();
