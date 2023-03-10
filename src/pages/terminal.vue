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
    title: '命令行工具',
    icon: '',
    items: [
      {
        title: 'Minimist',
        description: "解析命令行参数的工具，适合轻量级项目。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/minimistjs/minimist'
      },
      {
        title: 'Cac',
        description: "用于构建CLI应用, 类似commander的JavaScript库。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/cacjs/cac'
      },
      {
        title: 'Prompts',
        description: "轻量，美观，用户友好的交互式询问工具。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/terkelg/prompts'
      },
      {
        title: 'Kolorist',
        description: "给终端输入输出添加颜色样式的小巧工具。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/marvinhagemeister/kolorist'
      },
      {
        title: 'Commander',
        description: "完整的 node.js 命令行解决方案。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md'
      },
      {
        title: 'Inquirer',
        description: "通用的交互式命令行询问工具。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/SBoudrias/Inquirer.js'
      },
      {
        title: 'Ora',
        description: "优雅的终端loading效果输出工具。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/sindresorhus/ora'
      },
      {
        title: 'Chalk',
        description: "终端字体颜色样式工具。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/chalk/chalk'
      },
      {
        title: 'Fs Extra',
        description: "扩展原生fs模块的文件处理工具。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/jprichardson/node-fs-extra'
      },
      {
        title: 'Figlet',
        description: "FIGfont规范的实现，可在浏览器和NodeJS中使用。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/patorjk/figlet.js'
      },
      {
        title: 'Plopjs',
        description: "快速生成代码或模板的微生成器框架。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://plopjs.com/documentation/'
      },
      {
        title: 'Yeoman',
        description: "脚手架工具。",
        logo: 'https://yeoman.io/static/favicon.b25e58c4b8.ico',
        url: 'https://yeoman.io/'
      },
      {
        title: 'Node.js Toolbox',
        description: "发现NodeJS生态中活跃维护和流行的库。",
        logo: 'https://nodejstoolbox.com/apple-touch-icon.png',
        url: 'https://nodejstoolbox.com/'
      },
      {
        title: 'Icons8',
        description: "各种加载动效。",
        logo: 'https://icons8.com/preloaders/img/favicons/favicon-194x194.png',
        url: 'https://icons8.com/preloaders/'
      },
      {
        title: 'Whirl',
        description: "纯CSS实现的各种加载动效。",
        logo: 'https://whirl.netlify.app/favicon.ico',
        url: 'https://whirl.netlify.app/'
      },
      {
        title: 'Tailwindcomponents',
        description: "社区实现的各种tailwindcss组件。",
        logo: 'https://tailwindcomponents.com/apple-touch-icon.png',
        url: 'https://tailwindcomponents.com/'
      },
      {
        title: 'Party.js',
        description: "一个在点击时增加烟花动效的JavaScript库。",
        logo: 'https://party.js.org/img/logo.svg',
        url: 'https://party.js.org/'
      },
      {
        title: 'Web.dev layout',
        description: "CSS布局。",
        logo: 'https://web.dev/images/favicon.ico',
        url: 'https://web.dev/patterns/layout/'
      },
      {
        title: 'Githack',
        description: "把github文件作为cdn使用。",
        logo: 'https://raw.githubusercontent.com/neoascetic/rawgithack/679b0e7/web/img/sushi.png',
        url: 'http://raw.githack.com/'
      },
      {
        title: 'Adobe Color',
        description: "Adobe Color。",
        logo: 'https://color.adobe.com/apple-touch-icon.png',
        url: 'https://color.adobe.com/zh/create/color-contrast-analyzer'
      },
      {
        title: 'Graphemica',
        description: "查询unicode字符的在线网站",
        logo: 'https://graphemica.com/assets/touch/apple-touch-icon-144x144-precomposed-fcf60ad170a7abd111aff90166435ccf9bfeacf9ffdc30431504afa03a2646f0.png',
        url: 'https://graphemica.com/'
      },
      {
        title: 'Buttons Generator',
        description: "各种按钮生成器。",
        logo: 'https://markodenic.com/wp-content/themes/blog/favicon/apple-touch-icon.png',
        url: 'https://markodenic.com/tools/buttons-generator/'
      },
      {
        title: 'Svgrepo',
        description: "包含50w+开源的svg矢量图标。",
        logo: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.svgrepo.com/&size=128',
        url: 'https://www.svgrepo.com/'
      },
    ]
  },
]

</script>

<route lang="json">
{
  "meta": {
    "title": "终端交互",
    "icon": "icon-park-outline-terminal"
  }
}
</route>

<style scoped></style>