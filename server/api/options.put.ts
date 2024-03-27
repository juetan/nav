
/**
 * 更新配置
 */
export default defineEventHandler(async (event) => {
  const body: Record<string, string> = await readBody(event)
  await db.$transaction(
    Object.entries(body).map(([key, value]) => {
      return db.options.update({
        where: { key },
        data: { value },
      })
    })
  )
  return '更新成功'
})
