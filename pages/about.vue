<template>
  <div class="mt-4">
    使用 NuxtJS 构建，包含前端+后端，免费开源的导航网站。

    <section>
      <h2>技术</h2>
      <ul class="space-y-1">
        <li><a-link>NuxtJs</a-link>基于 VueJS 的全栈式框架</li>
        <li><a-link>Vite</a-link> 快速的打包工具</li>
        <li><a-link>@arco-design/web-vue</a-link> 字节跳动的 Vue 组件库</li>
        <li><a-link>unocss</a-link>提供按需加载的CSS原子类和CSS图标</li>
        <li><a-link>prisma</a-link>数据库ORM库</li>
        <li><a-link>lodash</a-link>函数工具库</li>
        <li><a-link>dayjs</a-link>日期工具库</li>
        <li><a-link>@vercel/analytics</a-link>访问统计埋点</li>
      </ul>
    </section>
    <section>
      <h2>功能</h2>
      <ul>
        <li>
          <p>对搜索引擎友好</p>
          <div>
            <img src="@/assets/Snipaste_2024-04-04_12-22-16.png" alt="preview" class="max-w-[680px] rounded" />
          </div>
        </li>
        <li>
          <p>自带后台管理功能</p>
          <div>
            <img
              src="@/assets/localhost_3000_admin_link.png"
              alt="preview"
              class="max-w-[680px] rounded border border-solid border-gray-300"
            />
          </div>
        </li>
        <li>
          <p>适配移动端和桌面端</p>
          <div>
            <img src="@/assets/pexels-photo-196661.png" alt="preview" class="max-w-[680px] rounded" />
          </div>
        </li>
        <li>
          <p>支持暗色和亮色主题</p>
          <div>
            <img src="@/assets/2978_iMac_5K_copy.png" alt="preview" class="max-w-[680px] rounded" />
          </div>
        </li>
      </ul>
    </section>

    <section>
      <h2>部署</h2>
      <div>
        Vercel 是一个部署平台，除了常规的静态web应用部署外，还支持 Severless 函数部署并提供 256 MB 的 Postgres
        数据库。基于此，你可以免费部署一个属于你自己的导航网站。
      </div>
    </section>

    <section class="mb-6">
      <h2>最后</h2>
      <div>如果你有什么疑问或想法，欢迎在 Issue 中参与。</div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutPage',
})
useHead({ title: '关于' })
</script>

<style scoped></style>
