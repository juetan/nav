<template>
  <div class="flex-1 h-full grid grid-rows-[auto_1fr] ">
    <div class="flex justify-between items-center mx-6 pt-4 pb-0 border-b border-gray-200 dark:border-slate-800">
      <div>
        <div class="text-base">常用网址</div>
        <p class="text-slate-500 p-0 mt-2">
          涵盖前端开发、设计、运维、测试、产品、运营等领域，目前共收录 {{ itemsLength }} 个网站。
        </p>
      </div>
      <div class="flex gap-2">
        <a-select placeholder="按主题查看"></a-select>
        <a-input-search class="w-96" placeholder="请输入关键字..."></a-input-search>
      </div>
    </div>
    <div class="flex items-center gap-2 px-6 mt-2 text-slate-500">
      <span>分类({{ items.length }}): </span>
      <a-link v-for="item in items" :key="item.title" @click="onScrollItem(item)">
        <span class="text-slate-600 hover:text-blue-500">
          {{ item.title }}
        </span>
      </a-link>
    </div>
    <a-scrollbar ref="scrollRef" outer-class="overflow-hidden" class="h-full overflow-auto mt-3 pb-4">
      <div v-for="category in items" :key="category.title" ref="itemsRef">
        <div class="text-slate-500 px-6 mb-3 mt-2" >{{ category.title }}</div>
        <div class="list flex-1 grid gap-4 px-5 pb-4">
          <div v-for="item in category.items" :key="item.title"
            class="item flex w-[280px] gap-3 h-32 p-4 rounded-sm bg-white dark:bg-slate-800">
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
import { useDark } from '@vueuse/core';

const itemsRef = ref();
const scrollRef = ref();

onMounted(() => {
  console.log(itemsRef.value);
})



const theme = useDark({
  onChanged(isDark) {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      document.body.setAttribute('arco-theme', 'light');
    }
  }
})

const toggleTheme = () => {
  theme.value = !theme.value
}

const items = [
  {
    title: '语言相关',
    icon: '',
    items: [
      {
        title: 'Mdn',
        description: "非常官方的开发者文档, 包含html，css，javascript相关的教程。",
        logo: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
        url: 'https://developer.mozilla.org/zh-CN/'
      },
      {
        title: 'EcmaScript',
        description: "一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。",
        logo: 'https://tc39.es/ecma262/2022/img/favicon.ico',
        url: 'https://262.ecma-international.org/#sec-intro'
      },
      {
        title: 'JavaScript',
        description: "Ecmascript的语言规范。",
        logo: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript'
      },
      {
        title: 'TypeScript',
        description: "基于Javascript的强类型编程语言。",
        logo: 'https://www.typescriptlang.org/favicon-32x32.png',
        url: 'https://www.typescriptlang.org/zh/'
      },
      {
        title: 'NodeJS',
        description: "一个开源、跨平台的 JavaScript 运行时环境。",
        logo: 'https://nodejs.org/static/images/favicons/apple-touch-icon.png',
        url: 'https://nodejs.org/zh-cn/docs/'
      },
      {
        title: 'Css',
        description: "层叠样式表。",
        logo: 'https://www.w3.org/Style/CSS/w3c-2010/w3c-logo',
        url: 'https://www.w3.org/Style/CSS/specs.en.html'
      },
      {
        title: 'Sass',
        description: "世界上最成熟、最稳定、最强大的专业级CSS扩展语言。",
        logo: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        url: 'https://sass-lang.com/documentation/'
      },
      {
        title: 'Less',
        description: "一门向后兼容的 CSS 扩展语言。",
        logo: 'https://less.bootcss.com/public/img/less_logo.png',
        url: 'https://less.bootcss.com/#%E6%A6%82%E8%A7%88'
      },
      {
        title: 'Stylus',
        description: "富于表现力、动态的、健壮的 CSS 扩展语言。",
        logo: 'https://www.stylus-lang.cn/img/stylus-logo.png',
        url: 'https://www.stylus-lang.cn/'
      },
      {
        title: 'Html',
        description: "超文本标记语言, 一种制作万维网页面的标准语言。",
        logo: 'https://resources.whatwg.org/logo.svg',
        url: 'https://html.spec.whatwg.org/'
      },
      {
        title: 'Npm',
        description: "NodeJS的官方包管理工具。",
        logo: 'https://docs.npmjs.com/favicon-32x32.png',
        url: 'https://docs.npmjs.com/about-npm'
      },
      {
        title: 'Yarn',
        description: "Facebook 贡献的 Javascript 包管理器。",
        logo: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTE1NC44IDUxOCI+PHN0eWxlPi5zdDB7ZmlsbDojMmM4ZWJifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTcxOC42IDI1Ny44Yy04IDI3LjYtMjAuOCA0Ny42LTM1LjIgNjMuNlYxODFjMC05LjYtOC40LTE3LjYtMjEuNi0xNy42LTUuNiAwLTEwLjQgMi44LTEwLjQgNi44IDAgMi44IDEuNiA1LjIgMS42IDEyLjh2NjQuNGMtNC44IDI4LTE2LjggNTQtMzIuOCA1NC0xMS42IDAtMTguNC0xMS42LTE4LjQtMzMuMiAwLTMzLjYgNC40LTUxLjIgMTEuNi04MC44IDEuNi02IDEzLjItMjItNi40LTIyLTIxLjIgMC0xOC40IDgtMjEuMiAxNC44IDAgMC0xMy40IDQ3LjYtMTMuNCA5MCAwIDM0LjggMTQuNiA1Ny42IDQxLjQgNTcuNiAxNy4yIDAgMjkuNi0xMS42IDM5LjItMjcuNlYzNTFjLTI2LjQgMjMuMi00OS42IDQzLjYtNDkuNiA4NCAwIDI1LjYgMTYgNDYgMzguNCA0NiAyMC40IDAgNDEuNi0xNC44IDQxLjYtNTYuOFYzNTVjMjEuNi0xOC44IDQ0LjgtNDIuNCA1OC40LTg4LjguNC0xLjYuNC0zLjYuNC00IDAtNy42LTcuNi0xNi40LTE0LTE2LjQtNCAwLTcuMiAzLjYtOS42IDEyem0tNzYuOCAxOThjLTYuNCAwLTEwLjQtOS42LTEwLjQtMjIgMC0yNCA4LjgtMzkuMiAyMS42LTUyLjR2NDIuOGMwIDcuNiAxLjYgMzEuNi0xMS4yIDMxLjZ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTgzMy40IDMwMWMtOS42IDAtMTMuNi05LjYtMTMuNi0xOC40di02NmMwLTkuNi04LjQtMTcuNi0yMS42LTE3LjYtNS42IDAtMTAuNCAyLjgtMTAuNCA2LjggMCAyLjggMS42IDUuMiAxLjYgMTIuOHY2MS42Qzc4NSAyOTEuNCA3NzcuOCAzMDEgNzY3IDMwMWMtMTQgMC0yMi44LTEyLTIyLjgtMzIuOCAwLTU3LjYgMzUuNi04My42IDY2LTgzLjYgNCAwIDggLjggMTEuNi44IDQgMCA1LjItMi40IDUuMi05LjIgMC0xMC40LTcuNi0xNi44LTE4LjQtMTYuOC00OC44IDAtOTUuMiA0MC44LTk1LjIgMTA3LjYgMCAzNCAxNi40IDYwLjQgNDcuNiA2MC40IDE1LjIgMCAyNi40LTcuMiAzNC40LTE2LjQgNiA5LjYgMTYuOCAxNi40IDMwLjggMTYuNCAzNC40IDAgNTAuNC0zNiA1Ny4yLTYyLjQuNC0xLjYuNC0yLjQuNC0yLjggMC03LjYtNy42LTE2LjQtMTQtMTYuNC00IDAtOCAzLjYtOS42IDEyLTMuNiAxNy42LTEwLjggNDMuMi0yNi44IDQzLjJ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTk0OSAzMjcuNGMzNC40IDAgNTAtMzYgNTcuMi02Mi40IDAtLjguNC0xLjYuNC0yLjggMC03LjYtNy42LTE2LjQtMTQtMTYuNC00IDAtOCAzLjYtOS42IDEyLTMuNiAxNy42LTEwLjQgNDMuMi0yOC44IDQzLjItMTAuOCAwLTE2LTEwLjQtMTYtMjEuNiAwLTQwIDE4LTg3LjIgMTgtOTIgMS42LTkuMi0xNC40LTIyLjQtMTkuMi0yMi40aC0yMC44Yy00IDAtOCAwLTIxLjItMS42LTQuNC0xNi40LTE1LjYtMjEuMi0yNS4yLTIxLjItMTAuNCAwLTIwIDcuMi0yMCAxOC40IDAgMTEuNiA3LjIgMjAgMTcuMiAyNS42LS40IDIwLjQtMiA1My42LTYuNCA2OS42LTMuNiAxMy42IDE3LjIgMjggMjIuNCAxMS4yIDcuMi0yMy4yIDkuNi01OCAxMC03My42aDM0LjhjLTEyLjggMzQuNC0yMCA2Mi44LTIwIDg4LjQgMCAzNS4yIDIyLjQgNDUuNiA0MS4yIDQ1LjZ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTk4NC42IDMwOS44YzAgMTQuOCAxMS4yIDE3LjYgMTkuMiAxNy42IDExLjYgMCAxMS4yLTkuNiAxMS4yLTE3LjJ2LTU4LjRjMi44LTMxLjYgMjcuNi02NiAzOS4yLTY2IDcuNiAwIDguNCAxMC40IDguNCAyMi44djgxLjJjMCAyMC40IDEyLjQgMzcuNiAzMy42IDM3LjYgMzQuNCAwIDUxLjQtMzYgNTguMi02Mi40LjQtMS42LjQtMi40LjQtMi44IDAtNy42LTcuNi0xNi40LTE0LTE2LjQtNCAwLTggMy42LTkuNiAxMi0zLjYgMTcuNi0xMS44IDQzLjItMjcuOCA0My4yLTEwLjQgMC0xMC40LTE0LjgtMTAuNC0xOC40di04Mi44YzAtMTguNC02LjQtNDAuNC0zMy4yLTQwLjQtMTkuNiAwLTM0IDE3LjItNDQuOCAzOS42di0xOGMwLTkuNi04LjQtMTcuNi0yMS42LTE3LjYtNS42IDAtMTAuNCAyLjgtMTAuNCA2LjggMCAyLjggMS42IDUuMiAxLjYgMTIuOHYxMjYuOHpNMjU5IDBjMTQzIDAgMjU5IDExNiAyNTkgMjU5UzQwMiA1MTggMjU5IDUxOCAwIDQwMiAwIDI1OSAxMTYgMCAyNTkgMHoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDM1LjIgMzM3LjVjLTEuOC0xNC4yLTEzLjgtMjQtMjkuMi0yMy44LTIzIC4zLTQyLjMgMTIuMi01NS4xIDIwLjEtNSAzLjEtOS4zIDUuNC0xMyA3LjEuOC0xMS42LjEtMjYuOC01LjktNDMuNS03LjMtMjAtMTcuMS0zMi4zLTI0LjEtMzkuNCA4LjEtMTEuOCAxOS4yLTI5IDI0LjQtNTUuNiA0LjUtMjIuNyAzLjEtNTgtNy4yLTc3LjgtMi4xLTQtNS42LTYuOS0xMC04LjEtMS44LS41LTUuMi0xLjUtMTEuOS40QzI5My4xIDk2IDI4OS42IDkzLjggMjg2LjkgOTJjLTUuNi0zLjYtMTIuMi00LjQtMTguNC0yLjEtOC4zIDMtMTUuNCAxMS0yMi4xIDI1LjItMSAyLjEtMS45IDQuMS0yLjcgNi4xLTEyLjcuOS0zMi43IDUuNS00OS42IDIzLjgtMi4xIDIuMy02LjIgNC0xMC41IDUuNmguMWMtOC44IDMuMS0xMi44IDEwLjMtMTcuNyAyMy4zLTYuOCAxOC4yLjIgMzYuMSA3LjEgNDcuNy05LjQgOC40LTIxLjkgMjEuOC0yOC41IDM3LjUtOC4yIDE5LjQtOS4xIDM4LjQtOC44IDQ4LjctNyA3LjQtMTcuOCAyMS4zLTE5IDM2LjktMS42IDIxLjggNi4zIDM2LjYgOS44IDQyIDEgMS42IDIuMSAyLjkgMy4zIDQuMi0uNCAyLjctLjUgNS42LjEgOC42IDEuMyA3IDUuNyAxMi43IDEyLjQgMTYuMyAxMy4yIDcgMzEuNiAxMCA0NS44IDIuOSA1LjEgNS40IDE0LjQgMTAuNiAzMS4zIDEwLjZoMWM0LjMgMCA1OC45LTIuOSA3NC44LTYuOCA3LjEtMS43IDEyLTQuNyAxNS4yLTcuNCAxMC4yLTMuMiAzOC40LTEyLjggNjUtMzAgMTguOC0xMi4yIDI1LjMtMTQuOCAzOS4zLTE4LjIgMTMuNi0zLjMgMjIuMS0xNS43IDIwLjQtMjkuNHptLTIzLjggMTQuN2MtMTYgMy44LTI0LjEgNy4zLTQzLjkgMjAuMi0zMC45IDIwLTY0LjcgMjkuMy02NC43IDI5LjNzLTIuOCA0LjItMTAuOSA2LjFjLTE0IDMuNC02Ni43IDYuMy03MS41IDYuNC0xMi45LjEtMjAuOC0zLjMtMjMtOC42LTYuNy0xNiA5LjYtMjMgOS42LTIzcy0zLjYtMi4yLTUuNy00LjJjLTEuOS0xLjktMy45LTUuNy00LjUtNC4zLTIuNSA2LjEtMy44IDIxLTEwLjUgMjcuNy05LjIgOS4zLTI2LjYgNi4yLTM2LjkuOC0xMS4zLTYgLjgtMjAuMS44LTIwLjFzLTYuMSAzLjYtMTEtMy44Yy00LjQtNi44LTguNS0xOC40LTcuNC0zMi43IDEuMi0xNi4zIDE5LjQtMzIuMSAxOS40LTMyLjFzLTMuMi0yNC4xIDcuMy00OC44YzkuNS0yMi41IDM1LjEtNDAuNiAzNS4xLTQwLjZzLTIxLjUtMjMuOC0xMy41LTQ1LjJjNS4yLTE0IDcuMy0xMy45IDktMTQuNSA2LTIuMyAxMS44LTQuOCAxNi4xLTkuNSAyMS41LTIzLjIgNDguOS0xOC44IDQ4LjktMTguOHMxMy0zOS41IDI1LTMxLjhjMy43IDIuNCAxNyAzMiAxNyAzMnMxNC4yLTguMyAxNS44LTUuMmM4LjYgMTYuNyA5LjYgNDguNiA1LjggNjgtNi40IDMyLTIyLjQgNDkuMi0yOC44IDYwLTEuNSAyLjUgMTcuMiAxMC40IDI5IDQzLjEgMTAuOSAyOS45IDEuMiA1NSAyLjkgNTcuOC4zLjUuNC43LjQuN3MxMi41IDEgMzcuNi0xNC41YzEzLjQtOC4zIDI5LjMtMTcuNiA0Ny40LTE3LjggMTcuNS0uMyAxOC40IDIwLjIgNS4yIDIzLjR6Ii8+PC9zdmc+',
        url: 'https://yarnpkg.com/getting-started/migration'
      },
      {
        title: 'Pnpm',
        description: "快速的，节省磁盘空间的包管理工具。",
        logo: 'https://pnpm.io/zh/img/favicon.png',
        url: 'https://pnpm.io/zh/'
      },
      {
        title: 'Nvm',
        description: "npm推荐的NodeJS版本管理工具(Windows版)。",
        logo: 'https://raw.githubusercontent.com/nvm-sh/logos/HEAD/nvm-logo-color.svg',
        url: 'https://github.com/coreybutler/nvm-windows'
      },
      {
        title: 'Volta',
        description: "NodeJS版本管理工具。",
        logo: 'https://github.com/volta-cli/volta/raw/main/volta.png?raw=true',
        url: 'https://docs.volta.sh/guide/getting-started'
      },
      {
        title: 'Nrm',
        description: "Npm镜像源切换工具。",
        logo: 'https://docs.npmjs.com/favicon-32x32.png',
        url: 'https://www.npmjs.com/package/nrm'
      },
    ]
  },
  {
    title: '工具类库',
    icon: '',
    items: [
      {
        title: 'Lodash',
        description: "一致性、模块化、高性能的 JavaScript 实用工具库。",
        logo: 'https://www.lodashjs.com/img/favicon.ico',
        url: 'https://www.lodashjs.com/'
      },
      {
        title: 'Dayjs',
        description: "Moment.js 的 2kB 轻量化方案，拥有同样强大的 API。",
        logo: 'https://dayjs.gitee.io/img/favicon.ico',
        url: 'https://dayjs.gitee.io/docs/zh-CN/installation/installation'
      },
      {
        title: 'Axios',
        description: "一个基于 promise 网络请求库，作用于node.js 和浏览器中。",
        logo: 'https://axios-http.com/assets/favicon.ico',
        url: 'https://axios-http.com/zh/docs/intro'
      },
      {
        title: 'Numeral',
        description: "一个处理和格式化数字的Javascript库。",
        logo: 'https://axios-http.com/assets/favicon.ico',
        url: 'http://numeraljs.com/'
      },
      {
        title: 'Mock.js',
        description: "生成随机数据，拦截 Ajax 请求。",
        logo: 'http://mockjs.com/assets/img/logo-2.svg',
        url: 'http://mockjs.com/examples.html'
      },
      {
        title: 'Swagger Typescript API',
        description: "根据OpenAPI格式生成typescript类型，请求API。",
        logo: 'http://mockjs.com/assets/img/logo-2.svg',
        url: 'https://github.com/acacode/swagger-typescript-api'
      },
      {
        title: 'Animate',
        description: "Css动画库。",
        logo: 'https://animate.style/img/favicon.ico',
        url: 'https://animate.style/'
      },
      {
        title: 'Animista',
        description: "Css动画效果，可以在线生成代码。",
        logo: 'https://animista.net/favicon.ico',
        url: 'https://animista.net/play/basic/scale-up'
      },
    ]
  },
  {
    title: '前端框架',
    icon: 'icon-park-outline-html-five',
    items: [
      {
        title: 'Vue',
        description: "易学易用，性能出色，适用场景丰富的 Web 前端框架。",
        logo: 'https://cn.vuejs.org/logo.svg',
        url: 'https://cn.vuejs.org/'
      },
      {
        title: 'Vue Router',
        description: "为 Vue.js 提供富有表现力、可配置的、方便的路由。",
        logo: 'https://cn.vuejs.org/logo.svg',
        url: 'https://router.vuejs.org/zh/'
      },
      {
        title: 'Vue I18n',
        description: "Vue I18n 是 Vue.js 的国际化插件。",
        logo: 'https://cn.vuejs.org/logo.svg',
        url: 'https://kazupon.github.io/vue-i18n/zh/introduction.html'
      },
      {
        title: 'VueUse',
        description: "Collection of Essential Vue Composition Utilities。",
        logo: 'https://d33wubrfki0l68.cloudfront.net/2f6479d73bc25170dc532dd42e059166573bf478/61057/favicon.svg',
        url: 'https://vueuse.org/'
      },
      {
        title: 'Pinia',
        description: "符合直觉的 Vue.js 状态管理库。",
        logo: 'https://pinia.vuejs.org/logo.svg',
        url: 'https://pinia.vuejs.org/zh/'
      },
      {
        title: 'Arco Design Vue',
        description: "字节跳动出品的企业级设计系统, Vue版。",
        logo: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
        url: 'https://arco.design/vue/docs/start'
      },
      {
        title: 'Naive UI',
        description: "一个 Vue 3 组件库, 比较完整，主题可调，使用 TypeScript。",
        logo: 'https://www.naiveui.com/assets/naivelogo-93278402.svg',
        url: 'https://www.naiveui.com/zh-CN/os-theme/docs/installation'
      },
      {
        title: 'Element Plus',
        description: "基于 Vue 3，面向设计师和开发者的组件库。",
        logo: 'https://element-plus.gitee.io/images/element-plus-logo-small.svg',
        url: 'https://element-plus.gitee.io/zh-CN/'
      },
      // {
      //   title: 'TDesign Vue Next',
      //   description: "TDesign 适配桌面端的组件库，适合在 vue3.x 技术栈项目中使用。",
      //   logo: '//static.tdesign.tencent.com/vue-next/apple-touch-icon.png',
      //   url: 'https://tdesign.tencent.com/vue-next/getting-started'
      // },




      {
        title: 'Icones',
        description: "基于iconify的数万个图标合集。",
        logo: 'https://icones.js.org/favicon.svg',
        url: 'https://icones.js.org/'
      },

      {
        title: 'Vuepress',
        description: "Vue 驱动的静态网站生成器。",
        logo: 'https://cn.vuejs.org/logo.svg',
        url: 'https://vuepress.vuejs.org/zh/guide/#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84'
      },
      {
        title: 'Vitepress',
        description: "Vite 和 Vue 驱动的静态网站生成器。",
        logo: 'https://cn.vuejs.org/logo.svg',
        url: 'https://vitepress.vuejs.org/guide/what-is-vitepress'
      },
      {
        title: 'Nuxt',
        description: "The Intuitive Web Framework。",
        logo: 'https://nuxt.com/icon.png',
        url: 'https://nuxt.com/docs/getting-started/introduction'
      },


    ],
  },
  {
    title: '代码风格',
    icon: '',
    items: [
      {
        title: 'Eslint',
        description: "一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具。",
        logo: 'https://eslint.org/favicon.ico',
        url: 'https://eslint.org/docs/latest/use/getting-started'
      },
      {
        title: 'Prettier',
        description: "一个 “有主见” 的代码格式化工具。",
        logo: 'https://prettier.io/icon.png',
        url: 'https://prettier.io/docs/en/index.html'
      },
      {
        title: 'Stylelint',
        description: "一个摩登的 CSS linter 工具。",
        logo: 'https://stylelint.io/img/favicon.ico',
        url: 'https://stylelint.io/'
      },
      {
        title: 'Airbnb Guide',
        description: "Airbnb的JavaScript规范。",
        logo: 'https://z1.muscache.cn/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico',
        url: 'https://github.com/airbnb/javascript'
      },
      {
        title: 'Puppeteer',
        description: "一个控制 headless Chrome 的 Node.js 库。",
        logo: 'https://pptr.dev/img/favicon.ico',
        url: 'https://pptr.dev/'
      },
      {
        title: 'Markdown Guide',
        description: "Markdown语法介绍。",
        logo: 'https://www.markdownguide.org/favicon.ico',
        url: 'https://www.markdownguide.org/basic-syntax/'
      },
      {
        title: 'OpenAPI',
        description: "为 RESTful API 定义一个与语言无关的标准接口。",
        logo: 'https://www.openapis.org/wp-content/uploads/sites/3/2016/11/favicon.png',
        url: 'https://www.openapis.org/'
      },
      {
        title: 'Json',
        description: "一种轻量级的数据交换格式。",
        logo: 'http://json-schema.org/assets/logo.svg',
        url: 'http://json-schema.org/'
      },
    ]
  },
  {
    title: '构建工具',
    icon: '',
    items: [
      {
        title: 'Estree',
        description: "EcmaScript的AST解析标准。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/estree/estree'
      },
      {
        title: 'Esprima',
        description: "JQuery出品，基于Estree，高性能的解析器。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://esprima.org/'
      },
      {
        title: 'Acorn',
        description: "基于Estree标准，使用JavaScript编写的解析器。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/acornjs/acorn'
      },
      {
        title: 'Espree',
        description: "Eslint出品，基于Acorn，兼容Esprima的解析器。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/eslint/espree'
      },
      {
        title: 'Terser',
        description: "JavaScript代码压缩器。",
        logo: 'https://terser.org/favicon.ico',
        url: 'https://terser.org/docs/cli-usage'
      },
      {
        title: 'Tsx',
        description: "基于Esbuild，运行和编译Typescript的命令行工具(别名esno)。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://github.com/esbuild-kit/tsx'
      },
      {
        title: 'Tsup',
        description: "基于Esbuild，零配置构建Typescript库的编译工具。",
        logo: 'https://github.com/fluidicon.png',
        url: 'https://tsup.egoist.dev/'
      },
      {
        title: 'Vite',
        description: "下一代的前端工具链, 为开发提供极速响应。",
        logo: 'https://cn.vitejs.dev/logo.svg',
        url: 'https://cn.vitejs.dev/'
      },
      {
        title: 'Swc',
        description: "基于rust的web端构建工具。",
        logo: 'https://swc.rs/favicon/apple-touch-icon.png',
        url: 'https://swc.rs/'
      },
      {
        title: 'Esbuild',
        description: "基于go的web端构建工具。",
        logo: 'https://esbuild.github.io/favicon.svg',
        url: 'https://esbuild.github.io/'
      },
      {
        title: 'Unbuild',
        description: "基于rollup的构建工具。",
        logo: 'https://esbuild.github.io/favicon.svg',
        url: 'https://github.com/unjs/unbuild'
      },
      {
        title: 'Postcss',
        description: "一个用 JavaScript 工具和插件转换 CSS 代码的工具。",
        logo: 'https://www.postcss.com.cn/assets/logo.3e39b0aa.svg',
        url: 'https://www.postcss.com.cn/'
      },
      {
        title: 'Babel',
        description: "JavaScript 编译器，使用下一代的 JavaScript 语法编程。",
        logo: 'https://babeljs.io/img/favicon.png',
        url: 'https://babeljs.io/docs/'
      },
      {
        title: 'Rollup',
        description: "默认基于ESM的 JavaScript 模块化打包工具。",
        logo: 'https://rollupjs.org/favicon.png',
        url: 'https://rollupjs.org/introduction/'
      },
      {
        title: 'Webpack',
        description: "用于现代 JavaScript 应用程序的静态模块打包工具。",
        logo: 'https://webpack.docschina.org/favicon.f326220248556af65f41.ico',
        url: 'https://webpack.docschina.org/concepts/'
      },
    ]
  },
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
  {
    title: '跨平台开发',
    icon: '',
    items: [
      {
        title: 'Electron',
        description: "一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。",
        logo: 'https://www.electronjs.org/zh/assets/img/favicon.ico',
        url: 'https://www.electronjs.org/zh/docs/latest/'
      },
      {
        title: 'Tauri',
        description: "构建跨平台的快速、安全、前端隔离应用。",
        logo: 'https://tauri.app/zh-cn/meta/favicon-32x32.png',
        url: 'https://tauri.app/zh-cn/'
      },
      {
        title: 'Taro',
        description: "一个开放式跨端跨框架解决方案。",
        logo: 'https://docs.taro.zone/img/taroLogo180.png',
        url: 'https://docs.taro.zone/docs'
      },
      {
        title: 'Uniapp',
        description: "一个使用 Vue.js 开发多端前端应用的框架。",
        logo: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        url: 'https://uniapp.dcloud.net.cn/'
      },
      {
        title: 'Flutter',
        description: " Google 开源的应用开发框架。",
        logo: 'https://flutter.cn/assets/images/cn/flutter-icon.png',
        url: 'https://flutter.cn/'
      },
      {
        title: 'React Native',
        description: "Learn once, write anywhere。",
        logo: 'https://reactnative.dev/img/pwa/manifest-icon-512.png',
        url: 'https://reactnative.dev/docs/environment-setup'
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
    title: '桌面软件',
    icon: '',
    items: [
      {
        title: 'Vscode',
        description: "一个简化且高效的代码编辑器。",
        logo: 'https://code.visualstudio.com/favicon.ico',
        url: 'https://code.visualstudio.com/docs'
      },
      {
        title: 'Chrome',
        description: "Chrome，不一样的浏览器体验。",
        logo: 'https://www.google.com/chrome/static/images/favicons/favicon-32x32.png',
        url: 'https://www.google.com/chrome/'
      },
      {
        title: 'Git',
        description: "一个开源且免费的分布式版本控制系统。",
        logo: 'https://git-scm.com/favicon.ico',
        url: 'https://git-scm.com/downloads'
      },
      {
        title: 'NodeJS',
        description: "一个开源、跨平台的 JavaScript 运行时环境。",
        logo: 'https://nodejs.org/static/images/favicons/apple-touch-icon.png',
        url: 'https://nodejs.org/zh-cn/'
      },
      {
        title: 'Utools',
        description: "新一代效率工具平台, 自由组合插件应用。",
        logo: 'https://res.u-tools.cn/website/logo.png',
        url: 'https://www.u.tools/'
      },
      {
        title: 'Snipaste',
        description: "一个简单但强大的截图工具，也可以让你将截图贴回到屏幕上。",
        logo: 'https://www.snipaste.com/favicon.ico',
        url: 'https://zh.snipaste.com/'
      },
      {
        title: 'Postman',
        description: "一个用于构建和使用API的软件平台。",
        logo: 'https://www.postman.com/_ar-assets/images/favicon-1-48.png',
        url: 'https://www.postman.com/'
      },
      {
        title: 'Dbeaver',
        description: "一个免费和开源, 为开发人员和数据库管理员的通用数据库工具。",
        logo: 'https://dbeaver.io/wp-content/uploads/2016/07/beaver_icon_32x32.png',
        url: 'https://dbeaver.io/'
      },
      {
        title: 'Typora',
        description: "一个Markdown编辑器，基于electron。",
        logo: 'https://www.typora.io/img/favicon-128.png',
        url: 'https://www.typora.io/'
      },
      {
        title: 'Responsively',
        description: "开发响应式网站。",
        logo: 'https://responsively.app/favicon-32x32.png',
        url: 'https://responsively.app/'
      },

      {
        title: 'Csslayout.io',
        description: "包含常用布局和样式的CSS合集。",
        logo: 'https://responsively.app/favicon-32x32.png',
        url: 'https://csslayout.io/'
      },
      {
        title: 'Programmer Humor',
        description: "国外程序员笑话。",
        logo: 'https://programmerhumor.io/wp-content/uploads/2021/04/cropped-programmerhumor.io_.favicon-150x150.png',
        url: 'https://programmerhumor.io/'
      },

    ]
  },
  {
    title: '浏览器扩展',
    icon: '',
    items: [
      {
        title: 'Vue Devtools',
        description: "一个用于调试 Vue.js 应用程序的浏览器扩展。",
        logo: 'https://cn.vuejs.org/logo.svg',
        url: 'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN',
      },
      {
        title: 'FeHelper',
        description: "WEB前端助手, 包含一些前端实用的工具。",
        logo: 'https://static.baidufe.com/fehelper/static/img/fe-128.png',
        url: 'https://chrome.google.com/webstore/detail/fehelper%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8B/pkgccpejnmalmdinmhkkfafefagiiiad?hl=zh-CN'
      },
      {
        title: 'Tampermonkey(油猴)',
        description: "允许用户自定义并增强网页的功能，可在线搜索和安装用户脚本。",
        logo: 'https://www.tampermonkey.net/images/icon180.png',
        url: 'https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-CN'
      },
      {
        title: 'Stylus',
        description: "一个调整网页外观的用户样式管理器，可在线搜索和安装用户样式。",
        logo: 'https://lh3.googleusercontent.com/2K8pc_5-2DkPam9b3oAWoITZ7IuIz68A5a8Ssg2_MNNHTPWPOPSBVTFdTmeVu9hi8GJxpKbvTekgwpeyGV6vXyBKH80=w128-h128-e365-rj-sc0x00ffffff',
        url: 'https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=zh-CN'
      },
      {
        title: 'Google 翻译',
        description: "谷歌翻译，在浏览页面时，选中文本内容，点击图标即可翻译。",
        logo: 'https://lh3.googleusercontent.com/3ZU5aHnsnQUl9ySPrGBqe5LXz_z9DK05DEfk10tpKHv5cvG19elbOr0BdW_k8GjLMFDexT2QHlDwAmW62iLVdek--Q=w128-h128-e365-rj-sc0x00ffffff',
        url: 'https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=zh-CN'
      },
      {
        title: 'Console Importer',
        description: "一个便利工具，可以在控制台加载Javascript和Css资源。",
        logo: 'https://lh3.googleusercontent.com/fb-bJ2qm7i_JaNwxdGo90fY7ztd82AcqbcC2z4l1nc3PvBOW50IFD1WDOJfoLBubRZlKNswKI5cQW7PzVj19nRyRMA=w128-h128-e365-rj-sc0x00ffffff',
        url: 'https://chrome.google.com/webstore/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie?hl=zh-CN'
      },
      {
        title: 'Proxy SwitchyOmega',
        description: "轻松快捷地管理和切换多个代理设置。",
        logo: 'https://lh3.googleusercontent.com/Ar6pRol9XdP7QSJdQPlWUngT111eg-HCjcavM7DVg3UUIuICRhvL6_v0UcIaNt3xLuBsP0_EUww2RftpnWzYgv_MFA=w128-h128-e365-rj-sc0x00ffffff',
        url: 'https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif'
      },
      {
        title: 'React Developer Tools',
        description: "一个用于调试 React.js 应用程序的浏览器扩展。",
        logo: 'https://lh3.googleusercontent.com/TNijZW_Gp9MZ3eqXkve0YWDEiHV-a2IpSpD6IJzrV3Y76GJcLEyzX2regTLemXzBHbHVqkKuxnnWDT34Cp4sNh-Y=w128-h128-e365-rj-sc0x00ffffff',
        url: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'
      },
      {
        title: 'Automa',
        description: "包含表单自动填充，截图，数据抓取等功能的自动化编排工具。",
        logo: 'https://lh3.googleusercontent.com/hWDP82dc8g_7Ji7nVNatqI3DbZBhUsAuRv3JEsRbqOWYgflDOEKMpjPifDIqnpUf5fcynBOut8MarpWhuPmpZFOO=w128-h128-e365-rj-sc0x00ffffff',
        url: 'https://chrome.google.com/webstore/detail/automa/infppggnoaenmfagbfknfkancpbljcca'
      },
    ]
  },
  {
    title: '在线工具',
    icon: '',
    items: [
      {
        title: 'Astexplorer',
        description: "在线查看AST。",
        logo: 'https://astexplorer.net/favicon.png',
        url: 'https://astexplorer.net/'
      },
      {
        title: 'Bundle Phobia',
        description: "查看npm包大小的在线网站。",
        logo: 'https://bundlephobia.com/apple-touch-icon.png',
        url: 'https://bundlephobia.com/'
      },
      {
        title: 'CodePen',
        description: "一个在线代码编辑器，可以实时预览代码效果。",
        logo: 'https://codepen.io/favicon.ico',
        url: 'https://codepen.io/pen'
      },
      {
        title: 'Can I Use',
        description: "浏览器兼容性查询。",
        logo: 'https://caniuse.com/img/favicon-128.png',
        url: 'https://caniuse.com/'
      },
      {
        title: 'Stackblitz',
        description: "一个可以用于学习新框架, 创建示例, 调试代码的在线IDE环境。",
        logo: 'https://c.staticblitz.com/assets/favicon_sb-861fe1b85c0dc928750c62de15fed96fc75e57ee366bd937bad17a3938917b3f.svg',
        url: 'https://stackblitz.com/'
      },
      {
        title: 'Github1s',
        description: "一个基于Vscode, 用于阅读Github代码的在线工具。",
        logo: 'https://github1s.com/favicon-light.svg',
        url: 'https://github1s.com/'
      },
      {
        title: 'Readme.so',
        description: "一个制作README文件的在线工具, 包含多种预设格式。",
        logo: 'https://readme.so/favicon.ico',
        url: 'https://readme.so/editor'
      },
      {
        title: 'Sheilds.io',
        description: "一个生成下载量，版本号，测试覆盖率，包大小等徽章的在线工具。",
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABE0lEQVR4AWJkAIKkpCQ7TU3NySIiIlosQMCABejbMWAFf//8YXj77vWn27duZWVGz1nKGBYWZiQkJHSIkZGRmwEPCMxiwAt+/fz3/86VL8EAbuiiAKEoiMLwGcHdCQMBiUAlurDErmJ75tmKP8A3oiJyuF6vAxglws+0C5pv81GJaJdzhlWMMJssaaXM3C0CpmSDLAQtgH3BiCIVB2NRMKWEIoXQMBiLgjHGP9nQ+6ZPLgqGgs9xriDovX8A6Jjgw8ZyIigzn5xz+yZ+6O/tsz7Hy8tb/PLlywPAHMOFT/G3LwRc95fxPyerQCojuKwLDLQAGjoJWIzpAw1mw6bB0guHSYyMDBysnO/5hUTTGvM3rQEAI8qCnLiY3O4AAAAASUVORK5CYII=',
        url: 'https://shields.io/'
      },
      {
        title: 'Lorem Picsum',
        description: "一个可以根据宽高，类型，灰度等配置生成随机图片的在线工具。",
        logo: 'https://picsum.photos/assets/images/favicon/favicon-32x32.png',
        url: 'https://picsum.photos/'
      },
      {
        title: 'TypyPNG',
        description: "一个可以压缩webp, png和jpeg图片的在线工具。",
        logo: 'https://tinypng.com/images/favicon.ico',
        url: 'https://tinypng.com/'
      },
      {
        title: 'Carbon',
        description: "一个根据代码生成各种样式图片的在线工具。",
        logo: 'https://carbon.now.sh/favicon.ico',
        url: 'https://carbon.now.sh/'
      },
      {
        title: 'GitMoji',
        description: "一个针对提交(commit)信息的Emoji查询工具。",
        logo: 'https://gitmoji.dev/static/android-icon-192x192.png',
        url: 'https://gitmoji.dev/'
      },
      {
        title: 'EmojiAll',
        description: "提供Emoji搜索和查询，包括表情符号含义、使用示例、Unicode代码点等内容。",
        logo: 'https://www.emojiall.com/apple-touch-icon.png',
        url: 'https://www.emojiall.com/zh-hans/all-emojis?type=normal'
      },
      {
        title: 'Remove.bg',
        description: "图片背景消除。",
        logo: 'https://www.remove.bg/apple-touch-icon.png?v=YAXaAv7pao',
        url: 'https://www.remove.bg/zh'
      },
      {
        title: 'Many pixels',
        description: "包含2500+免费插画的网站。",
        logo: 'https://www.manypixels.co/favicon.ico',
        url: 'https://www.manypixels.co/gallery'
      },
      {
        title: 'Svg wave',
        description: "根据波浪程度、层数和高度等设置，生成SVG或PNG图片。",
        logo: 'https://www.manypixels.co/favicon.ico',
        url: 'https://svgwave.in/'
      },
      {
        title: 'Canva(可画)',
        description: "包含数千个专业模板和图片，用于设计和生成封面图片的在线网站。",
        logo: 'https://static.canva.cn/static/images/favicon-1.ico',
        url: 'https://www.canva.cn/'
      },
      {
        title: 'CSS Tricks',
        description: "Css常用样式合集。",
        logo: 'https://qishaoxuan.github.io/css_tricks/images/favicon.png',
        url: 'https://qishaoxuan.github.io/css_tricks/createTriangle/'
      },
      {
        title: 'You Need To Know Css',
        description: "作者把工作中常用的一些CSS小样式总结成这份文档。",
        logo: 'https://lhammer.cn/You-need-to-know-css/static/favicon.ico',
        url: 'https://lhammer.cn/You-need-to-know-css/#/zh-cn/introduce?v=1'
      },
      {
        title: 'Tool.lu',
        description: "在线工具。",
        logo: 'https://tool.lu/favicon.ico',
        url: 'https://tool.lu/'
      },
      {
        title: 'Shape Divider',
        description: "根据形状，颜色，高度等参数，生成SVG的工具。",
        logo: 'https://shapedivider.app/favicon.ico',
        url: 'https://www.shapedivider.app/'
      },
      {
        title: 'JS Fuck',
        description: "JS 代码混淆，认不出来的那种。",
        logo: 'http://www.jsfuck.com/preview.png',
        url: 'http://www.jsfuck.com/'
      },
      {
        title: 'Vue SFC Playground',
        description: "Vue 单文件组件(SFC)在线调试工具。",
        logo: 'https://sfc.vuejs.org/logo.svg',
        url: 'https://sfc.vuejs.org/'
      },
      {
        title: 'Babel Playground',
        description: "Babel 在线调试工具。",
        logo: 'https://babeljs.io/img/favicon.png',
        url: 'https://babeljs.io/repl'
      },
    ]
  },
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
  {
    title: '数据算法',
    icon: '',
    items: [
      {
        title: 'Visualgo',
        description: "数据结构和算法动态可视化。",
        logo: 'https://visualgo.net/img/favicon.png',
        url: 'https://visualgo.net/zh'
      },
      {
        title: 'Leetcode',
        description: "全球极客挚爱的技术成长平台。",
        logo: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://leetcode.cn/&size=128',
        url: 'https://leetcode.cn/'
      },
    ]
  }
]

const onScrollItem = (item: any) => {
  const index = items.indexOf(item);
  scrollRef.value.scrollTo(0, itemsRef.value[index].offsetTop || 1);
}

const itemsLength = items.reduce((total, item) => total + item.items.length, 0)
</script>

<route lang="json">
{
  "meta": {
    "title": "前端资源",
    "icon": "icon-park-outline-html-five"
  }
}
</route>

<style scoped>
.logo {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzYgMzYiPjxwYXRoIGZpbGw9IiM1NUFDRUUiIGQ9Ik0xNi44NjcgMTUuNzM0Yy42MjUuNjI2IDEuNjQuNjI2IDIuMjY2IDBsNi4yMzItNi4yMzFhMS42MDQgMS42MDQgMCAwIDAgMC0yLjI2NmwtNi4yMzItNi4yMzFhMS42MDIgMS42MDIgMCAwIDAtMi4yNjYgMGwtNi4yMzIgNi4yMzFhMS42MDIgMS42MDIgMCAwIDAgMCAyLjI2Nmw2LjIzMiA2LjIzMXptOS42MzEgOS42M2MuNjI1LjYyNiAxLjY0LjYyNiAyLjI2NiAwbDYuMjMyLTYuMjMxYTEuNjA0IDEuNjA0IDAgMCAwIDAtMi4yNjZsLTYuMjMyLTYuMjMxYTEuNjAyIDEuNjAyIDAgMCAwLTIuMjY2IDBsLTYuMjMyIDYuMjMxYTEuNjAyIDEuNjAyIDAgMCAwIDAgMi4yNjZsNi4yMzIgNi4yMzF6bS0xLjEzNCAxLjEzNGwtNi4yMzEtNi4yMzJhMS42MDIgMS42MDIgMCAwIDAtMi4yNjYgMGwtNi4yMzEgNi4yMzJhMS42IDEuNiAwIDAgMCAwIDIuMjY1bDYuMjMxIDYuMjMyYy42MjYuNjI1IDEuNjQuNjI1IDIuMjY2IDBsNi4yMzEtNi4yMzJhMS42IDEuNiAwIDAgMCAwLTIuMjY1em0tOS42My05LjYzbC02LjIzMS02LjIzMmExLjYwMiAxLjYwMiAwIDAgMC0yLjI2NiAwbC02LjIzMSA2LjIzMmExLjYgMS42IDAgMCAwIDAgMi4yNjVsNi4yMzEgNi4yMzJjLjYyNi42MjUgMS42NC42MjUgMi4yNjYgMGw2LjIzMS02LjIzMmExLjYgMS42IDAgMCAwIDAtMi4yNjV6Ii8+PHBhdGggZmlsbD0iIzNCODhDMyIgZD0ibTE1LjczNCAxNi44NjhsLTMuMjE0LTMuMjE1QTYuOTY1IDYuOTY1IDAgMCAwIDExIDE4YzAgMS42NDQuNTcxIDMuMTUzIDEuNTIgNC4zNDdsMy4yMTQtMy4yMTRhMS42IDEuNiAwIDAgMCAwLTIuMjY1em02LjYxNCA2LjYxMmwtMy4yMTUtMy4yMTVhMS42MDUgMS42MDUgMCAwIDAtMi4yNjYgMGwtMy4yMTUgMy4yMTVBNi45NjcgNi45NjcgMCAwIDAgMTggMjVhNi45NjcgNi45NjcgMCAwIDAgNC4zNDgtMS41MnptLTIuMDgyLTQuMzQ3bDMuMjE1IDMuMjE1QTYuOTczIDYuOTczIDAgMCAwIDI1IDE4YTYuOTYyIDYuOTYyIDAgMCAwLTEuNTItNC4zNDdsLTMuMjE1IDMuMjE1YTEuNjAzIDEuNjAzIDAgMCAwIC4wMDEgMi4yNjV6bS0xLjEzMy0zLjM5OWwzLjIxNS0zLjIxNEE2Ljk2NyA2Ljk2NyAwIDAgMCAxOCAxMWE2Ljk2MiA2Ljk2MiAwIDAgMC00LjM0NyAxLjUybDMuMjE1IDMuMjE0YTEuNiAxLjYgMCAwIDAgMi4yNjUgMHoiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSI1IiBmaWxsPSIjQkJEREY1Ii8+PC9zdmc+") no-repeat center center / contain;
}

.list {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.item {
  width: 100%;
  overflow: hidden;
}
</style>