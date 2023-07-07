import normalTags from "./tags/tag-normal.json";

export interface Item {
  title: string;
  description: string;
  logo: string;
  logoFileName: string;
  url: string;
  tags: string[];
}

export interface Tag {
  label: string;
  value: string;
  children: Tag[];
}

const globMap = import.meta.glob("./items/*.json", { eager: true });
const items: Item[] = Object.values(globMap)
  .map((item: any) => item.default)
  .flat();

const itemsMap: Record<string, Item> = items.reduce((prev, curr) => {
  prev[curr.title] = curr;
  return prev;
}, {} as Record<string, Item>);

const normalData = normalTags.map((tag) => {
  const children = items.filter((item) => item.tags?.includes(tag.value));
  return { ...tag, children };
});

console.log(items);

export { items, itemsMap, normalData };
