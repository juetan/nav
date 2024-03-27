<template>
  <div class="mx-auto pt-60 w-[360px]!">
    <div>
      <h2 class="login-title">登陆</h2>
      <p class="text-gray-500 mt-2.5">您尚未登陆，请使用账号和密码登陆后再继续。</p>
    </div>
    <a-form :model="model" :rules="formRules" ref="formRef" layout="vertical" class="mt-6">
      <a-form-item field="username" label="账号" :disabled="loading" hide-asterisk>
        <a-input v-model="model.username" placeholder="例如：admin" allow-clear>
          <template #prefix>
            <i class="i-icon-park-outline-user" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item field="password" label="密码" :disabled="loading" hide-asterisk>
        <a-input-password v-model="model.password" placeholder="例如：123456" allow-clear>
          <template #prefix>
            <i class="i-icon-park-outline-lock" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item hide-label>
        <div class="w-full">
          <div class="flex items-center justify-between">
            <!-- <a-checkbox checked="rememberPassword" :disabled="loading">记住我</a-checkbox> -->
            <a-link @click="onForgetPassword">忘记密码?</a-link>
          </div>
          <a-button type="primary" html-type="submit" long class="mt-2" :loading="loading" @click="onSubmitForm">
            {{ loading ? '登陆中' : '立即登录' }}
          </a-button>
          <p type="text" long class="text-gray-400 text-center m-4">暂不支持其他方式登录</p>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import type { FieldRule } from '@arco-design/web-vue';
import { Form, Message } from '@arco-design/web-vue';
import type { User } from '@prisma/client';
import type { H3Error } from 'h3';

defineOptions({
  name: 'LoginPage',
})

useHead({
  title: '登陆',
})

const model = reactive({ username: 'juetan', password: 'juetan' })
const route = useRoute()
const router = useRouter()
const user = useUser()
const loading = ref(false)
const formRef = ref<InstanceType<typeof Form>>()

const formRules: Record<string, FieldRule[]> = {
  username: [
    {
      required: true,
      message: '账号必填',
    },
  ],
  password: [
    {
      required: true,
      message: '密码必填',
    },
  ],
}

const onForgetPassword = () => {
  Message.info('如已忘记密码，请联系管理员进行密码重置!')
}

const onSubmitForm = async () => {
  if (await formRef.value?.validate()) {
    return
  }
  loading.value = true
  try {
    const res = await $fetch<User>('/api/auth/login', { method: 'POST', body: model })
    user.value = res
    Message.success(`登陆成功!`)
    router.push({ path: (route.query.redirect as string) || '/admin' })
  } catch (error: unknown) {
    Message.warning(`提示：${(error as H3Error).message}`)
  }
  loading.value = false
}
</script>

<style scoped>
.login-box {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
}
.login-title {
  font-weight: 400;
  font-size: 22px;
  margin: 0;
}
</style>
