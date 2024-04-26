<template>
  <div class="relative min-h-screen mt-4 px-4 xl:px-0">
    <aside class="aside hidden lg:grid fixed grid-rows-[32px_auto] gap-2 overflow-hidden w-56 pb-4 z-9999">
      <a-input-search
        v-model="keyword"
        class="search-input"
        :placeholder="`搜索${categories?.length ?? 0}个分类的${total}条链接...`"
        :allow-clear="true"
        @clear="onClickSearch"
        @search="onClickSearch"
        @press-enter="onClickSearch"
      ></a-input-search>
      <ul v-if="categories?.length" class="category-list h-full overflow-auto space-y-1">
        <li
          v-for="(item, index) in categories"
          :key="item.id"
          ref="categoriesRef"
          class="flex items-center justify-between px-3 h-8 text-gray-500 rounded hover:bg-gray-100 dark-hover:bg-[var(--color-secondary)]! cursor-pointer"
          :class="{ 'bg-blue-100! dark:bg-[var(--color-secondary)]! text-blue-500!': currentCategoryId == item.id }"
          @click="onClickItem(item, index)"
        >
          <span>
            <i class="text-base mr-0" :class="item.icon ?? 'i-icon-park-outline-tag-one'"></i>
            {{ item.name }}
          </span>
          <span class="text-xs">{{ item.links.length }}</span>
        </li>
      </ul>
    </aside>
    <article class="pl-0 lg:pl-64 fade-in-bottom">
      <section v-for="category in categories" :key="category.id" ref="itemsRef" class="pb-6">
        <h2 class="text-slate-500 text-sm font-normal pb-3 m-0">
          <i class="mr-1 text-base" :class="category.icon ?? 'i-icon-park-outline-tag-one'"></i>
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

<script setup lang="ts">
import { OnScrollKey } from '@/utils/ref';

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
const categoriesRef = ref<HTMLElement[] | null>(null)
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

onScroll?.(async (e: Event) => {
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
  await nextTick();
  const index = categories.value?.findIndex(i => i.id === currentCategoryId.value);
  if(index === undefined || index < 0) {
    return
  }
  const categoryRef = categoriesRef.value?.[index]
  if(categoryRef) {
    categoryRef.scrollIntoView(false)
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

const onClickSearch = async () => {
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
  await nextTick()
  scrollbarRef?.value?.scrollTop(0)
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

.aside {
  height: calc(100% - 70px);
}

.category-list {
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    display: none;
  }
  &:hover::-webkit-scrollbar {
    opacity: 1;
  }
}
.category-list::-webkit-scrollbar-thumb {
  background-color: #eee;
}
.search-input :deep(.arco-input::placeholder) {
  font-size: 13px;
}
</style>
