export const useTheme = () => {
  const dark = useState<'dark' | 'light' | 'system'>('theme_mode', () => 'dark')
  const toggle = () => {
    dark.value = dark.value === 'dark' ? 'light' : 'dark'
    if (!import.meta.client) {
      return
    }
    if (dark.value === 'dark') {
      document.documentElement.classList.add('dark')
      document.body.setAttribute('arco-theme', 'dark')
      return
    }
    document.documentElement.classList.remove('dark')
    document.body.removeAttribute('arco-theme')
  }
  return {
    toggle,
  }
}
