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
    title: "在线工具",
    icon: "",
    items: [
      {
        title: "Astexplorer",
        description: "在线查看AST。",
        logo: "https://astexplorer.net/favicon.png",
        url: "https://astexplorer.net/",
      },
      {
        title: "Bundle Phobia",
        description: "查看npm包大小的在线网站。",
        logo: "https://bundlephobia.com/apple-touch-icon.png",
        url: "https://bundlephobia.com/",
      },
      {
        title: "CodePen",
        description: "一个在线代码编辑器，可以实时预览代码效果。",
        logo: "https://codepen.io/favicon.ico",
        url: "https://codepen.io/pen",
      },
      {
        title: "Can I Use",
        description: "浏览器兼容性查询。",
        logo: "https://caniuse.com/img/favicon-128.png",
        url: "https://caniuse.com/",
      },
      {
        title: "Stackblitz",
        description: "一个可以用于学习新框架, 创建示例, 调试代码的在线IDE环境。",
        logo: "https://c.staticblitz.com/assets/favicon_sb-861fe1b85c0dc928750c62de15fed96fc75e57ee366bd937bad17a3938917b3f.svg",
        url: "https://stackblitz.com/",
      },
      {
        title: "Github1s",
        description: "一个基于Vscode, 用于阅读Github代码的在线工具。",
        logo: "https://github1s.com/favicon-light.svg",
        url: "https://github1s.com/",
      },
      {
        title: "Readme.so",
        description: "一个制作README文件的在线工具, 包含多种预设格式。",
        logo: "https://readme.so/favicon.ico",
        url: "https://readme.so/editor",
      },
      {
        title: "Sheilds.io",
        description: "一个生成下载量，版本号，测试覆盖率，包大小等徽章的在线工具。",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABE0lEQVR4AWJkAIKkpCQ7TU3NySIiIlosQMCABejbMWAFf//8YXj77vWn27duZWVGz1nKGBYWZiQkJHSIkZGRmwEPCMxiwAt+/fz3/86VL8EAbuiiAKEoiMLwGcHdCQMBiUAlurDErmJ75tmKP8A3oiJyuF6vAxglws+0C5pv81GJaJdzhlWMMJssaaXM3C0CpmSDLAQtgH3BiCIVB2NRMKWEIoXQMBiLgjHGP9nQ+6ZPLgqGgs9xriDovX8A6Jjgw8ZyIigzn5xz+yZ+6O/tsz7Hy8tb/PLlywPAHMOFT/G3LwRc95fxPyerQCojuKwLDLQAGjoJWIzpAw1mw6bB0guHSYyMDBysnO/5hUTTGvM3rQEAI8qCnLiY3O4AAAAASUVORK5CYII=",
        url: "https://shields.io/",
      },
      {
        title: "Lorem Picsum",
        description: "一个可以根据宽高，类型，灰度等配置生成随机图片的在线工具。",
        logo: "https://picsum.photos/assets/images/favicon/favicon-32x32.png",
        url: "https://picsum.photos/",
      },
      {
        title: "TypyPNG",
        description: "一个可以压缩webp, png和jpeg图片的在线工具。",
        logo: "https://tinypng.com/images/favicon.ico",
        url: "https://tinypng.com/",
      },
      {
        title: "Carbon",
        description: "一个根据代码生成各种样式图片的在线工具。",
        logo: "https://carbon.now.sh/favicon.ico",
        url: "https://carbon.now.sh/",
      },
      {
        title: "GitMoji",
        description: "一个针对提交(commit)信息的Emoji查询工具。",
        logo: "https://gitmoji.dev/static/android-icon-192x192.png",
        url: "https://gitmoji.dev/",
      },
      {
        title: "EmojiAll",
        description: "提供Emoji搜索和查询，包括表情符号含义、使用示例、Unicode代码点等内容。",
        logo: "https://www.emojiall.com/apple-touch-icon.png",
        url: "https://www.emojiall.com/zh-hans/all-emojis?type=normal",
      },
      {
        title: "Remove.bg",
        description: "图片背景消除。",
        logo: "https://www.remove.bg/apple-touch-icon.png?v=YAXaAv7pao",
        url: "https://www.remove.bg/zh",
      },
      {
        title: "Many pixels",
        description: "包含2500+免费插画的网站。",
        logo: "https://www.manypixels.co/favicon.ico",
        url: "https://www.manypixels.co/gallery",
      },
      {
        title: "Svg wave",
        description: "根据波浪程度、层数和高度等设置，生成SVG或PNG图片。",
        logo: "https://www.manypixels.co/favicon.ico",
        url: "https://svgwave.in/",
      },
      {
        title: "Canva(可画)",
        description: "包含数千个专业模板和图片，用于设计和生成封面图片的在线网站。",
        logo: "https://static.canva.cn/static/images/favicon-1.ico",
        url: "https://www.canva.cn/",
      },
      {
        title: "CSS Tricks",
        description: "Css常用样式合集。",
        logo: "https://qishaoxuan.github.io/css_tricks/images/favicon.png",
        url: "https://qishaoxuan.github.io/css_tricks/createTriangle/",
      },
      {
        title: "You Need To Know Css",
        description: "作者把工作中常用的一些CSS小样式总结成这份文档。",
        logo: "https://lhammer.cn/You-need-to-know-css/static/favicon.ico",
        url: "https://lhammer.cn/You-need-to-know-css/#/zh-cn/introduce?v=1",
      },
      {
        title: "Tool.lu",
        description: "在线工具。",
        logo: "https://tool.lu/favicon.ico",
        url: "https://tool.lu/",
      },
      {
        title: "Shape Divider",
        description: "根据形状，颜色，高度等参数，生成SVG的工具。",
        logo: "https://shapedivider.app/favicon.ico",
        url: "https://www.shapedivider.app/",
      },
      {
        title: "JS Fuck",
        description: "JS 代码混淆，认不出来的那种。",
        logo: "http://www.jsfuck.com/preview.png",
        url: "http://www.jsfuck.com/",
      },
      {
        title: "Vue SFC Playground",
        description: "Vue 单文件组件(SFC)在线调试工具。",
        logo: "https://sfc.vuejs.org/logo.svg",
        url: "https://sfc.vuejs.org/",
      },
      {
        title: "Babel Playground",
        description: "Babel 在线调试工具。",
        logo: "https://babeljs.io/img/favicon.png",
        url: "https://babeljs.io/repl",
      },
    ],
  },
];
</script>

<route lang="json">
{
  "meta": {
    "title": "在线工具",
    "icon": "icon-park-outline-tool"
  }
}
</route>

<style scoped></style>
