<template>
  <a-layout class="w-full h-full grid grid-rows-[auto_1fr] bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
    <a-layout-header class="h-12 bg-white dark:bg-slate-800 border-b border-gray-5=200 dark:border-gray-700">
      <div class="mx-auto max-w-[1280px] flex justify-between items-center gap-4 px-6 ">
        <router-link to="/">
          <h1 class="flex items-center gap-2 text-base font-normal dark:text-white">
            <img src="/favicon.ico" alt="" class="w-5 h-5" />
            绝弹导航
          </h1>
        </router-link>
        <div class="flex gap-2">
          <a-tooltip :content="isDark ? '亮色模式' : '暗色模式'">
            <a-button shape="circle" @click="toggleTheme">
              <template #icon>
                <i :class="!isDark ? 'icon-park-outline-moon' : 'icon-park-outline-sun'"></i>
              </template>
            </a-button>
          </a-tooltip>
          <!-- <a-tooltip :content="'菜单'">
            <a-button shape="circle">
              <template #icon>
                <i class="icon-park-outline-hamburger-button"></i>
              </template>
            </a-button>
          </a-tooltip> -->
        </div>
      </div>
    </a-layout-header>
    <a-layout class="flex overflow-hidden">
      <router-view></router-view>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import routes from "~pages";

const router = useRouter();
const route = useRoute();
const selectedKeys = ref<string[]>([]);
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

watch(
  () => route.path,
  (path) => {
    selectedKeys.value = [path];
  },
  { immediate: true }
);

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

const onGotoGithub = () => {
  const repo = "https://github.com/juetan/nav";
  window.open(repo, "_blank");
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
