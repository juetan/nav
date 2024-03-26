/**
 * 新增链接
 */
export default defineEventHandler(async (event) => {
  const link = await readBody(event);
  const links = await db.link.create({ data: link });
  return links;
});
