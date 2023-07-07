<template>
  <div class="flex-1 h-full grid grid-rows-[auto_1fr]">
    <div
      class="md:flex justify-between items-center px-6 pt-4 pb-4 md:pb-1 border-b border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-800"
    >
      <div>
        <div class="text-base">网址列表</div>
        <p class="text-slate-500 p-0 mt-2">
          涵盖前端开发、设计、运维、测试、产品、运营等领域，目前共收录 {{ itemsLength }} 个网站。
        </p>
      </div>
      <div class="flex gap-2">
        <a-input-search
          v-model="keyword"
          class="w-96"
          placeholder="名称/描述关键字..."
          allow-clear
          @input="onKeywordChange"
          @clear="onKeywordChange"
          @search="onKeywordChange"
        ></a-input-search>
      </div>
    </div>
    <!-- <div class="bg-white">
      <div v-for="tag in tags" :key="tag.value" class="flex items-center gap-2 px-6 mt-2 text-slate-500 bg-white">
        <span class="w-16">{{ tag.label }}({{ tag.children.length }}): </span>
        <a-link v-for="item in tag.children" :key="item.label" bordered @click="onClickTag(tag.value)">
          <span>
            {{ item.label }}
          </span>
        </a-link>
      </div>
    </div> -->
    <a-scrollbar ref="scrollRef" outer-class="overflow-hidden" class="h-full overflow-auto mt-3 pb-4">
      <div v-for="category in showData" :key="category.label" ref="itemsRef">
        <div class="text-slate-500 px-6 mb-3 mt-2">{{ category.label }}</div>
        <div class="list flex-1 grid gap-4 px-5 pb-4">
          <div
            v-for="item in category.children"
            :key="item.title"
            class="item group flex w-[280px] gap-4 h-32 p-4 rounded-sm bg-white dark:bg-slate-800"
          >
            <img
              :src="`./images/${item.logo}`"
              :alt="item.title"
              class="w-12 h-12 object-contain bg-slate-50 dark:bg-slate-700 p-1 rounded"
              width="48"
              height="48"
            />
            <div class="grid grid-rows-[auto_1fr_auto] gap-2">
              <div class="flex items-center gap-2">
                <a :href="item.url" target="_blank" class="hover:text-blue-500 dark:text-slate-100">
                  <h3 class="font-normal m-0">{{ item.title }}</h3>
                </a>
                <span :title="'复制网址'">
                  <i
                    class="hidden group-hover:block icon-park-outline-copy w-4 h-4 text-slate-300 hover:text-slate-500 cursor-pointer"
                    style="vertical-align: 1px; width: 13px; height: 13px"
                    @click="onCopyUrl(item)"
                  ></i>
                </span>
              </div>
              <p class="text-gray-500 leading-5 my-0">{{ item.description }}</p>
              <div class="flex gap-2">
                <a-tag v-for="tag in item.tags" :key="tag" size="small" color="blue" class="cursor-pointer">
                  {{ tag }}
                </a-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { Message } from "@arco-design/web-vue";
import { debounce } from "lodash-es";
import { Tag, normalData, items } from "../api";

const showData = ref(normalData);
const itemsRef = ref();
const scrollRef = ref();
const keyword = ref("");

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
      label: `搜索结果：${keyword.value}，共 ${children.length} 条。`,
      children: children,
    },
  ];
}, 500);

const onCopyUrl = (item: any) => {
  navigator.clipboard.writeText(item.url);
  Message.success(`已复制 ${item.title} 的网址`);
};

const itemsLength = items.length;
</script>

<route lang="json">
{
  "meta": {
    "title": "网址列表",
    "icon": "icon-park-outline-html-five"
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
  border: 1px solid transparent;
  transition: all 0.3s ease;
}
.item:hover {
  border-color: #0099ff40;
  box-shadow: 0 0 12px #0099ff30;
}
</style>
