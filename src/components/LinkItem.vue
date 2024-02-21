<template>
  <li>
    <a
      class="item group flex w-[280px] gap-4 h-33 p-4 rounded bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark-hover:bg-slate-700 cursor-pointer"
      :href="item.url"
      target="_blank"
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
          <h3 class="font-normal text-base m-0">
            {{ item.title }}
          </h3>
        </div>
        <p class="text-gray-500 leading-5 my-0 line-clamp-2" :title="item.description">
          {{ item.description }}
        </p>
        <div class="flex gap-2 h-[18px] mt-1">
          <!-- <span
                      v-for="tag in item.tags.slice(0, 3)"
                      :key="tag"
                      size="small"
                      color="blue"
                      class="cursor-pointer text-xs text-gray-400"
                    >
                      <i class="icon-park-outline-tag-one text-sm"></i>
                      {{ tagMap[tag] || tag }}
                    </span> -->
          <!-- <a-link class="hidden! group-hover:inline-block!" :href="item.url" target="_blank">打开</a-link> -->
          <!-- <a-link class="hidden! group-hover:inline-block!" @click="onCopyUrl(item)">复制</a-link> -->
        </div>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.item {
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
}
</style>
