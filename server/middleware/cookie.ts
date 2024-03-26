export default defineEventHandler(async (event) => {
  if (event.method === 'GET' && event.path !== '/api/auth/me') {
    return
  }
  if (event.path === '/api/auth/login') {
    return
  }
  const config = useRuntimeConfig()
  const cookie = getCookie(event, config.cookieName)
  if (!cookie) {
    console.log(event.headers)
    throw createError({
      statusCode: 401,
      message: '尚未登陆',
    })
  }
  const userStr = unsign(cookie, config.cookieSecret)
  const cookieUser = JSON.parse(userStr) as { uid: number }
  if (!cookieUser) {
    return
  }
  const user = await db.user.findUnique({ where: { id: cookieUser.uid } })
  if (!user) {
    throw createError({
      statusCode: 401,
      message: '用户不存在',
    })
  }
  event.context.user = user
})
