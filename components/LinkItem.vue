<template>
  <li class="overflow-hidden">
    <a
      class="group flex gap-4 h-33 p-4 rounded bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 dark-hover:bg-slate-700 cursor-pointer"
      :href="item.url"
      target="_blank"
    >
      <img
        :src="getIconUrl(item.icon)"
        :alt="item.name"
        class="object-contain bg-slate-50 dark:bg-slate-700 p-1 rounded"
        width="48"
        height="48"
        loading="lazy"
      />
      <div class="flex-1 grid grid-rows-[auto_1fr_auto] gap-2">
        <h3 class="font-normal text-base m-0" v-html="replaceKeyword(item.name)"></h3>
        <p
          class="text-gray-600 leading-5 my-0 line-clamp-2"
          :title="item.description ?? ''"
          v-html="replaceKeyword(item.description ?? '')"
        ></p>
        <div class="flex gap-2 h-[18px] mt-1"></div>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
import type { Link } from '@prisma/client';
import type { PropType } from 'vue';

defineProps({
  item: {
    type: Object as PropType<Link>,
    required: true,
  },
  replaceKeyword: {
    type: Function as PropType<(input: string) => string>,
    required: true,
  },
})

const getIconUrl = (url: string) => {
  const hostname = new URL(url).hostname
  return 'https://icon.horse/icon/' + hostname
}
</script>

<style scoped>
.item {
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
}
</style>
