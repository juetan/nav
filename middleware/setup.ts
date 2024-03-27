/**
 * 适用于 /setup 页面
 */
export default defineNuxtRouteMiddleware(async () => {
  const options = await $fetch('/api/options')
  if (options.inited) {
    return navigateTo('/login')
  }
})
