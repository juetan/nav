declare module 'vue-router' {
  interface PageMeta {
    /**
     * 页面标题
     */
    title: string
    /**
     * 页面图标
     * @description 使用 unocss 中 presetIcons 支持的图标名称
     */
    icon: string
  }
}

export {}
