<template>
  <div class="flex gap-6">
    <div class="w-60 space-y-3">
      <div>
        <CategoryModal></CategoryModal>
      </div>
      <ul v-if="!categoryLoading" class="space-y-1.5">
        <li
          v-for="item in categories"
          :key="item.id"
          class="flex items-center justify-between group pl-3 h-8 text-gray-500 rounded hover:bg-gray-100 dark-hover:bg-[var(--color-secondary)]! cursor-pointer"
          :class="{ 'bg-blue-100! dark:bg-[var(--color-secondary)]! text-blue-500!': currentCategoryId == item.id }"
          @click="onClickCategory(item)"
        >
          <span>
            <i :class="item.icon" class="text-base mr-1"></i>
            <span>{{ item.name }} </span>
          </span>
          <span class="group-hover:hidden mr-3">{{ (item as any).links.length }}</span>
          <span class="hidden group-hover:block">
            <a-link @click.stop="onUpdateCategory(item)">
              <template #icon>
                <i class="i-icon-park-outline-edit"></i>
              </template>
            </a-link>
            <a-link status="danger" @click.stop="onDeleteCategory(item)">
              <template #icon>
                <i class="i-icon-park-outline-delete"></i>
              </template>
            </a-link>
          </span>
        </li>
      </ul>
      <a-skeleton-line v-else :rows="16"></a-skeleton-line>
    </div>
    <div class="flex-1">
      <LinkTable></LinkTable>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import type { Category } from '@prisma/client';
import { useFormModal, useTable } from 'arconify';

defineOptions({
  name: 'AdminLinkPage',
})

definePageMeta({
  title: '链接管理',
})

useHead({
  title: '链接管理',
})

const LinkTable = useTable({
  async data(params) {
    const data = await $fetch('/api/links', { query: params })
    return data as any
  },
  columns: [
    {
      title: '名字',
      dataIndex: 'name',
      render({ record }) {
        return (
          <div class="flex gap-4 items-center">
            <img src={getSiteIconUrl(record.icon)} alt="icon" width={36} loading='lazy' />
            <div>
              <span class="text-base!">{record.name}</span>
              <div class="text-slate-400">{record.description}</div>
            </div>
          </div>
        )
      },
    },
    {
      title: '',
      dataIndex: 'createdAt',
      width: 140,
      render: (props) => (
        <span class="text-gray-400" title={props.record.createdAt}>
          添加于 {dayjs(props.record.createdAt).fromNow()}
        </span>
      ),
    },
    {
      title: '操作',
      type: 'button',
      width: 160,
      buttons: [
        {
          text: '删除',
          type: 'delete',
          onClick(params) {
            return $fetch(`/api/links/${params.record.id}`, { method: 'delete' })
          },
        },
      ],
    },
  ],
  paging: {
    hide: () => Boolean(currentCategoryId.value),
  },
  search: [
    {
      label: '分类',
      field: 'categoryId',
      setter: 'select',
      visible: () => false,
    },
    {
      label: '网站名字',
      field: 'name',
      setter: 'search',
    },
  ],
  create: {
    items: [
      {
        label: '地址',
        field: 'url',
      },
      {
        label: '名字',
        field: 'name',
      },
      {
        label: '图标',
        field: 'icon',
      },
      {
        label: '分类',
        field: 'categoryId',
        setter: 'select',
        async options() {
          const categories = await $fetch<Category[]>('/api/categories')
          return categories.map(({ id, name }) => ({ label: name, value: id }))
        },
      },
      {
        label: '描述',
        field: 'description',
        setter: 'textarea',
      },
    ],
    submit(model) {
      return $fetch('/api/links', { method: 'POST', body: model })
    },
  },
  modify: {
    extend: true,
    submit(model) {
      return $fetch(`/api/links/${model.id}`, { method: 'put', body: model })
    },
  },
})

const CategoryModal = useFormModal({
  trigger: {
    text: '新增分类',
    buttonProps: {
      long: true,
      type: 'outline'
    },
  },
  items: [
    // {
    //   label: "父级分类",
    //   field: "parentId",
    //   setter: "select",
    //   async options() {
    //     const categories = await $fetch<Category[]>("/api/categories");
    //     return categories.map(({ id, name }) => ({ label: name, value: id }));
    //   },
    // },
    {
      label: '名字',
      field: 'name',
    },
    {
      label: '图标',
      field: 'icon',
      setter: 'select',
      options: icons.map((name) => ({ label: name, value: name })),
      setterSlots: {
        option(props: any) {
          return (
            <div class="w-full flex items-center justify-between gap-4">
              <span class={`text-base ${props.data?.label}`}></span>
              <span class="text-gray-400">{props.data?.label}</span>
            </div>
          )
        },
        label(props: any) {
          return <span class={`text-base ${props.data?.label}`}></span>
        },
      },
    },
    {
      label: '描述',
      field: 'description',
      setter: 'textarea',
    },
  ],
  async submit(model) {
    let url = '/api/categories'
    let method: 'POST' | 'PUT' = 'POST'
    let successMsg = '新增分类成功'
    if (model.id) {
      url = `/api/categories/${model.id}`
      method = 'PUT'
      successMsg = '修改分类成功'
    }
    await $fetch(url, { method, body: model })
    Message.success(successMsg)
    loadCategories()
  },
})

const categories = ref<Category[]>([])
const currentCategoryId = ref(0)
const categoryLoading = ref(false)

const loadCategories = async () => {
  categoryLoading.value = true
  try {
    categories.value = await $fetch<Category[]>('/api/categories')
  } catch {
    Message.error('获取分类失败')
  }
  categoryLoading.value = false
}

const onClickCategory = (item: Category) => {
  const search = LinkTable.tableRef.value?.search?.model
  if (currentCategoryId.value === item.id) {
    currentCategoryId.value = 0
    search!.categoryId = undefined
    LinkTable.reload()
    return
  }
  currentCategoryId.value = item.id
  search!.categoryId = item.id
  LinkTable.reload()
}

const onUpdateCategory = (item: Category) => {
  console.log(item)
  CategoryModal.open(item)
}

const onDeleteCategory = async (item: Category) => {
  Modal.open({
    title: '提示',
    titleAlign: 'start',
    width: 432,
    content: '删除分类会删除其所拥有的链接，确定这样做吗？',
    maskClosable: false,
    closable: false,
    okText: '确定删除',
    okButtonProps: {
      status: 'danger',
    },
    async onBeforeOk() {
      try {
        await $fetch(`/api/categories/${item.id}`, { method: 'delete' })
        Message.success('删除分类成功')
        loadCategories()
      } catch {
        Message.error('删除分类失败')
      }
    },
  })
}

onMounted(loadCategories)
</script>

<style scoped></style>
