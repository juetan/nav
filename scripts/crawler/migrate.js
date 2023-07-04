import fs from "fs";
import path from "path";

const itemsStr = fs.readFileSync(path.join(process.cwd(), "src/data/items.json"), "utf8");
const sourceStr = fs.readFileSync(path.join(process.cwd(), "public/images/items.json"), "utf8");

const items = JSON.parse(itemsStr);
const source = JSON.parse(sourceStr);

const sourceMap = source.reduce((acc, cur) => {
  acc[cur.url] = cur;
  return acc;
}, {});

for (const item of items) {
  const { url, logo } = item;
  const sourceItem = sourceMap[url];
  if (sourceItem) {
    item.logo = sourceItem.logoFileName;
    item.logoUrl = logo;
    delete item.logoFileName;
  }
}

fs.writeFileSync(path.join(process.cwd(), "src/data/items1.json"), JSON.stringify(items, null, 2));
