import { defineConfig, presetIcons, presetUno } from 'unocss'
import { icons } from './utils/icon'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': '-2px',
      },
    }),
  ],
  safelist: icons,
})
