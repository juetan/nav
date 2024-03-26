import type { User } from '@prisma/client'

declare module 'h3' {
  interface H3EventContext {
    user?: User
  }
}

export {}
