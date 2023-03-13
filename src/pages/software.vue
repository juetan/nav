<template>
  <div class="flex-1 h-full grid grid-rows-[auto_1fr]">
    <div class="flex justify-between items-center mx-6 pt-4 pb-0 border-b border-gray-200 dark:border-slate-800">
      <div>
        <div class="text-base">桌面软件</div>
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
    title: "桌面软件",
    icon: "",
    items: [
      {
        title: "Vscode",
        description: "一个简化且高效的代码编辑器。",
        logo: "https://code.visualstudio.com/favicon.ico",
        url: "https://code.visualstudio.com/docs",
      },
      {
        title: "Chrome",
        description: "Chrome，不一样的浏览器体验。",
        logo: "https://www.google.com/chrome/static/images/favicons/favicon-32x32.png",
        url: "https://www.google.com/chrome/",
      },
      {
        title: "Git",
        description: "一个开源且免费的分布式版本控制系统。",
        logo: "https://git-scm.com/favicon.ico",
        url: "https://git-scm.com/downloads",
      },
      {
        title: "NodeJS",
        description: "一个开源、跨平台的 JavaScript 运行时环境。",
        logo: "https://nodejs.org/static/images/favicons/apple-touch-icon.png",
        url: "https://nodejs.org/zh-cn/",
      },
      {
        title: "Utools",
        description: "新一代效率工具平台, 自由组合插件应用。",
        logo: "https://res.u-tools.cn/website/logo.png",
        url: "https://www.u.tools/",
      },
      {
        title: "Snipaste",
        description: "一个简单但强大的截图工具，也可以让你将截图贴回到屏幕上。",
        logo: "https://www.snipaste.com/favicon.ico",
        url: "https://zh.snipaste.com/",
      },
      {
        title: "Postman",
        description: "一个用于构建和使用API的软件平台。",
        logo: "https://www.postman.com/_ar-assets/images/favicon-1-48.png",
        url: "https://www.postman.com/",
      },
      {
        title: "Dbeaver",
        description: "一个免费和开源, 为开发人员和数据库管理员的通用数据库工具。",
        logo: "https://dbeaver.io/wp-content/uploads/2016/07/beaver_icon_32x32.png",
        url: "https://dbeaver.io/",
      },
      {
        title: "Typora",
        description: "一个Markdown编辑器，基于electron。",
        logo: "https://www.typora.io/img/favicon-128.png",
        url: "https://www.typora.io/",
      },
      {
        title: "Responsively",
        description: "开发响应式网站。",
        logo: "https://responsively.app/favicon-32x32.png",
        url: "https://responsively.app/",
      },

      {
        title: "Csslayout.io",
        description: "包含常用布局和样式的CSS合集。",
        logo: "https://responsively.app/favicon-32x32.png",
        url: "https://csslayout.io/",
      },
      {
        title: "Programmer Humor",
        description: "国外程序员笑话。",
        logo: "https://programmerhumor.io/wp-content/uploads/2021/04/cropped-programmerhumor.io_.favicon-150x150.png",
        url: "https://programmerhumor.io/",
      },
    ],
  },
  {
    title: "浏览器扩展",
    icon: "",
    items: [
      {
        title: "Vue Devtools",
        description: "一个用于调试 Vue.js 应用程序的浏览器扩展。",
        logo: "https://cn.vuejs.org/logo.svg",
        url: "https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN",
      },
      {
        title: "FeHelper",
        description: "WEB前端助手, 包含一些前端实用的工具。",
        logo: "https://static.baidufe.com/fehelper/static/img/fe-128.png",
        url: "https://chrome.google.com/webstore/detail/fehelper%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8B/pkgccpejnmalmdinmhkkfafefagiiiad?hl=zh-CN",
      },
      {
        title: "Tampermonkey(油猴)",
        description: "允许用户自定义并增强网页的功能，可在线搜索和安装用户脚本。",
        logo: "https://www.tampermonkey.net/images/icon180.png",
        url: "https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-CN",
      },
      {
        title: "Stylus",
        description: "一个调整网页外观的用户样式管理器，可在线搜索和安装用户样式。",
        logo: "https://lh3.googleusercontent.com/2K8pc_5-2DkPam9b3oAWoITZ7IuIz68A5a8Ssg2_MNNHTPWPOPSBVTFdTmeVu9hi8GJxpKbvTekgwpeyGV6vXyBKH80=w128-h128-e365-rj-sc0x00ffffff",
        url: "https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=zh-CN",
      },
      {
        title: "Google 翻译",
        description: "谷歌翻译，在浏览页面时，选中文本内容，点击图标即可翻译。",
        logo: "https://lh3.googleusercontent.com/3ZU5aHnsnQUl9ySPrGBqe5LXz_z9DK05DEfk10tpKHv5cvG19elbOr0BdW_k8GjLMFDexT2QHlDwAmW62iLVdek--Q=w128-h128-e365-rj-sc0x00ffffff",
        url: "https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=zh-CN",
      },
      {
        title: "Console Importer",
        description: "一个便利工具，可以在控制台加载Javascript和Css资源。",
        logo: "https://lh3.googleusercontent.com/fb-bJ2qm7i_JaNwxdGo90fY7ztd82AcqbcC2z4l1nc3PvBOW50IFD1WDOJfoLBubRZlKNswKI5cQW7PzVj19nRyRMA=w128-h128-e365-rj-sc0x00ffffff",
        url: "https://chrome.google.com/webstore/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie?hl=zh-CN",
      },
      {
        title: "Proxy SwitchyOmega",
        description: "轻松快捷地管理和切换多个代理设置。",
        logo: "https://lh3.googleusercontent.com/Ar6pRol9XdP7QSJdQPlWUngT111eg-HCjcavM7DVg3UUIuICRhvL6_v0UcIaNt3xLuBsP0_EUww2RftpnWzYgv_MFA=w128-h128-e365-rj-sc0x00ffffff",
        url: "https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif",
      },
      {
        title: "React Developer Tools",
        description: "一个用于调试 React.js 应用程序的浏览器扩展。",
        logo: "https://lh3.googleusercontent.com/TNijZW_Gp9MZ3eqXkve0YWDEiHV-a2IpSpD6IJzrV3Y76GJcLEyzX2regTLemXzBHbHVqkKuxnnWDT34Cp4sNh-Y=w128-h128-e365-rj-sc0x00ffffff",
        url: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
      },
      {
        title: "Automa",
        description: "包含表单自动填充，截图，数据抓取等功能的自动化编排工具。",
        logo: "https://lh3.googleusercontent.com/hWDP82dc8g_7Ji7nVNatqI3DbZBhUsAuRv3JEsRbqOWYgflDOEKMpjPifDIqnpUf5fcynBOut8MarpWhuPmpZFOO=w128-h128-e365-rj-sc0x00ffffff",
        url: "https://chrome.google.com/webstore/detail/automa/infppggnoaenmfagbfknfkancpbljcca",
      },
    ],
  },
];
</script>

<route lang="json">
{
  "meta": {
    "title": "桌面软件",
    "icon": "icon-park-outline-windows"
  }
}
</route>

<style scoped></style>
