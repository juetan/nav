
/**
 * 退出登陆
 */
export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  deleteCookie(event, config.cookieName, {
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
  })
  return null
})
