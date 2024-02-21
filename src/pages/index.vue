<template>
  <div class="flex-1 h-full grid grid-rows-[auto_1fr]">
    <div class="">
      <div class="px-6 pb-2 md:pb-1 mx-auto max-w-[1380px]">
        <PageBanner
          title="前端开发"
          :description="`涵盖前端开发、设计、运维、测试、产品、运营等领域，目前共收录 ${items.length} 个网站。`"
        >
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
        </PageBanner>
      </div>
    </div>
    <div>
      <div class="max-w-[1380px] mx-auto mt-6">
        <div v-for="category in showData" :key="category.label" ref="itemsRef" class="fade-in-bottom">
          <div class="text-slate-500 px-6 mb-3 mt-2">
            <a :href="`#${category.value}`">
              <i class="icon-park-outline-tag-one"></i>
              {{ category.label }} ({{ category.children.length }})
            </a>
            <h2 class="hidden" :id="category.value">{{ category.label }}</h2>
          </div>
          <ul v-if="category.children?.length" class="list list-none flex-1 grid gap-4 px-5 pb-4">
            <LinkItem v-for="item in category.children" :key="item.title" :item="item"> </LinkItem>
          </ul>
          <Empty v-else description="没有结果，换个关键词试试?"></Empty>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from "@arco-design/web-vue";
import { debounce } from "lodash-es";
import { items, normalData } from "../api";
import tagmaps from "../api/tags/tag-map.json";

const showData = ref(normalData);
const itemsRef = ref();
const scrollRef = ref();
const keyword = ref("");
const router = useRouter();
const showTags = ref(false);
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
