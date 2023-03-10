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
    title: 'UI设计',
    icon: '',
    items: [
      {
        title: 'UI中国',
        description: "UI中国用户体验平台,中国用户体验联盟理事单位。",
        logo: 'https://www.ui.cn/Public/img/favicon.ico',
        url: 'https://www.ui.cn/'
      },
      {
        title: 'Mockup',
        description: "在线生成样机图片的平台。",
        logo: 'https://mockup.photos/Images/Site/metalogo.png',
        url: 'https://mockup.photos/'
      },
      {
        title: '中国色',
        description: "提供各种中国的传统颜色的名称，CMYK值，RGB值，16进制表示。",
        logo: 'http://zhongguose.com/img/favicon.ico',
        url: 'http://zhongguose.com/#lizi'
      },
      {
        title: 'Unsplash',
        description: "免费，高质量，专业的图片网站。",
        logo: 'https://unsplash.com/apple-touch-icon.png',
        url: 'https://unsplash.com/'
      },
      {
        title: 'LogolyPro',
        description: "生成P站风格LOGO的在线工具。",
        logo: 'https://www.logoly.pro/favicon.ico',
        url: 'https://www.logoly.pro/#/'
      },
      {
        title: 'Google Fonts',
        description: "包含1400+开源字体的查询网站，可以使用api引用。",
        logo: 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg',
        url: 'https://fonts.google.com/'
      },
      {
        title: '屏幕尺寸',
        description: "屏幕尺寸大全。",
        logo: 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg',
        url: 'https://uiiiuiii.com/screen/index.htm'
      },
      {
        title: '纸张尺寸',
        description: "纸张尺寸大全。",
        logo: 'https://papersizes.io/icon/apple-touch-icon.png',
        url: 'https://papersizes.io/chinese/'
      },
      {
        title: 'Semver',
        description: "语义化版本 2.0.0。",
        logo: 'https://papersizes.io/icon/apple-touch-icon.png',
        url: 'https://semver.org/lang/zh-CN/'
      },
      {
        title: 'Favicon.io',
        description: "根据文本快速生成favicon的在线网站。",
        logo: 'data:image/png;base64,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',
        url: 'https://favicon.io/favicon-generator/'
      },
      {
        title: 'Tsdoc',
        description: "一个标准化TypeScript文档注释的提案。",
        logo: 'https://tsdoc.org/images/apple-touch-icon.png',
        url: 'https://tsdoc.org/'
      },
      {
        title: 'TsMorph',
        description: "操作TypeScript AST的工具。",
        logo: 'https://tsdoc.org/images/apple-touch-icon.png',
        url: 'https://ts-morph.com/'
      },
      {
        title: 'Vue Docgen API',
        description: "将vue组件转换为文档对象。",
        logo: 'https://vue-styleguidist.github.io/assets/logo.png',
        url: 'https://vue-styleguidist.github.io/docs/Docgen.html'
      },
      {
        title: 'Coverview',
        description: "简单封面生成网站。",
        logo: 'https://coverview.vercel.app/static/media/logo.5d3dd1b68da4b08fcf92.png',
        url: 'https://coverview.vercel.app/editor'
      },
      {
        title: 'Unsplash',
        description: "支持4K高清免费下载的图片网站。",
        logo: 'https://unsplash.com/safari-pinned-tab.svg',
        url: 'https://unsplash.com/'
      },
      {
        title: 'Pixabay',
        description: "球知名的图库网站及充满活力的创意社区。",
        logo: 'https://pixabay.com/safari-pinned-tab.svg',
        url: 'https://pixabay.com/'
      },
      {
        title: 'Stocksnap',
        description: "由多位优秀摄影师组建，旨在分享其优秀作品。",
        logo: 'https://stocksnap.io/img/favicon.png',
        url: 'https://stocksnap.io/'
      },
      {
        title: '山海鲸',
        description: "新一代人工智能数据可视化大屏软件。",
        logo: 'https://www.shanhaibi.com/wp-content/themes/twentyseventeen/assets/images/favicon.ico',
        url: 'https://www.shanhaibi.com/?type=marketlist'
      },
      {
        title: '联通云',
        description: "可视化平台优秀项目案例。",
        logo: 'https://anov.cucloud.cn/anov-projects/favicon.ico',
        url: 'https://anov.cucloud.cn/anov-projects/'
      },
    ]
  },
]

</script>

<route lang="json">
{
  "meta": {
    "title": "设计交互",
    "icon": "icon-park-outline-bydesign"
  }
}
</route>

<style scoped></style>