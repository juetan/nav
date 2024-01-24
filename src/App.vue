<template>
  <div class="w-full h-full grid grid-rows-[auto_1fr] dark:bg-slate-900 dark:text-slate-100">
    <div class="h-12 bg-white dark:bg-slate-800 shadow-[0px_16px_32px_rgba(0,0,0,0.04)] dark:border-gray-700">
      <div class="mx-auto max-w-[1180px] h-full flex justify-between items-center gap-4 px-6">
        <router-link to="/">
          <h1 class="flex items-center gap-2 text-base font-normal dark:text-white">
            <img src="/favicon.ico" alt="" class="w-5 h-5" />
            绝弹导航
          </h1>
        </router-link>
        <div class="flex gap-2">
          <a-dropdown trigger="hover">
            <button
              class="cursor-pointer bg-transparent dark:text-white hover:bg-gray-200 dark:hover-bg-[rgba(255,255,255,.2)] rounded py-1 px-2"
            >
              <i class="icon-park-outline-theme text-sm"></i>
              主题
            </button>
            <template #content>
              <a-doption @click="isDark = false">
                <i class="icon-park-outline-sun mr-2 text-xs"></i>
                亮色模式
              </a-doption>
              <a-doption @click="isDark = true">
                <i class="icon-park-outline-moon mr-2 text-xs"></i>
                暗色模式
              </a-doption>
            </template>
          </a-dropdown>
          <button
            @click="onGotoGithub"
            class="cursor-pointer bg-transparent dark:text-white hover:bg-gray-200 dark:hover-bg-[rgba(255,255,255,.2)] rounded py-1 px-2"
          >
            <i class="icon-park-outline-github-one text-sm"></i>
            仓库
          </button>
          <button
            class="cursor-pointer bg-transparent dark:text-white hover:bg-gray-200 dark:hover-bg-[rgba(255,255,255,.2)] rounded py-1 px-2"
          >
            <i class="icon-park-outline-user text-sm"></i>
            关于
          </button>
          <!-- <a-tooltip :content="'菜单'">
            <a-button shape="circle">
              <template #icon>
                <i class="icon-park-outline-hamburger-button"></i>
              </template>
            </a-button>
          </a-tooltip> -->
        </div>
      </div>
    </div>
    <a-scrollbar outer-class="overflow-hidden" class="roller h-full overflow-auto mt-3 pb-4">
      <div class="h-full grid grid-rows-[1fr_auto]">
        <router-view></router-view>
        <div class="text-center text-gray-500 pt-9 pb-8 mt-4 bg-gray-50 dark:bg-slate-800">
          <div>
            <ul class="list-none flex justify-center items-center gap-2 m-0">
              <li>
                <a href="https://github.com/juetan/nav" class="hover:text-blue-500 hover:underline underline-offset-2">
                  仓库地址
                </a>
              </li>
              <li class="leading-none text-xs text-gray-400">|</li>
              <li>
                <a
                  href="https://github.com/juetan/nav/pulls"
                  class="hover:text-blue-500 hover:underline underline-offset-2"
                >
                  参与贡献
                </a>
              </li>
              <li class="text-xs text-gray-400">|</li>
              <li>
                <a href="https://juetan.cn/" class="hover:text-blue-500 hover:underline underline-offset-2">
                  绝弹博客
                </a>
              </li>
              <li class="text-xs text-gray-400">|</li>
              <li>
                <a href="https://github.com/juetan" class="hover:text-blue-500 hover:underline underline-offset-2">
                  绝弹仓库
                </a>
              </li>
              <li class="text-xs text-gray-400">|</li>
              <li>
                <a
                  href="javascript:;"
                  class="hover:text-blue-500 hover:underline underline-offset-2"
                  @click="$router.push('/about')"
                >
                  关于本站
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-1.5">Copyright &copy; 绝弹导航，版权所有</div>
        </div>
      </div>
      <a-back-top :target-container="'.roller'">
        <a-button shape="round" size="large">
          <template #icon>
            <i class="icon-park-outline-arrow-up"></i>
          </template>
        </a-button>
      </a-back-top>
    </a-scrollbar>
  </div>
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
