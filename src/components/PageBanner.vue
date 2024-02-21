<template>
  <div class="banner relative bg-blue-400 py-8 px-4 dark:bg-[rgba(255,255,255,.05)] rounded">
    <div class="text-center">
      <div class="text-2xl text-[rgba(0,0,0,.8)] dark:text-white">
        {{ title }}
      </div>
      <p class="p-0 mt-4 text-[rgba(0,0,0,.5)] dark:text-gray-400">
        {{ description }}
      </p>
    </div>
    <div class="flex gap-2 justify-center mt-5">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  count: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped>
.banner {
  background-image: url('./banner.svg');
  background-size: 100% auto;
}
</style>
