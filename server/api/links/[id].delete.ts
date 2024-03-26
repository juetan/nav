
/**
 * 删除链接
 */
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const link = await db.link.findUnique({ where: { id: Number(id) } })
  if (!link) {
    throw createError({
      statusCode: 404,
      message: '链接不存在',
    })
  }
  await db.link.delete({ where: { id: Number(id) } })
})
