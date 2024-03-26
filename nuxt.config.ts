export default defineNuxtConfig({
  sourcemap: false,
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || 'SESSION',
    cookieSecret: process.env.COOKIE_SECRET || 'secret',
    cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || (60 * 60 * 24 * 1000).toString()),
  },
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
  modules: [
    '@unocss/nuxt',
    'arco-design-nuxt-module'
  ],
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
