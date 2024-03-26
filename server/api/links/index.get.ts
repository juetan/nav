/**
 * 获取链接
 */
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const options = {
    where: {
      name: query.name as any,
      categoryId: query.categoryId ? Number(query.categoryId) : undefined,
    },
  };
  const [links, total] = await db.$transaction([
    db.link.findMany(options),
    db.link.count(options),
  ]);
  return ApiResponse.ok(links, total);
});
