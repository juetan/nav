
/**
 * 获取分类
 */
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Number(query.page ?? 1)
  const size = Number(query.size ?? 10)
  const categories = await db.category.findMany({
    orderBy: {
      id: 'desc',
    },
    include: {
      links: true,
    },
  })
  return categories
})
