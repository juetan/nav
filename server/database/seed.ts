import fs from 'fs'
import path from 'path'
import { db } from './client'

const dir = 'E:\\github\\nav\\src\\api\\items'

interface LinkItem {
  title: string
  description: string
  logo: string
  logoFileName: string
  url: string
  tags: string[]
}

/**
 * 填充初始用户数据
 */
const seedUsers = async () => {
  console.log(`添加用户：绝弹`)
  await db.user.deleteMany()
  await db.user.create({
    data: {
      username: 'juetan',
      password: 'juetan',
      nickname: '绝弹',
    },
  })
}

/**
 * 填充初始分类数据
 */
const seedCategories = async () => {
  const categories = []
  for (let i = 1; i <= 25; i++) {
    categories.push({
      name: `测试分类${i}`,
      description: '这是测试描述',
    })
  }
  console.log(`添加分类 ${categories.length}`)
  await db.category.deleteMany()
  await db.category.createMany({ data: categories })
}

/**
 * 填充初始链接数据
 */
const seedLinks = async () => {
  const filenames = fs.readdirSync(dir)
  const categories = await db.category.findMany()
  let index = 0
  await db.link.deleteMany()
  for (const filename of filenames) {
    const filePath = path.join(dir, filename)
    const fileText = fs.readFileSync(filePath, { encoding: 'utf8' })
    const items: LinkItem[] = JSON.parse(fileText)
    const links = []
    for (const item of items) {
      links.push({
        categoryId: categories[index].id,
        name: item.title,
        description: item.description,
        icon: item.logo,
        url: item.url,
      })
    }
    console.log(`添加链接：`)
    await db.link.createMany({ data: links })
    index++
  }
}

/**
 * 填充初始选项数据
 */
const seedOptions = async () => {
  const options = [
    {
      key: 'title',
      value: '站点标题',
    },
    {
      key: 'description',
      value: '站点描述',
    },
    {
      key: 'logoUrl',
      value: '/favicon.svg',
    },
  ]
  console.log('添加配置')
  await db.options.deleteMany()
  await db.options.createMany({ data: options })
}

const run = async () => {
  await seedUsers()
  await seedCategories()
  await seedLinks()
  await seedOptions()
}

run()
