<template>
  <a-layout class="w-full h-full grid grid-rows-[auto_1fr] bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
    <a-layout-header
      class="flex justify-between items-center gap-4 h-12 px-5 bg-white dark:bg-slate-800 border-b border-gray-5=200 dark:border-gray-700">
      <h1 class="flex items-center gap-2 text-base font-normal">
        <i class="logo"></i>
        前端导航
      </h1>
      <div class="flex gap-2">
        <a-tooltip :content="isDark ? '点击切换为亮色模式' : '点击切换为暗色模式'">
          <a-button shape="circle" @click="toggleTheme">
            <template #icon>
              <i :class="!isDark ? 'icon-park-outline-moon' : 'icon-park-outline-sun'"></i>
            </template>
          </a-button>
        </a-tooltip>
        <a-button class="bg-transparent">
          <template #icon>
            <i class="icon-park-outline-config"></i>
          </template>
        </a-button>
      </div>
    </a-layout-header>
    <a-layout class="flex overflow-hidden">
      <a-layout-sider :width="224" :collapsible="true" class="dark:bg-slate-800">
        <a-menu class="h-full bg-transparent" style="background-color: transparent;" :level-indent="0">
          <a-menu-item-group>
            <template #title>
              前端
            </template>
            <a-menu-item v-for="item in routes" :key="item.path" @click="onChangeRoute(item.path)">
              <template #icon>
                <i :class="item.meta?.icon"></i>
              </template>
              {{ item.meta?.title }}
            </a-menu-item>
          </a-menu-item-group>
        </a-menu>
      </a-layout-sider>
      <router-view></router-view>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';
import routes from '~pages';

const isDark = useDark({
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
  isDark.value = !isDark.value
}

const router = useRouter()

const buttons = [
  {
    icon: 'icon-park-outline-moon',
    tooltip: '点击切换为亮色模式',
    visible: () => isDark.value,
    onClick: () => (isDark.value = true)
  },
  {
    icon: 'icon-park-outline-sun',
    onClick: () => {
      isDark.value = false
    }
  }
]

const onChangeRoute = (path: string) => {
  router.push(path)
}
</script>

<style scoped>
.logo {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzYgMzYiPjxwYXRoIGZpbGw9IiM1NUFDRUUiIGQ9Ik0xNi44NjcgMTUuNzM0Yy42MjUuNjI2IDEuNjQuNjI2IDIuMjY2IDBsNi4yMzItNi4yMzFhMS42MDQgMS42MDQgMCAwIDAgMC0yLjI2NmwtNi4yMzItNi4yMzFhMS42MDIgMS42MDIgMCAwIDAtMi4yNjYgMGwtNi4yMzIgNi4yMzFhMS42MDIgMS42MDIgMCAwIDAgMCAyLjI2Nmw2LjIzMiA2LjIzMXptOS42MzEgOS42M2MuNjI1LjYyNiAxLjY0LjYyNiAyLjI2NiAwbDYuMjMyLTYuMjMxYTEuNjA0IDEuNjA0IDAgMCAwIDAtMi4yNjZsLTYuMjMyLTYuMjMxYTEuNjAyIDEuNjAyIDAgMCAwLTIuMjY2IDBsLTYuMjMyIDYuMjMxYTEuNjAyIDEuNjAyIDAgMCAwIDAgMi4yNjZsNi4yMzIgNi4yMzF6bS0xLjEzNCAxLjEzNGwtNi4yMzEtNi4yMzJhMS42MDIgMS42MDIgMCAwIDAtMi4yNjYgMGwtNi4yMzEgNi4yMzJhMS42IDEuNiAwIDAgMCAwIDIuMjY1bDYuMjMxIDYuMjMyYy42MjYuNjI1IDEuNjQuNjI1IDIuMjY2IDBsNi4yMzEtNi4yMzJhMS42IDEuNiAwIDAgMCAwLTIuMjY1em0tOS42My05LjYzbC02LjIzMS02LjIzMmExLjYwMiAxLjYwMiAwIDAgMC0yLjI2NiAwbC02LjIzMSA2LjIzMmExLjYgMS42IDAgMCAwIDAgMi4yNjVsNi4yMzEgNi4yMzJjLjYyNi42MjUgMS42NC42MjUgMi4yNjYgMGw2LjIzMS02LjIzMmExLjYgMS42IDAgMCAwIDAtMi4yNjV6Ii8+PHBhdGggZmlsbD0iIzNCODhDMyIgZD0ibTE1LjczNCAxNi44NjhsLTMuMjE0LTMuMjE1QTYuOTY1IDYuOTY1IDAgMCAwIDExIDE4YzAgMS42NDQuNTcxIDMuMTUzIDEuNTIgNC4zNDdsMy4yMTQtMy4yMTRhMS42IDEuNiAwIDAgMCAwLTIuMjY1em02LjYxNCA2LjYxMmwtMy4yMTUtMy4yMTVhMS42MDUgMS42MDUgMCAwIDAtMi4yNjYgMGwtMy4yMTUgMy4yMTVBNi45NjcgNi45NjcgMCAwIDAgMTggMjVhNi45NjcgNi45NjcgMCAwIDAgNC4zNDgtMS41MnptLTIuMDgyLTQuMzQ3bDMuMjE1IDMuMjE1QTYuOTczIDYuOTczIDAgMCAwIDI1IDE4YTYuOTYyIDYuOTYyIDAgMCAwLTEuNTItNC4zNDdsLTMuMjE1IDMuMjE1YTEuNjAzIDEuNjAzIDAgMCAwIC4wMDEgMi4yNjV6bS0xLjEzMy0zLjM5OWwzLjIxNS0zLjIxNEE2Ljk2NyA2Ljk2NyAwIDAgMCAxOCAxMWE2Ljk2MiA2Ljk2MiAwIDAgMC00LjM0NyAxLjUybDMuMjE1IDMuMjE0YTEuNiAxLjYgMCAwIDAgMi4yNjUgMHoiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSI1IiBmaWxsPSIjQkJEREY1Ii8+PC9zdmc+") no-repeat center center / contain;
}

.list {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.item {
  width: 100%;
  overflow: hidden;
}
</style>