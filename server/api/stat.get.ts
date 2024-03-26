import dayjs from 'dayjs'

/**
 * 统计信息
 */
export default defineEventHandler(async (event) => {
  const links = await db.link.count()
  const categories = await db.category.count()
  const users = await db.user.count()
  const days = dayjs().diff(dayjs('2024-01-01 00:00:00'), 'd')
  return {
    links,
    categories,
    users,
    days,
  }
})
