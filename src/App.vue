<template>
  <div class="w-full h-full grid grid-rows-[auto_1fr] dark:bg-slate-900 dark:text-slate-100">
    <div class="h-13 bg-white dark:bg-slate-800 shadow-[0px1_16px_32px_rgba(0,0,0,0.04)] dark:border-gray-700">
      <div class="mx-auto max-w-[1380px] h-full flex justify-between items-center gap-4 px-6">
        <router-link to="/">
          <h1 class="flex items-center text-xl gap-2 font-normal dark:text-white hover:text-blue-500">
            <img src="/favicon.ico" alt="" class="w-6 h-6" />
            绝弹导航
          </h1>
        </router-link>
        <div class="gap-1 hidden md:flex text-[15px]">
          <button
            v-if="isDark"
            @click="isDark = false"
            class="cursor-pointer bg-transparent dark:text-white hover:bg-gray-200 dark:hover-bg-[rgba(255,255,255,.2)] rounded py-1 px-2"
          >
            主题
          </button>
          <button
            v-else
            @click="isDark = true"
            class="cursor-pointer bg-transparent dark:text-white hover:bg-gray-200 dark:hover-bg-[rgba(255,255,255,.2)] rounded py-1 px-2"
          >
            主题
          </button>
          <router-link
            to="/about"
            class="cursor-pointer bg-transparent dark:text-white hover:bg-gray-200 dark:hover-bg-[rgba(255,255,255,.2)] rounded py-1 px-2"
          >
            关于
          </router-link>
        </div>
      </div>
    </div>
    <a-scrollbar outer-class="overflow-hidden" class="roller h-full overflow-auto pb-4">
      <div class="h-full grid grid-rows-[1fr_auto] pt-2">
        <router-view></router-view>
        <div class="text-center text-gray-500 pb-10 pt-8">
          <div>
            <ul class="list-none flex justify-center items-center gap-2 m-0">
              <li>
                <a
                  target="_blank"
                  href="https://github.com/juetan/nav"
                  class="hover:text-blue-500 hover:underline underline-offset-2"
                >
                  仓库地址
                </a>
              </li>
              <li class="leading-none text-xs text-gray-400">|</li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/juetan/nav/pulls"
                  class="hover:text-blue-500 hover:underline underline-offset-2"
                >
                  参与贡献
                </a>
              </li>
              <li class="text-xs text-gray-400">|</li>
              <li>
                <a
                  target="_blank"
                  href="https://juetan.cn/"
                  class="hover:text-blue-500 hover:underline underline-offset-2"
                >
                  作者博客
                </a>
              </li>
              <li class="text-xs text-gray-400">|</li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/juetan"
                  class="hover:text-blue-500 hover:underline underline-offset-2"
                >
                  作者仓库
                </a>
              </li>
              <li class="text-xs text-gray-400">|</li>
              <li>
                <a
                  target="_blank"
                  href="javascript:;"
                  class="hover:text-blue-500 hover:underline underline-offset-2"
                  @click="$router.push('/about')"
                >
                  关于本站
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-2">Copyright &copy; 绝弹导航，版权所有</div>
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

const links = [
  {
    name: "仓库地址",
    url: "https://github.com/juetan/nav",
  },
  {
    name: "参与贡献",
    url: "https://github.com/juetan/nav/pulls",
  },
  {
    name: "绝弹博客",
    url: "https://juetan.cn/",
  },
  {
    name: "绝弹仓库",
    url: "https://github.com/juetan",
  },
  {
    name: "关于本站",
    url: "/about",
  },
];

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
