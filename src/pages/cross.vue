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
    title: "跨平台开发",
    icon: "",
    items: [
      {
        title: "Electron",
        description: "一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。",
        logo: "https://www.electronjs.org/zh/assets/img/favicon.ico",
        url: "https://www.electronjs.org/zh/docs/latest/",
      },
      {
        title: "Tauri",
        description: "构建跨平台的快速、安全、前端隔离应用。",
        logo: "https://tauri.app/zh-cn/meta/favicon-32x32.png",
        url: "https://tauri.app/zh-cn/",
      },
      {
        title: "Taro",
        description: "一个开放式跨端跨框架解决方案。",
        logo: "https://docs.taro.zone/img/taroLogo180.png",
        url: "https://docs.taro.zone/docs",
      },
      {
        title: "Uniapp",
        description: "一个使用 Vue.js 开发多端前端应用的框架。",
        logo: "https://web-assets.dcloud.net.cn/unidoc/zh/icon.png",
        url: "https://uniapp.dcloud.net.cn/",
      },
      {
        title: "Flutter",
        description: " Google 开源的应用开发框架。",
        logo: "https://flutter.cn/assets/images/cn/flutter-icon.png",
        url: "https://flutter.cn/",
      },
      {
        title: "React Native",
        description: "Learn once, write anywhere。",
        logo: "https://reactnative.dev/img/pwa/manifest-icon-512.png",
        url: "https://reactnative.dev/docs/environment-setup",
      },
    ],
  },
];
</script>

<route lang="json">
{
  "meta": {
    "title": "跨端平台",
    "icon": "icon-park-outline-page-template"
  }
}
</route>

<style scoped></style>
