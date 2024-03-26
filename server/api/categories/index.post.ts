
/**
 * 新增分类
 */
export default defineEventHandler(async (event) => {
  const link = await readBody(event);
  return await db.category.create({ data: link });
});
