import type { User } from '@prisma/client'

/**
 * 适用于 /admin 开头的路由
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!import.meta.client) {
    return
  }
  const user = useUser()
  if (user.value) {
    return
  }
  try {
    const res = await $fetch<User>('/api/auth/me')
    user.value = res
  } catch (e) {
    return navigateTo('/login')
  }
})
