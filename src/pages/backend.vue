<template>
  <div class="flex-1 h-full grid grid-rows-[auto_1fr] ">
    <div class="flex justify-between items-center mx-6 pt-4 pb-0 border-b border-gray-200 dark:border-slate-800">
      <div>
        <div class="text-base">社区论坛</div>
        <p class="text-slate-500 p-0 mt-2">
          涵盖前端开发、设计、运维、测试、产品、运营等领域，目前共收录 个网站。
        </p>
      </div>
      <div class="flex gap-2">
        <a-input-search class="w-96" placeholder="请输入关键字..."></a-input-search>
      </div>
    </div>
    <a-scrollbar ref="scrollRef" outer-class="overflow-hidden" class="h-full w-full overflow-auto mt-3 pb-4">
      <div v-for="category in items" :key="category.title" ref="itemsRef">
        <div class="text-slate-500 px-6 mb-3 mt-2">{{ category.title }}</div>
        <div class="flex-1 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 px-5 pb-4">
          <div v-for="item in category.items" :key="item.title"
            class="item flex gap-3 h-32 p-4 rounded-sm bg-white dark:bg-slate-800">
            <img :src="item.logo" :alt="item.title" class="w-12 h-12 object-contain" width="48" height="48">
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
    title: '后端框架',
    icon: '',
    items: [
      
      {
        title: 'Connect',
        description: "使用中间件的HTTP框架。",
        logo: 'https://www.expressjs.com.cn/images/favicon.png',
        url: 'https://github.com/senchalabs/connect'
      },
      {
        title: 'Express',
        description: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架。",
        logo: 'https://www.expressjs.com.cn/images/favicon.png',
        url: 'https://www.expressjs.com.cn/'
      },
      {
        title: 'Koa',
        description: "基于 Node.js 平台的下一代 web 开发框架。",
        logo: 'https://www.expressjs.com.cn/images/favicon.png',
        url: 'https://koa.bootcss.com/'
      },
      {
        title: 'NestJS',
        description: "用于构建高效且可扩展的服务器端应用程序的渐进式 Node.js 框架。",
        logo: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        url: 'https://docs.nestjs.com/'
      },
      {
        title: 'EggJS',
        description: "为企业级框架和应用而生, 帮助开发团队和开发人员降低开发和维护成本。",
        logo: 'https://www.eggjs.org/logo.svg',
        url: 'https://www.eggjs.org/zh-CN/intro/quickstart'
      },
      {
        title: 'Midway',
        description: "淘宝前端架构团队基于渐进式理念研发的 Node.js 框架。",
        logo: 'https://midwayjs.org/img/logo.svg',
        url: 'http://midwayjs.org/docs/intro'
      },
    ]
  },
]

</script>

<route lang="json">
{
  "meta": {
    "title": "后端框架",
    "icon": "icon-park-outline-data-server"
  }
}
</route>

<style scoped></style>