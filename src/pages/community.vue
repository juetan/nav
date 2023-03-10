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
    title: '社区论坛',
    icon: '',
    items: [
      {
        title: '掘金',
        description: "面向全球中文开发者的技术内容分享与交流平台。",
        logo: 'http://www.alloyteam.com/nav/static/images/gold-favicon.png',
        url: 'https://juejin.cn/'
      },
      {
        title: '吾爱破解',
        description: "The Intuitive Web Framework。",
        logo: 'https://avatar.52pojie.cn/images/noavatar_small.gif',
        url: 'https://www.52pojie.cn/'
      },
      {
        title: '知乎',
        description: "中文互联网高质量的问答社区和创作者聚集的原创内容平台。",
        logo: 'https://static.zhihu.com/heifetz/favicon.ico',
        url: 'https://www.zhihu.com/'
      },
      {
        title: 'V2ex',
        description: "创意工作者的社区, 讨论编程、设计、硬件、游戏等令人激动的话题。",
        logo: 'https://v2ex.com/static/icon-192.png',
        url: 'https://v2ex.com/'
      },
      {
        title: '博客园',
        description: "一个面向开发者的知识分享社区。",
        logo: 'https://common.cnblogs.com/favicon.ico',
        url: 'https://www.cnblogs.com/'
      },
    ]
  },
  {
    title: '前端博主',
    icon: '',
    items: [

      {
        title: '张鑫旭',
        description: "鑫空间-鑫生活。",
        logo: 'https://static.zhihu.com/heifetz/favicon.ico',
        url: 'https://www.zhangxinxu.com/'
      },
      {
        title: '廖雪峰',
        description: "研究互联网产品和技术，提供原创中文精品教程。",
        logo: 'https://static.zhihu.com/heifetz/favicon.ico',
        url: 'https://www.liaoxuefeng.com/'
      },
      {
        title: '阮一峰',
        description: "记录每周值得分享的科技内容，周五发布。",
        logo: 'http://www.ruanyifeng.com/blog/images/person2_s.jpg',
        url: 'http://www.ruanyifeng.com/blog/'
      },
      {
        title: '小火柴',
        description: "以自学前端的学习总结为基础，尽量囊括了前端体系涉及的内容。",
        logo: 'https://www.xiaohuochai.cc/logo/favicon.ico',
        url: 'https://www.xiaohuochai.cc/'
      },
      {
        title: '玉伯',
        description: "淘宝前端类库 KISSY、前端模块化开发框架SeaJS、前端基础类库Arale的创始人。",
        logo: 'https://picx.zhimg.com/v2-c6d5dec1d269a33944d6fd31660e928b_xl.jpg?source=32738c0c',
        url: 'https://www.zhihu.com/people/lifesinger'
      },
    ]
  },
]

</script>

<route lang="json">
{
  "meta": {
    "title": "社区论坛",
    "icon": "icon-park-outline-wechat"
  }
}
</route>

<style scoped></style>