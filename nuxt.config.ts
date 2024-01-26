// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@unocss/nuxt", "@nuxtjs/sitemap", "arco-design-nuxt-module"],
  css: ["~/assets/base.css"],
  runtimeConfig: {
    v1: "11",
    public: {
      v2: "22",
      createdAt: new Date().toISOString(),
    },
  },
  app: {
    head: {
      title: "绝弹导航 | 发现更多效率工具和现代技术",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: "发现更多效率工具和现代技术",
        },
        {
          name: "keywords",
          content: "绝弹|绝弹导航|前端|技术|效率工具|网站",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  site: {
    url: "https://nav.juetan.cn",
  },
});
