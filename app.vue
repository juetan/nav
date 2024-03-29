<template>
  <NuxtLoadingIndicator />
  <a-scrollbar
    ref="scrollbarRef"
    outer-class="h-full overflow-hidden"
    class="roller relative h-full overflow-auto"
    @scroll="onScroll"
  >
    <!-- 滚动条需要唯一的子元素 -->
    <section class="relative mx-auto">
      <header class="sticky top-0 w-full z-99 bg-white dark:bg-slate-800 dark:border-gray-700">
        <div
          class="mx-auto px-4 xl:px-0 max-w-[1380px] h-13 border-b border-[#eef] flex justify-between items-center gap-4"
        >
          <NuxtLink to="/" class="flex items-center">
            <h1 class="flex items-center text-xl gap-2 font-normal dark:text-white hover:text-blue-500">
              <img :src="app?.logoUrl" alt="logo" height="24" width="24" />
              <span class="">{{ app?.title }}</span>
            </h1>
            <span id="he-plugin-simple" class="relative z-99"></span>
          </NuxtLink>
          <nav class="hidden md:flex items-center text-gray-500 text-[15px]">
            <NuxtLink
              v-for="nav in navs"
              :key="nav.path"
              :to="nav.path"
              class="cursor-pointer bg-transparent dark:text-white hover:bg-gray-200 dark:hover-bg-[rgba(255,255,255,.2)] rounded py-1.5 px-2.5"
            >
              <!-- <i :class="nav.icon"></i> -->
              {{ nav.title }}
            </NuxtLink>
          </nav>
        </div>
      </header>
      <main class="max-w-[1380px] min-h-[calc(100vh-166px)] mx-auto">
        <NuxtPage></NuxtPage>
      </main>
      <footer class="text-center text-gray-500 pb-10 pt-8">
        <ul class="list-none flex justify-center items-center m-0">
          <li v-for="(link, index) in links" :key="link.url">
            <span v-if="index !== 0" class="leading-none text-xs text-gray-40 px-2">|</span>
            <a target="_blank" :href="link.url" class="hover:text-blue-500 hover:underline underline-offset-2">
              {{ link.name }}
            </a>
          </li>
        </ul>
        <div class="mt-2">Copyright &copy; {{ app?.title }}，版权所有</div>
      </footer>
      <a-back-top :target-container="'.roller'">
        <a-button shape="round" size="large">
          <template #icon>
            <i class="i-icon-park-outline-arrow-up"></i>
          </template>
        </a-button>
      </a-back-top>
    </section>
  </a-scrollbar>
</template>

<script setup lang="ts">
import type { Scrollbar } from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.min.css'
import 'arconify/es/style.css'
import '~/assets/css/index.less'
import { OnScrollKey } from '~/utils/ref'

defineOptions({
  name: 'AppPage',
})

const app = useApp()

useHead({
  titleTemplate(title) {
    return title ? `${title} - ${app.value?.title}` : `${app.value?.title}`
  },
})

const navs = [
  {
    title: '首页',
    icon: 'i-icon-park-outline-home',
    path: '/',
  },
  {
    title: '博客',
    icon: 'i-icon-park-outline-config',
    path: 'https://juetan.cn',
  },
  {
    title: '仓库',
    icon: 'i-icon-park-outline-config',
    path: 'https://github.com/juetan/nav',
  },
  import.meta.dev && {
    title: '后台',
    icon: 'i-icon-park-outline-config',
    path: '/admin',
  },
  {
    title: '关于',
    icon: 'i-icon-park-outline-user',
    path: '/about',
  },
].filter(Boolean) as { title: string; icon: string; path: string }[]

const links = [
  {
    name: '仓库地址',
    url: 'https://github.com/juetan/nav',
  },
  {
    name: '参与贡献',
    url: 'https://github.com/juetan/nav/pulls',
  },
  {
    name: '绝弹博客',
    url: 'https://juetan.cn/',
  },
  {
    name: '绝弹仓库',
    url: 'https://github.com/juetan',
  },
  {
    name: '关于本站',
    url: '/about',
  },
]

const onScrolls: ((event: Event) => void)[] = []
const scrollbarRef = ref<InstanceType<typeof Scrollbar> | null>(null)
const onScroll = (event: Event) => {
  for (const fn of onScrolls) {
    fn(event)
  }
}

provide(ScraollBarRef, scrollbarRef)
provide(OnScrollKey, (fn) => onScrolls.push(fn))
</script>

<style scoped>
.logo {
  display: inline-block;
  width: 16px;
  height: 16px;
}

.list {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.item {
  width: 100%;
  overflow: hidden;
}
</style>
