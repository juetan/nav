<template>
  <div class="w-[480px] mt-8 mx-auto">
    <div>
      <h2 class="m-0 font-normal">初始设置</h2>
      <p class="mt-2 text-gray-500">欢迎来到这里，请完成初始设置。</p>
    </div>
    <SetupForm></SetupForm>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'arconify'

defineOptions({
  name: 'SetupPage',
})

definePageMeta({
  middleware: ['setup'],
})

useHead({
  title: '初始设置',
})

const router = useRouter()

const SetupForm = useForm({
  items: [
    {
      label: '站点名称',
      field: 'title',
      value: '我的站点',
    },
    {
      label: '站点图标',
      field: 'logoUrl',
      value: '/favicon.svg',
    },
    {
      label: '管理员昵称',
      field: 'nickname',
    },
    {
      label: '管理员账号',
      field: 'username',
      required: true,
    },
    {
      label: '管理员密码',
      field: 'password',
      setter: 'password',
      required: true,
    },
  ],
  async submit(model) {
    await $fetch('/api/setup', { method: 'POST', body: model })
    Message.success('安装成功')
    router.push('/admin')
  },
})
</script>

<style scoped></style>
