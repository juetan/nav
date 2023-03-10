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
]

</script>

<route lang="json">
{
  "meta": {
    "title": "编译构建",
    "icon": "icon-park-outline-ad-product"
  }
}
</route>

<style scoped></style>