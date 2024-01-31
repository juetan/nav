<template>
  <div class=" flex-1 h-full grid grid-rows-[auto_1fr]">
    <div class="">
      <div class="px-6 pb-2 md:pb-1 mx-auto max-w-[1180px] mt-2">
        <div v-if="!showTags" class="relative bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-200 dark:from-slate-800 dark:to-slate-700 py-8 px-4 dark:bg-gray-800 rounded">
          <div class="text-center">
            <div class="text-xl">前端开发</div>
            <p class="p-0 mt-2.5 text-slate-600">
              涵盖前端开发、设计、运维、测试、产品、运营等领域，目前共收录 {{ items.length }} 个网站。
            </p>
          </div>
          <div class="flex gap-2 justify-center mt-5">
            <a-input-search
              v-model="keyword"
              class="md:w-[40%]! bg-[rgba(255,255,255,.4)]! dark:bg-[rgba(255,255,255,.1)]! rounded-full!"
              placeholder="输入名称/描述..."
              shape="round"
              allow-clear
              @input="onKeywordChange"
              @clear="onKeywordChange"
              @search="onKeywordChange"
            ></a-input-search>
          </div>
          <div class="hidden! absolute top-2 right-4 flex gap-2 text-slate-500">
            <a-tooltip position="bottom">
              <i class="icon-park-outline-switch px-1 cursor-pointer hover:bg-[rgba(255,255,255,.05)]"></i>
              <template #content>
                切换到标签面板
              </template>
            </a-tooltip>
            <a-tooltip position="bottom">
              <i class="icon-park-outline-pin px-1 cursor-pointer hover:bg-[rgba(255,255,255,.05)]"></i>
              <template #content>
                固定位置，滚动时将始终显示在视图中。
              </template>
            </a-tooltip>
            <a-tooltip position="bottom">
              <i class="icon-park-outline-hamburger-button cursor-pointer"></i>
              <template #content>
                显示导航目录
              </template>
            </a-tooltip>
          </div>
        </div>
        <div v-else class="bg-gray-100 py-8 px-4">
          <div>
            <ul class="inline-flex gap-2 list-none m-0 p-0">
              <li>
                <a-tag :checkable="true" color="blue">全部框架</a-tag>
              </li>
              <li>
                <a-tag :checkable="true" color="blue">vue</a-tag>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-[1180px] mx-auto mt-6">
        <div v-for="category in showData" :key="category.label" ref="itemsRef" class="fade-in-bottom">
          <div class="text-slate-500 px-6 mb-3 mt-2">
            <a :href="`#${category.value}`">
              <i class="icon-park-outline-tag-one"></i>
              {{ category.label }} ({{ category.children.length }})
            </a>
            <h2 class="hidden" :id="category.value">{{ category.label }}</h2>
          </div>
          <div v-if="category.children?.length" class="list flex-1 grid gap-4 px-5 pb-4">
            <div
              v-for="item in category.children"
              :key="item.title"
              class="item group flex w-[280px] gap-4 h-32 p-4 rounded  bg-gray-100 dark:bg-slate-800"
            >
              <img
                :src="item.logoFileName ? `./images/${item.logoFileName}` : item.logo"
                :alt="item.title"
                class="w-12 h-12 object-contain bg-slate-50 dark:bg-slate-700 p-1 rounded"
                width="48"
                height="48"
              />
              <div class="grid grid-rows-[auto_1fr_auto] gap-2">
                <div class="flex items-center gap-2">
                  <a :href="item.url" target="_blank" class="hover:text-blue-500 dark:text-slate-100 hover:underline underline-offset-3">
                    <h3 class="font-normal m-0">{{ item.title }}</h3>
                  </a>
                  <span :title="'复制网址'">
                    <i
                      class="hidden! group-hover:block! icon-park-outline-copy text-slate-300 hover:text-slate-500 cursor-pointer"
                      style="vertical-align: 1px; width: 13px; height: 13px"
                      @click="onCopyUrl(item)"
                    ></i>
                  </span>
                </div>
                <p class="text-gray-500 leading-5 my-0 line-clamp-2" :title="item.description">
                  {{ item.description }}
                </p>
                <div class="flex gap-2 h-[18px]">
                  <!-- <a-tag v-for="tag in item.tags" :key="tag" size="small" color="blue" class="cursor-pointer">
                    {{ tagMap[tag] || tag }}
                  </a-tag> -->
                  <span v-for="tag in item.tags" :key="tag" size="small" color="blue" class="cursor-pointer text-xs text-gray-400">
                    <i class="icon-park-outline-tag-one text-sm"></i>
                    {{ tagMap[tag] || tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a-empty v-else class="mt-32">
            <template #image>
              <img src="../assets//empty.svg" alt="empty" class="!h-48" />
            </template>
            结果为空，换个关键字试试？
          </a-empty>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from "@arco-design/web-vue";
import { debounce } from "lodash-es";
import { normalData, items } from "../api";
import tagmaps from "../api/tags/tag-map.json";

const showData = ref(normalData);
const itemsRef = ref();
const scrollRef = ref();
const keyword = ref("");
const router = useRouter();
const showTags = ref(false)
const tagMap = tagmaps.reduce((acc, cur) => {
  acc[cur.value] = cur.label;
  return acc;
}, {} as Record<string, string>);

const onKeywordChange = debounce(() => {
  if (!keyword.value) {
    showData.value = normalData;
    return;
  }
  const children = items.filter((item) => {
    const hasTitle = item.title.toLowerCase().includes(keyword.value?.toLowerCase());
    const hasDesc = item.description.toLowerCase().includes(keyword.value?.toLowerCase());
    return hasTitle || hasDesc;
  });
  showData.value = [
    {
      label: `搜索：${keyword.value}，共 ${children.length} 条结果。`,
      value: "",
      children: children,
    },
  ];
}, 300);

const onCopyUrl = (item: any) => {
  navigator.clipboard.writeText(item.url);
  Message.success(`已复制 ${item.title} 的网址!`);
};
</script>

<route lang="json">
{
  "meta": {
    "title": "前端导航",
    "icon": "icon-park-outline-navigation"
  }
}
</route>

<style scoped>
.logo {
  display: inline-block;
  width: 24px;
  height: 24px;
}

.list {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

.item {
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
}
.fade-in-bottom {
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
