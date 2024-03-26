interface Option {
  title: string
  description: string
  logoUrl: string
}

export default defineEventHandler(async (event) => {
  const result = await db.options.findMany()
  const options: Record<string, any> = {}
  for (const option of result) {
    options[option.key] = option.value
  }
  return options as Option
})
