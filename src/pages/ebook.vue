<template>
  <div class="grid grid-rows-[auto_1fr]">
    <div class="text-slate-500 px-6 pt-4 pb-3">共计：{{ list.length }}本</div>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 justify-between overflow-auto w-full px-5 pb-4">
      <div v-for="item in list" :key="item.name" class="grid gap-2 bg-white dark:bg-slate-800 p-2">
        <div class="overflow-hidden w-full">
          <img :src="`./books/${item.name}/${item.cover}`" alt="" class="w-full">
        </div>
        <div>
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import list from '../../public/books/list.json';

</script>

<route lang="json">
{
  "meta": {
    "title": "电子书籍",
    "icon": "icon-park-outline-bookshelf"
  }
}
</route>

<style scoped></style>