import { Dictionary, HttpCrawler, KeyValueStore, ProxyConfiguration, RequestOptions } from "crawlee";
import fse from "fs-extra";
import mime from "mime";
import { join, resolve } from "path";
import { fileURLToPath } from "url";
import items from "../../src/data/index";
import { useUid } from "./helpers";

const __dirname = join(fileURLToPath(import.meta.url), "..");
const sourceDir = resolve(__dirname, "./storage/key_value_stores/images");
const targetDir = resolve(__dirname, "../../public/images");

const proxy = new ProxyConfiguration({
  proxyUrls: ["http://127.0.0.1:10800"],
});

export const run = async () => {
  const store = await KeyValueStore.open("images");
  store.forEachKey(async (key) => {
    await store.setValue(key, null);
  });
  const getUid = useUid(10);

  type Request = RequestOptions<Dictionary>;
  const requests: Request[] = [];
  const cache = new Map<string, typeof items>();
  items.forEach((item) => {
    if (item.logo.startsWith("data:")) {
      return;
    }
    if (cache.has(item.logo)) {
      cache.get(item.logo)!.push(item);
      return;
    }
    cache.set(item.logo, [item]);
    requests.push({ url: item.logo });
  });

  const crawler = new HttpCrawler({
    additionalMimeTypes: ["*/*"],
    proxyConfiguration: proxy,
    async requestHandler({ request, sendRequest, log }) {
      log.info(`开始下载 ${request.url}`);
      const res = await sendRequest({ responseType: "buffer" });
      const name = getUid();
      const contentType = res.headers["content-type"];
      await store.setValue(name, res.body, { contentType });
      for (const item of cache.get(request.url)!) {
        item.logoFileName = `${name}.${mime.getExtension(contentType!)}`;
      }
    },
  });

  await crawler.run(requests);
  await store.setValue("items", items);

  fse.emptyDirSync(targetDir);
  fse.copySync(sourceDir, targetDir);
};

run();
