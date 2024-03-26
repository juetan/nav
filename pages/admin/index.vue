<template>
  <div>
    <div>
      <div class="pl-1 mb-3">统计概览</div>
      <div v-if="loaded" class="flex justify-between gap-4">
        <div v-for="item in stat" :key="item.title" class="flex-1 items-center flex gap-4 bg-gray-100 py-3 px-4">
          <!-- <div class="text-xl text-gray-500">
              <i :class="item.icon"></i>
            </div> -->
          <div>
            <div class="text-gray-500">
              {{ item.title }}
            </div>
            <div class="text-xl mt-1.5">
              {{ item.count }}
            </div>
          </div>
        </div>
      </div>
      <a-skeleton-line v-else :rows="9"></a-skeleton-line>
    </div>
  </div>
</template>

<script lang="tsx" setup>

defineOptions({
  name: 'AdminIndexPage',
})

definePageMeta({
  title: '概览',
})

useHead({
  title: '概览',
})

const loaded = ref(false)

const stat = ref({
  link: {
    title: '链接(个)',
    count: 0,
    icon: 'i-icon-park-outline-folder-close',
  },
  category: {
    title: '分类(个)',
    count: 0,
    icon: 'i-icon-park-outline-folder-close',
  },
  user: {
    title: '用户(个)',
    count: 0,
    icon: 'i-icon-park-outline-user',
  },
  run: {
    title: '运行(天)',
    count: 0,
    icon: 'i-icon-park-outline-user',
  },
})

onMounted(async () => {
  const res = await $fetch('/api/stat')
  loaded.value = true
  stat.value.link.count = res.links
  stat.value.category.count = res.categories
  stat.value.user.count = res.users
  stat.value.run.count = res.days
})
</script>

<style scoped></style>
