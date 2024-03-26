/**
 * 适用于 /admin 开头的路由
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const app = useApp()
  if (app.value) {
    return
  }
  try {
    const res = await $fetch('/api/options')
    app.value = res
  } catch (e) {}
})
