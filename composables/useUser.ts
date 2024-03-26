import type { User } from '@prisma/client'

/**
 * 用户信息
 * @description 未登录时，信息为 null
 */
export const useUser = () => {
  return useState<Omit<User, 'password'> | null>('user', () => null)
}
