<template>
  <a-layout class="w-full h-full grid grid-rows-[auto_1fr] bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
    <a-layout-header
      class="flex justify-between items-center gap-4 h-12 px-5 bg-white dark:bg-slate-800 border-b border-gray-5=200 dark:border-gray-700"
    >
      <h1 class="flex items-center gap-2 text-base font-normal">
        <img src="/favicon.ico" alt="" class="w-5 h-5" />
        前端驿站
      </h1>
      <div class="flex gap-2">
        <a-tooltip :content="isDark ? '点击切换为亮色模式' : '点击切换为暗色模式'">
          <a-button shape="circle" @click="toggleTheme">
            <template #icon>
              <i :class="!isDark ? 'icon-park-outline-moon' : 'icon-park-outline-sun'"></i>
            </template>
          </a-button>
        </a-tooltip>
        <!-- <a-button class="bg-transparent">
          <template #icon>
            <i class="icon-park-outline-config"></i>
          </template>
        </a-button> -->
      </div>
    </a-layout-header>
    <a-layout class="flex overflow-hidden">
      <a-layout-sider
        :width="224"
        :collapsible="true"
        class="dark:bg-slate-800 border-r border-gray-100 dark:border-gray-700 hidden md:block"
      >
        <a-menu class="h-full bg-transparent" style="background-color: transparent" :level-indent="0">
          <a-menu-item v-for="item in routes" :key="item.path" @click="onChangeRoute(item.path)">
            <template #icon>
              <i :class="item.meta?.icon"></i>
            </template>
            {{ item.meta?.title }}
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <router-view></router-view>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import routes from "~pages";

const isDark = useDark({
  onChanged(dark) {
    if (dark) {
      document.body.classList.add("dark");
      document.body.setAttribute("arco-theme", "dark");
    } else {
      document.body.classList.remove("dark");
      document.body.setAttribute("arco-theme", "light");
    }
  },
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
};

const router = useRouter();

// const buttons = [
//   {
//     icon: "icon-park-outline-moon",
//     tooltip: "点击切换为亮色模式",
//     visible: () => isDark.value,
//     onClick: () => {
//       isDark.value = true;
//     },
//   },
//   {
//     icon: "icon-park-outline-sun",
//     onClick: () => {
//       isDark.value = false;
//     },
//   },
// ];

const onChangeRoute = (path: string) => {
  router.push(path);
};
</script>

<style scoped>
.logo {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("/favicon.ico") no-repeat center center / contain;
}

.list {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.item {
  width: 100%;
  overflow: hidden;
}
</style>
