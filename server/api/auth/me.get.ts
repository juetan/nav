/**
 * 获取登陆用户信息
 */
export default defineEventHandler(async (event) => {
  const user = event.context.user
  if (!user) {
    throw createError({
      statusCode: 401,
      message: '尚未登陆',
    })
  }
  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
})
