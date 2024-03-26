
/**
 * 删除分类
 */
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const category = await db.category.findUnique({ where: { id: Number(id) } });
  if (!category) {
    throw createError("链接不存在");
  }
  await db.category.delete({ where: { id: Number(id) } });
});
