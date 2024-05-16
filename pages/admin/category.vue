<template>
  <CategoryTable></CategoryTable>
</template>

<script lang="tsx" setup>
import type { Category } from '@prisma/client';
import { useTable } from 'arconify';

defineOptions({
  name: 'AdminCategoryPage',
})

useHead({
  title: '分类管理',
})

const CategoryTable = useTable({
  async data(params) {
    const data = await $fetch<Category[]>('/api/categories')
    return data
  },
  columns: [
    {
      title: '分类名称',
      dataIndex: 'name',
      render({ record }) {
        return (
          <div class="flex gap-2">
            <div class="w-6 flex items-center text-base">
              <span class={record.icon}></span>
            </div>
            <div class="flex-1">
              <div>{record.name}</div>
              <div class="text-gray-400 text-xs">{record.description}</div>
            </div>
          </div>
        )
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      width: 200,
      render: (props) => dayjs(props.record.createdAt).fromNow(),
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
  search: [
    {
      label: '网站名字',
      field: 'name',
      setter: 'search',
    },
  ],
  create: {
    items: [
      {
        label: "父级分类",
        field: "parentId",
        setter: "select",
        async options() {
          const categories = await $fetch<Category[]>("/api/categories");
          return categories.map(({ id, name }) => ({ label: name, value: id }));
        },
      },
      {
        label: '名字',
        field: 'name',
      },
      {
        label: '名字',
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
    submit(model) {
      return $fetch('/api/categories', { method: 'POST', body: model })
    },
  },
  modify: {
    extend: true,
    submit(model) {
      return $fetch(`/api/categories/${model.id}`, {
        method: 'PUT',
        body: model,
      })
    },
  },
})
</script>

<style scoped></style>
