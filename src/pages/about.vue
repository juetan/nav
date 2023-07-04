<template>
  <div class="w-full px-5 py-4">
    <a-card title="关于本站">
      分享关于前端的内容。
      <div class="mt-4 flex gap-2">
        链接：
        <a-link>
          <template #icon>
            <i class="icon-park-outline-github"></i>
          </template>
          Github
        </a-link>
        <a-link>
          <template #icon>
            <i class="icon-park-outline-link-one"></i>
          </template>
          绝弹博客
        </a-link>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts"></script>

<route lang="json">
{
  "meta": {
    "title": "关于",
    "icon": "icon-park-outline-info"
  }
}
</route>

<style scoped></style>
