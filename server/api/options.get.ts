interface Option {
  inited: boolean
  title: string
  description: string
  logoUrl: string
}

/**
 * 获取配置
 */
export default defineEventHandler(async (event) => {
  const result = await db.options.findMany()
  const options: Record<string, any> = {}
  for (const option of result) {
    options[option.key] = option.value
  }
  return options as Option
})
