<template>
  <div class="flex-1 h-full grid grid-rows-[auto_1fr]">
    <div class="flex justify-between items-center mx-6 pt-4 pb-0 border-b border-gray-200 dark:border-slate-800">
      <div>
        <div class="text-base">常用网址</div>
        <p class="text-slate-500 p-0 mt-2">
          涵盖前端开发、设计、运维、测试、产品、运营等领域，目前共收录 {{ itemsLength }} 个网站。
        </p>
      </div>
      <div class="flex gap-2">
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
        <div class="text-slate-500 px-6 mb-3 mt-2">{{ category.title }}</div>
        <div class="list flex-1 grid gap-4 px-5 pb-4">
          <div
            v-for="item in category.items"
            :key="item.title"
            class="item flex w-[280px] gap-3 h-32 p-4 rounded-sm bg-white dark:bg-slate-800"
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
const itemsRef = ref();
const scrollRef = ref();

const items = [
  {
    title: "工具类库",
    icon: "",
    items: [
      {
        title: "Lodash",
        description: "一致性、模块化、高性能的 JavaScript 实用工具库。",
        logo: "https://www.lodashjs.com/img/favicon.ico",
        url: "https://www.lodashjs.com/",
      },
      {
        title: "Dayjs",
        description: "Moment.js 的 2kB 轻量化方案，拥有同样强大的 API。",
        logo: "https://dayjs.gitee.io/img/favicon.ico",
        url: "https://dayjs.gitee.io/docs/zh-CN/installation/installation",
      },
      {
        title: "Axios",
        description: "一个基于 promise 网络请求库，作用于node.js 和浏览器中。",
        logo: "https://axios-http.com/assets/favicon.ico",
        url: "https://axios-http.com/zh/docs/intro",
      },
      {
        title: "Numeral",
        description: "一个处理和格式化数字的Javascript库。",
        logo: "https://axios-http.com/assets/favicon.ico",
        url: "http://numeraljs.com/",
      },
      {
        title: "Mock.js",
        description: "生成随机数据，拦截 Ajax 请求。",
        logo: "http://mockjs.com/assets/img/logo-2.svg",
        url: "http://mockjs.com/examples.html",
      },
      {
        title: "Swagger Typescript API",
        description: "根据OpenAPI格式生成typescript类型，请求API。",
        logo: "http://mockjs.com/assets/img/logo-2.svg",
        url: "https://github.com/acacode/swagger-typescript-api",
      },
      {
        title: "Animate",
        description: "Css动画库。",
        logo: "https://animate.style/img/favicon.ico",
        url: "https://animate.style/",
      },
      {
        title: "Animista",
        description: "Css动画效果，可以在线生成代码。",
        logo: "https://animista.net/favicon.ico",
        url: "https://animista.net/play/basic/scale-up",
      },
    ],
  },

  {
    title: "代码风格",
    icon: "",
    items: [
      {
        title: "Eslint",
        description: "一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具。",
        logo: "https://eslint.org/favicon.ico",
        url: "https://eslint.org/docs/latest/use/getting-started",
      },
      {
        title: "Prettier",
        description: "一个 “有主见” 的代码格式化工具。",
        logo: "https://prettier.io/icon.png",
        url: "https://prettier.io/docs/en/index.html",
      },
      {
        title: "Stylelint",
        description: "一个摩登的 CSS linter 工具。",
        logo: "https://stylelint.io/img/favicon.ico",
        url: "https://stylelint.io/",
      },
      {
        title: "Airbnb Guide",
        description: "Airbnb的JavaScript规范。",
        logo: "https://z1.muscache.cn/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico",
        url: "https://github.com/airbnb/javascript",
      },
      {
        title: "Puppeteer",
        description: "一个控制 headless Chrome 的 Node.js 库。",
        logo: "https://pptr.dev/img/favicon.ico",
        url: "https://pptr.dev/",
      },
      {
        title: "Markdown Guide",
        description: "Markdown语法介绍。",
        logo: "https://www.markdownguide.org/favicon.ico",
        url: "https://www.markdownguide.org/basic-syntax/",
      },
      {
        title: "OpenAPI",
        description: "为 RESTful API 定义一个与语言无关的标准接口。",
        logo: "https://www.openapis.org/wp-content/uploads/sites/3/2016/11/favicon.png",
        url: "https://www.openapis.org/",
      },
      {
        title: "Json",
        description: "一种轻量级的数据交换格式。",
        logo: "http://json-schema.org/assets/logo.svg",
        url: "http://json-schema.org/",
      },
    ],
  },

  {
    title: "数据算法",
    icon: "",
    items: [
      {
        title: "Visualgo",
        description: "数据结构和算法动态可视化。",
        logo: "https://visualgo.net/img/favicon.png",
        url: "https://visualgo.net/zh",
      },
      {
        title: "Leetcode",
        description: "全球极客挚爱的技术成长平台。",
        logo: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://leetcode.cn/&size=128",
        url: "https://leetcode.cn/",
      },
    ],
  },
];

const onScrollItem = (item: any) => {
  const index = items.indexOf(item);
  scrollRef.value.scrollTo(0, itemsRef.value[index].offsetTop || 1);
};

const itemsLength = items.reduce((total, item) => total + item.items.length, 0);
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
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzYgMzYiPjxwYXRoIGZpbGw9IiM1NUFDRUUiIGQ9Ik0xNi44NjcgMTUuNzM0Yy42MjUuNjI2IDEuNjQuNjI2IDIuMjY2IDBsNi4yMzItNi4yMzFhMS42MDQgMS42MDQgMCAwIDAgMC0yLjI2NmwtNi4yMzItNi4yMzFhMS42MDIgMS42MDIgMCAwIDAtMi4yNjYgMGwtNi4yMzIgNi4yMzFhMS42MDIgMS42MDIgMCAwIDAgMCAyLjI2Nmw2LjIzMiA2LjIzMXptOS42MzEgOS42M2MuNjI1LjYyNiAxLjY0LjYyNiAyLjI2NiAwbDYuMjMyLTYuMjMxYTEuNjA0IDEuNjA0IDAgMCAwIDAtMi4yNjZsLTYuMjMyLTYuMjMxYTEuNjAyIDEuNjAyIDAgMCAwLTIuMjY2IDBsLTYuMjMyIDYuMjMxYTEuNjAyIDEuNjAyIDAgMCAwIDAgMi4yNjZsNi4yMzIgNi4yMzF6bS0xLjEzNCAxLjEzNGwtNi4yMzEtNi4yMzJhMS42MDIgMS42MDIgMCAwIDAtMi4yNjYgMGwtNi4yMzEgNi4yMzJhMS42IDEuNiAwIDAgMCAwIDIuMjY1bDYuMjMxIDYuMjMyYy42MjYuNjI1IDEuNjQuNjI1IDIuMjY2IDBsNi4yMzEtNi4yMzJhMS42IDEuNiAwIDAgMCAwLTIuMjY1em0tOS42My05LjYzbC02LjIzMS02LjIzMmExLjYwMiAxLjYwMiAwIDAgMC0yLjI2NiAwbC02LjIzMSA2LjIzMmExLjYgMS42IDAgMCAwIDAgMi4yNjVsNi4yMzEgNi4yMzJjLjYyNi42MjUgMS42NC42MjUgMi4yNjYgMGw2LjIzMS02LjIzMmExLjYgMS42IDAgMCAwIDAtMi4yNjV6Ii8+PHBhdGggZmlsbD0iIzNCODhDMyIgZD0ibTE1LjczNCAxNi44NjhsLTMuMjE0LTMuMjE1QTYuOTY1IDYuOTY1IDAgMCAwIDExIDE4YzAgMS42NDQuNTcxIDMuMTUzIDEuNTIgNC4zNDdsMy4yMTQtMy4yMTRhMS42IDEuNiAwIDAgMCAwLTIuMjY1em02LjYxNCA2LjYxMmwtMy4yMTUtMy4yMTVhMS42MDUgMS42MDUgMCAwIDAtMi4yNjYgMGwtMy4yMTUgMy4yMTVBNi45NjcgNi45NjcgMCAwIDAgMTggMjVhNi45NjcgNi45NjcgMCAwIDAgNC4zNDgtMS41MnptLTIuMDgyLTQuMzQ3bDMuMjE1IDMuMjE1QTYuOTczIDYuOTczIDAgMCAwIDI1IDE4YTYuOTYyIDYuOTYyIDAgMCAwLTEuNTItNC4zNDdsLTMuMjE1IDMuMjE1YTEuNjAzIDEuNjAzIDAgMCAwIC4wMDEgMi4yNjV6bS0xLjEzMy0zLjM5OWwzLjIxNS0zLjIxNEE2Ljk2NyA2Ljk2NyAwIDAgMCAxOCAxMWE2Ljk2MiA2Ljk2MiAwIDAgMC00LjM0NyAxLjUybDMuMjE1IDMuMjE0YTEuNiAxLjYgMCAwIDAgMi4yNjUgMHoiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSI1IiBmaWxsPSIjQkJEREY1Ii8+PC9zdmc+")
    no-repeat center center / contain;
}

.list {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.item {
  width: 100%;
  overflow: hidden;
}
</style>
