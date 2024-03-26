
/**
 * 更新链接
 */
export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'));
  const link = await readBody(event);
  const links = await db.link.update({ data: link, where: { id } });
  return links;
});
