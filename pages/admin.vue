<template>
  <div>
    <div class="max-w-[1180px] mx-auto px-6">
      <div class="mb-2">
        <a-button type="primary">
          <template>
            <i class="icon-park-outline-add"></i>
          </template>
          添加
        </a-button>
      </div>
      <a-table :columns="columns" :data="items"></a-table>
    </div>
  </div>
</template>

<script setup lang="tsx">
import type { TableColumnData } from "@arco-design/web-vue";
import { items } from '~/assets/api'

const columns: TableColumnData[] = [
  {
    title: "图标",
    dataIndex: "url",
    render: ({ record }) => <a-avatar src={record.logo} />
  },
  {
    title: "名称",
    dataIndex: "title",
  },
  {
    title: "描述",
    dataIndex: "description",
  },
  {
    title: "链接",
    dataIndex: "url",
  },
  {
    title: "标签",
    dataIndex: "tag",
    render: ({ record }) => record.tags?.join(',')
  },
  {
    title: "操作",
    dataIndex: "action",
    render: ({ record }) => {
      return (
        <>
          <a-link>
            删除
          </a-link>
        </>
      )
    }
  },
];
</script>

<style scoped></style>
