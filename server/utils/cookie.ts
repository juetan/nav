import type { H3Event } from 'h3'
import { createHmac, timingSafeEqual } from 'node:crypto'

/**
 * 加盐签名
 */
export const sign = (value: string, secret: string) => {
  const signature = createHmac('sha256', secret).update(value).digest('hex').replace(/=+$/, '')
  return `${value}.${signature}`
}

/**
 * 验证签名
 */
export const unsign = (input: string, secret: string) => {
  const value = input.slice(0, input.lastIndexOf('.'))
  const userBuffer = Buffer.from(sign(value, secret))
  const realBuffer = Buffer.from(input)

  if (!(userBuffer.equals(realBuffer) && timingSafeEqual(userBuffer, realBuffer))) {
    throw createError({
      statusCode: 400,
      message: '无效的登陆信息',
    })
  }

  return value
}

export const getCookieUser = (event: H3Event) => {
  const config = useRuntimeConfig()
  const cookie = getCookie(event, config.cookieName)
  if (!cookie) {
    return null
  }
  const userStr = unsign(cookie, config.cookieSecret)
  if (!userStr) {
    return null
  }
  return JSON.parse(userStr) as { uid: number }
}
