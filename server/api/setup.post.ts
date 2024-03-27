/**
 * 初始化系统
 */
export default defineEventHandler(async (event) => {
  const initSql = await useStorage('assets:sql').getItem('migration.sql')
  if (!initSql) {
    throw createError({
      statusCode: 500,
      statusMessage: '初始化失败，请检查数据库SQL文件是否存在',
    })
  }

  try {
    const options = await db.options.findMany()
    const inited = options.find((o) => o.key === 'inited')?.value === 'true'
    if (inited) {
      return ApiResponse.ok('已初始化')
    }
  } catch {}

  const body = await readBody(event)
  const {
    title = '我的导航',
    logoUrl = '/favicon.svg',
    nickname = '管理员',
    username = 'admin',
    password = '123456',
  } = body

  await db.$executeRaw`${initSql}`
  await db.$transaction([
    db.options.createMany({
      data: [
        { key: 'inited', value: 'true' },
        { key: 'title', value: title },
        { key: 'description', value: '' },
        { key: 'logoUrl', value: logoUrl },
      ],
    }),
    db.category.create({
      data: {
        name: '默认分类',
        description: '暂无描述',
      },
    }),
    db.link.create({
      data: {
        name: 'GitHub',
        description: 'GitHub',
        url: 'https://github.com/',
        icon: 'github',
      },
    }),
    db.user.create({
      data: {
        nickname,
        username,
        password,
      },
    }),
  ])

  return ApiResponse.ok('操作成功')
})
