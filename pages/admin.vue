<template>
  <div class="grid grid-rows-[auto_1fr]">
    <header class="flex items-center justify-between gap-4 border-b border-slate-200">
      <a-menu
        mode="horizontal"
        :default-selected-keys="[route.path]"
        @menu-item-click="onMenuItemClick"
        class="an-menu flex-1"
      >
        <a-menu-item v-for="menu in menus" :key="menu.path">
          <template #icon>
            <i :class="menu.icon"></i>
          </template>
          {{ menu.title }}
        </a-menu-item>
      </a-menu>
      <div v-if="user" class="text-gray-600">
        <span class="text-gray-400">用户：</span>{{ user.nickname }}
        <span class="text-gray-300 mx-2">|</span>
        <a-link status="danger" @click="onClickLogout">
          <template #icon>
            <i class="i-icon-park-outline-power"></i>
          </template>
          退出
        </a-link>
      </div>
    </header>
    <section class="mt-4">
      <NuxtPage></NuxtPage>
    </section>
  </div>
</template>

<script lang="tsx" setup>
defineOptions({
  name: 'AdminPage',
})

definePageMeta({
  title: '管理后台',
  middleware: ['auth'],
})

const route = useRoute()
const router = useRouter()
const user = useUser()

const onClickLogout = async () => {
  const loading = Message.loading('正在退出')
  try {
    await $fetch('/api/auth/logout', { method: 'DELETE' })
    navigateTo({
      path: '/login',
      query: { redirect: route.path },
    })
  } catch (error: unknown) {
    Message.error((error as Error).message)
  }
  loading.close()
}

useHead({
  title: route.matched.map((item) => item.meta.title).join(' - '),
})

const menus = [
  {
    title: '概览',
    icon: 'i-icon-park-outline-home',
    path: '/admin',
  },
  // {
  //   title: '分类管理',
  //   icon: 'i-icon-park-outline-folder-close',
  //   path: '/admin/category',
  // },
  {
    title: '链接管理',
    icon: 'i-icon-park-outline-sphere',
    path: '/admin/link',
  },
  {
    title: '网站设置',
    icon: 'i-icon-park-outline-config',
    path: '/admin/options',
  },
]

const onMenuItemClick = (key: string) => {
  router.push(key)
}
</script>

<style lang="less">
.an-menu {
  .arco-menu-inner {
    padding: 8px 0;
  }
  .arco-menu-item:nth-child(2) {
    margin-left: 0 !important;
  }
  .arco-menu-selected-label {
    display: none;
  }
  .arco-menu-selected {
    background-color: rgb(var(--primary-2)) !important;
  }
  .arco-menu-icon {
    margin-right: 0 !important;
  }
}
</style>
