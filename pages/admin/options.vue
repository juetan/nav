<template>
  <div>
    <div class="mb-4">
      <h2 class="m-0 text-base font-normal text-lg">网站设置</h2>
      <p class="text-gray-500 mt-1">设置站点信息。</p>
    </div>
    <OptionsForm v-if="OptionsForm.model.title"></OptionsForm>
    <a-skeleton-line v-else :rows="9"></a-skeleton-line>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'arconify';
import { onMounted } from 'vue';

defineOptions({
  name: 'AdminOptionsPage',
})

definePageMeta({
  title: '网站设置',
})

useHead({
  title: '网站设置',
})

const OptionsForm = useForm({
  formProps: {
    class: 'w-[432px]!',
  },
  items: [
    {
      field: 'title',
      label: '站点标题',
    },
    {
      field: 'logoUrl',
      label: '图标地址',
    },
    {
      field: 'description',
      label: '站点描述',
      setter: 'textarea',
    },
  ],
  async submit(model) {
    await $fetch('/api/options', { method: 'put', body: model })
    Message.success('更新成功')
  },
})

onMounted(async () => {
  const res = await $fetch('/api/options')
  for (const [key, value] of Object.entries(res)) {
    OptionsForm.model[key] = value
  }
})
</script>

<style scoped></style>
