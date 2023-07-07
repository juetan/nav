import fs from "fs";
import path from "path";

const sourceStr = fs.readFileSync(path.join(process.cwd(), "public/images/items.json"), "utf8");
const source = JSON.parse(sourceStr);
const sourceMap = source.reduce((acc, cur) => {
  acc[cur.url] = cur;
  return acc;
}, {});

const filenames = fs.readdirSync(path.join(process.cwd(), "src/api/items"));
for (const filename of filenames) {
  const items = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src/api/items", filename), "utf8"));
  for (const item of items) {
    const sourceItem = sourceMap[item.url];
    if (sourceItem) {
      item.logoFileName = sourceItem.logoFileName;
    }
  }
  fs.writeFileSync(path.join(process.cwd(), "src/api/items", filename), JSON.stringify(items, null, 2));
}
