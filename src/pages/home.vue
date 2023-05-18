<template>
  <div class="flex-1 h-full grid grid-rows-[auto_1fr]">
    <div class="flex justify-between items-center mx-6 pt-4 pb-0 border-b border-gray-200 dark:border-slate-800">
      <div>
        <div class="text-base">常用网址</div>
        <p class="text-slate-500 p-0 mt-2">
          涵盖前端开发、设计、运维、测试、产品、运营等领域，目前共收录 {{ itemsLength }} 个网站。
        </p>
      </div>
      <div class="flex gap-2">
        <a-input-search
          v-model="keyword"
          @change="onKeywordChange"
          class="w-96"
          placeholder="名称/描述关键字..."
          allow-clear
        ></a-input-search>
      </div>
    </div>
    <!-- <div class="flex items-center gap-2 px-6 mt-2 text-slate-500">
      <span>分类({{ items.length }}): </span>
      <a-link v-for="item in items" :key="item.title" @click="onScrollItem(item)">
        <span class="text-slate-600 hover:text-blue-500">
          {{ item.title }}
        </span>
      </a-link>
    </div> -->
    <a-scrollbar ref="scrollRef" outer-class="overflow-hidden" class="h-full overflow-auto mt-3 pb-4">
      <div v-for="category in items" :key="category.title" ref="itemsRef">
        <div class="text-slate-500 px-6 mb-3 mt-2">{{ category.title }}</div>
        <div class="list flex-1 grid gap-4 px-5 pb-4">
          <div
            v-for="item in category.items"
            :key="item.title"
            class="item flex w-[280px] gap-3 h-32 p-4 rounded-sm bg-white dark:bg-slate-800"
          >
            <img
              :src="`./images/${item.logoFileName}`"
              :alt="item.title"
              class="w-12 h-12 object-contain"
              width="48"
              height="48"
            />
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
import data from "../../public/images/items.json";

const items = reactive([
  {
    title: "网址列表",
    items: data,
  },
]);

const itemsRef = ref();
const scrollRef = ref();
const keyword = ref("");

// const onScrollItem = (item: any) => {
//   const index = items.indexOf(item);
//   scrollRef.value.scrollTo(0, itemsRef.value[index].offsetTop || 1);
// };

const onKeywordChange = (value: string) => {
  items[0].items = data.filter((item) => {
    const hasTitle = item.title.toLowerCase().includes(value.toLowerCase());
    const hasDesc = item.description.toLowerCase().includes(value.toLowerCase());
    return hasTitle || hasDesc;
  });
};

const itemsLength = data.length;
</script>

<route lang="json">
{
  "meta": {
    "title": "前端资源",
    "icon": "icon-park-outline-html-five"
  }
}
</route>

<style scoped>
.logo {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzYgMzYiPjxwYXRoIGZpbGw9IiM1NUFDRUUiIGQ9Ik0xNi44NjcgMTUuNzM0Yy42MjUuNjI2IDEuNjQuNjI2IDIuMjY2IDBsNi4yMzItNi4yMzFhMS42MDQgMS42MDQgMCAwIDAgMC0yLjI2NmwtNi4yMzItNi4yMzFhMS42MDIgMS42MDIgMCAwIDAtMi4yNjYgMGwtNi4yMzIgNi4yMzFhMS42MDIgMS42MDIgMCAwIDAgMCAyLjI2Nmw2LjIzMiA2LjIzMXptOS42MzEgOS42M2MuNjI1LjYyNiAxLjY0LjYyNiAyLjI2NiAwbDYuMjMyLTYuMjMxYTEuNjA0IDEuNjA0IDAgMCAwIDAtMi4yNjZsLTYuMjMyLTYuMjMxYTEuNjAyIDEuNjAyIDAgMCAwLTIuMjY2IDBsLTYuMjMyIDYuMjMxYTEuNjAyIDEuNjAyIDAgMCAwIDAgMi4yNjZsNi4yMzIgNi4yMzF6bS0xLjEzNCAxLjEzNGwtNi4yMzEtNi4yMzJhMS42MDIgMS42MDIgMCAwIDAtMi4yNjYgMGwtNi4yMzEgNi4yMzJhMS42IDEuNiAwIDAgMCAwIDIuMjY1bDYuMjMxIDYuMjMyYy42MjYuNjI1IDEuNjQuNjI1IDIuMjY2IDBsNi4yMzEtNi4yMzJhMS42IDEuNiAwIDAgMCAwLTIuMjY1em0tOS42My05LjYzbC02LjIzMS02LjIzMmExLjYwMiAxLjYwMiAwIDAgMC0yLjI2NiAwbC02LjIzMSA2LjIzMmExLjYgMS42IDAgMCAwIDAgMi4yNjVsNi4yMzEgNi4yMzJjLjYyNi42MjUgMS42NC42MjUgMi4yNjYgMGw2LjIzMS02LjIzMmExLjYgMS42IDAgMCAwIDAtMi4yNjV6Ii8+PHBhdGggZmlsbD0iIzNCODhDMyIgZD0ibTE1LjczNCAxNi44NjhsLTMuMjE0LTMuMjE1QTYuOTY1IDYuOTY1IDAgMCAwIDExIDE4YzAgMS42NDQuNTcxIDMuMTUzIDEuNTIgNC4zNDdsMy4yMTQtMy4yMTRhMS42IDEuNiAwIDAgMCAwLTIuMjY1em02LjYxNCA2LjYxMmwtMy4yMTUtMy4yMTVhMS42MDUgMS42MDUgMCAwIDAtMi4yNjYgMGwtMy4yMTUgMy4yMTVBNi45NjcgNi45NjcgMCAwIDAgMTggMjVhNi45NjcgNi45NjcgMCAwIDAgNC4zNDgtMS41MnptLTIuMDgyLTQuMzQ3bDMuMjE1IDMuMjE1QTYuOTczIDYuOTczIDAgMCAwIDI1IDE4YTYuOTYyIDYuOTYyIDAgMCAwLTEuNTItNC4zNDdsLTMuMjE1IDMuMjE1YTEuNjAzIDEuNjAzIDAgMCAwIC4wMDEgMi4yNjV6bS0xLjEzMy0zLjM5OWwzLjIxNS0zLjIxNEE2Ljk2NyA2Ljk2NyAwIDAgMCAxOCAxMWE2Ljk2MiA2Ljk2MiAwIDAgMC00LjM0NyAxLjUybDMuMjE1IDMuMjE0YTEuNiAxLjYgMCAwIDAgMi4yNjUgMHoiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSI1IiBmaWxsPSIjQkJEREY1Ii8+PC9zdmc+")
    no-repeat center center / contain;
}

.list {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.item {
  width: 100%;
  overflow: hidden;
}
</style>
