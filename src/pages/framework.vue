<template>
  <div class="flex-1 h-full grid grid-rows-[auto_1fr]">
    <div class="flex justify-between items-center mx-6 pt-4 pb-0 border-b border-gray-200 dark:border-slate-800">
      <div>
        <div class="text-base">社区论坛</div>
        <p class="text-slate-500 p-0 mt-2">涵盖前端开发、设计、运维、测试、产品、运营等领域，目前共收录 个网站。</p>
      </div>
      <div class="flex gap-2">
        <a-input-search class="w-96" placeholder="请输入关键字..."></a-input-search>
      </div>
    </div>
    <a-scrollbar ref="scrollRef" outer-class="overflow-hidden" class="h-full w-full overflow-auto mt-3 pb-4">
      <div v-for="category in items" :key="category.title" ref="itemsRef">
        <div class="text-slate-500 px-6 mb-3 mt-2">{{ category.title }}</div>
        <div class="flex-1 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 px-5 pb-4">
          <div
            v-for="item in category.items"
            :key="item.title"
            class="item flex gap-3 h-32 p-4 rounded-sm bg-white dark:bg-slate-800"
          >
            <img :src="item.logo" :alt="item.title" class="w-12 h-12 object-contain" width="48" height="48" />
            <div>
              <a :href="item.url" target="_blank" class="hover:text-blue-500 dark:text-slate-100">
                <h3 class="font-normal m-0">{{ item.title }}</h3>
              </a>
              <p class="text-gray-500 mt-2 leading-6">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </a-scrollbar>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    title: "前端框架",
    icon: "icon-park-outline-html-five",
    items: [
      {
        title: "Vue",
        description: "易学易用，性能出色，适用场景丰富的 Web 前端框架。",
        logo: "https://cn.vuejs.org/logo.svg",
        url: "https://cn.vuejs.org/",
      },
      {
        title: "Vue Router",
        description: "为 Vue.js 提供富有表现力、可配置的、方便的路由。",
        logo: "https://cn.vuejs.org/logo.svg",
        url: "https://router.vuejs.org/zh/",
      },
      {
        title: "Vue I18n",
        description: "Vue I18n 是 Vue.js 的国际化插件。",
        logo: "https://cn.vuejs.org/logo.svg",
        url: "https://kazupon.github.io/vue-i18n/zh/introduction.html",
      },
      {
        title: "VueUse",
        description: "Collection of Essential Vue Composition Utilities。",
        logo: "https://d33wubrfki0l68.cloudfront.net/2f6479d73bc25170dc532dd42e059166573bf478/61057/favicon.svg",
        url: "https://vueuse.org/",
      },
      {
        title: "Pinia",
        description: "符合直觉的 Vue.js 状态管理库。",
        logo: "https://pinia.vuejs.org/logo.svg",
        url: "https://pinia.vuejs.org/zh/",
      },
      {
        title: "Arco Design Vue",
        description: "字节跳动出品的企业级设计系统, Vue版。",
        logo: "https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico",
        url: "https://arco.design/vue/docs/start",
      },
      {
        title: "Naive UI",
        description: "一个 Vue 3 组件库, 比较完整，主题可调，使用 TypeScript。",
        logo: "https://www.naiveui.com/assets/naivelogo-93278402.svg",
        url: "https://www.naiveui.com/zh-CN/os-theme/docs/installation",
      },
      {
        title: "Element Plus",
        description: "基于 Vue 3，面向设计师和开发者的组件库。",
        logo: "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
        url: "https://element-plus.gitee.io/zh-CN/",
      },
      // {
      //   title: 'TDesign Vue Next',
      //   description: "TDesign 适配桌面端的组件库，适合在 vue3.x 技术栈项目中使用。",
      //   logo: '//static.tdesign.tencent.com/vue-next/apple-touch-icon.png',
      //   url: 'https://tdesign.tencent.com/vue-next/getting-started'
      // },

      {
        title: "Icones",
        description: "基于iconify的数万个图标合集。",
        logo: "https://icones.js.org/favicon.svg",
        url: "https://icones.js.org/",
      },

      {
        title: "Vuepress",
        description: "Vue 驱动的静态网站生成器。",
        logo: "https://cn.vuejs.org/logo.svg",
        url: "https://vuepress.vuejs.org/zh/guide/#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84",
      },
      {
        title: "Vitepress",
        description: "Vite 和 Vue 驱动的静态网站生成器。",
        logo: "https://cn.vuejs.org/logo.svg",
        url: "https://vitepress.vuejs.org/guide/what-is-vitepress",
      },
      {
        title: "Nuxt",
        description: "The Intuitive Web Framework。",
        logo: "https://nuxt.com/icon.png",
        url: "https://nuxt.com/docs/getting-started/introduction",
      },
    ],
  },
];
</script>

<route lang="json">
{
  "meta": {
    "title": "前端框架",
    "icon": "icon-park-outline-application-one"
  }
}
</route>

<style scoped></style>
