<template>
  <LinkTable></LinkTable>
</template>

<script lang="tsx" setup>
import type { Category } from '@prisma/client';
import { useTable } from 'arconify';
import dayjs from 'dayjs';

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
            <a-avatar shape="square" size={36}>
              <img src={record.icon} />
            </a-avatar>
            <div>
              <span class="text-base!">{record.name}</span>
              <div class="text-gray-400">{record.description}</div>
            </div>
          </div>
        )
      },
    },
    {
      title: '添加时间',
      dataIndex: 'createdAt',
      width: 200,
      render: (props) => dayjs(props.record.createdAt).format('YYYY-MM-DD HH:mm'),
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
      label: '分类',
      field: 'categoryId',
      setter: 'select',
      async options() {
        const categories = await $fetch<Category[]>('/api/categories')
        return categories.map(({ id, name }) => ({ label: name, value: id }))
      },
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
</script>

<style scoped></style>
