import { PrismaClient } from '@prisma/client'

// 使用：
// prisma init
// prisma generate
// prisma migrate dev --name init
// prisma seed

declare global {
  /**
   * 勿动，避免开发时频繁热更新导致连接池耗尽
   */
  var prismaSingletonInstance: PrismaClient
}

/**
 * Prisma 连接实例
 */
const db = globalThis.prismaSingletonInstance ?? new PrismaClient()

/**
 * 开发环境下缓存
 */
if (import.meta.dev) {
  globalThis.prismaSingletonInstance = db
}

export { db }
