<template>
  <div class="relative min-h-screen mt-4 px-4 xl:px-0">
    <aside class="hidden lg:block fixed h-screen w-56 z-9999">
      <a-input-search
        v-model="keyword"
        class="mb-2"
        :placeholder="`搜索名字/描述(${total})...`"
        :allow-clear="true"
        @clear="onClickSearch"
        @search="onClickSearch"
        @press-enter="onClickSearch"
      ></a-input-search>
      <ul v-if="categories?.length" class="space-y-1">
        <li
          v-for="(item, index) in categories"
          :key="item.id"
          class="flex items-center justify-between px-3 h-8 text-gray-500 rounded hover:bg-gray-100 cursor-pointer"
          :class="{ 'bg-blue-100! group text-blue-500!': currentCategoryId == item.id }"
          @click="onClickItem(item, index)"
        >
          <span>
            <i class="text-base mr-1" :class="item.icon ?? 'i-icon-park-outline-tag-one'"></i>
            {{ item.name }}
          </span>
          <span class="text-xs">{{ item.links.length }}</span>
        </li>
      </ul>
      <a-skeleton v-else :rows="10" :animation="true"></a-skeleton>
    </aside>
    <article class="pl-0 lg:pl-64 fade-in-bottom">
      <section v-for="category in categories" :key="category.id" ref="itemsRef" class="pb-6">
        <h2 class="text-slate-500 text-sm font-normal pb-3 m-0">
          <!-- <i class="mr-1 text-base" :class="category.icon ?? 'i-icon-park-outline-tag-one'"></i> -->
          <span>{{ category.name }}</span>
        </h2>
        <ul class="list list-none flex-1 grid gap-4">
          <LinkItem v-for="link in category.links" :key="link.id" :item="link as any" :replace-keyword="replaceKeyword">
          </LinkItem>
        </ul>
      </section>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { OnScrollKey } from '@/utils/ref'

definePageMeta({
  title: '首页',
  middleware: ['analytics'],
})

useHead({
  title: '首页',
})

const { data: categoryData } = await useFetch('/api/categories')
const categories = ref([]) as typeof categoryData
const scrollbarRef = inject(ScraollBarRef)
const onScroll = inject(OnScrollKey)
const currentCategoryId = ref(0)
const keyword = ref('')
const cachedKeyword = ref('')
const itemsRef = ref<HTMLElement[] | null>(null)
const heights = computed(() => itemsRef.value?.map((item) => item.getBoundingClientRect().height) || [])
const total = computed(() => categoryData.value?.reduce((t, v) => t + v.links.length, 0) ?? 0)

categories.value = categoryData.value?.filter((i) => i.links?.length) ?? []

const onClickItem = (item: any, index: number) => {
  const top = heights.value.slice(0, index).reduce((t, v) => t + v, 0)
  scrollbarRef?.value?.scrollTop(top)
}

const replaceKeyword = (input: string) => {
  if (!cachedKeyword.value) {
    return input
  }
  if (!input) {
    return ''
  }
  const str = `<span class="text-red-500">${cachedKeyword.value}</span>`
  return input.toLowerCase().replaceAll(cachedKeyword.value.toLowerCase(), str)
}

onScroll?.((e: Event) => {
  const scrollTop = (e.target as HTMLElement).scrollTop
  let totalTop = 0
  if (scrollTop === 0) {
    currentCategoryId.value = categories.value?.[0].id ?? 0
    return
  }
  for (let i = 0; i < heights.value.length; i++) {
    totalTop += heights.value[i]
    if (totalTop < scrollTop) {
      continue
    }
    currentCategoryId.value = categories.value?.[i + 1].id ?? 1
    break
  }
})

const treeFilter = <T extends { links: any[] }>(tree: T[], fn: (item: T) => boolean): T[] => {
  const list = tree.map((item) => {
    return {
      ...item,
      links: item.links.filter(fn),
    }
  })
  return list.filter((item) => Boolean(item.links?.length))
}

const onClickSearch = () => {
  const value = keyword.value.toLowerCase()
  currentCategoryId.value = 0
  if (!value) {
    categories.value = categoryData.value?.filter((i) => i.links.length) ?? []
    cachedKeyword.value = value
    return
  }
  const list = treeFilter(categoryData.value ?? [], (item) => {
    const hasName = item.name.toLowerCase().includes(value)
    const hasDesc = item.description?.toLowerCase().includes(value) ?? false
    return hasName || hasDesc
  })
  categories.value = list
  cachedKeyword.value = value
}
</script>

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
