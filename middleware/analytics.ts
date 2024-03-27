import { inject } from '@vercel/analytics'

/**
 * 适用于首页的统计
 */
export default defineNuxtPlugin(() => {
  if (!import.meta.client) {
    return
  }
  inject()
})
