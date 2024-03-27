/**
 * 全局中间件
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
