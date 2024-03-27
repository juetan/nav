export default defineNuxtConfig({
  sourcemap: false,
  devtools: {
    enabled: false,
  },
  // 生产环境务必指定 cookieSecret，避免密码被猜到
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || 'SESSION',
    cookieSecret: process.env.COOKIE_SECRET || 'secret',
    cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || (60 * 60 * 24 * 1000).toString()),
  },
  // nitro 是由 rollup 打包的，因此不能使用 vite 才支持的 ?raw 加载 sql 文件
  // 这里手动指定, dir 是相对于 /server 目录来说的
  nitro: {
    serverAssets: [
      {
        baseName: 'sql',
        dir: './database/migrations/20240321135046_init',
      },
    ],
  },
  // SEO相关的设置
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'zh-CN',
      },
      link: [
        {
          rel: 'shortcut icon',
          href: '/favicon.svg',
        },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'keywords',
          content: '绝弹导航,绝弹,导航,导航网站,导航大全,导航网站大全,导航网站大全',
        },
        {
          name: 'description',
          content: '绝弹导航,绝弹,导航,导航网站,导航网站大全,导航网站大全',
        },
      ],
    },
  },
  // @ts-ignore
  modules: ['@unocss/nuxt', 'arco-design-nuxt-module'],
  // 前台使用 SSR，后台使用 CSR
  routeRules: {
    '/admin': {
      ssr: false,
    },
    '/admin/*': {
      ssr: false,
    },
    '/about': {
      prerender: true,
    },
  },
})
