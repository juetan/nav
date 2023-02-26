import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { presetIcons, presetUno } from "unocss";
import unocss from "unocss/vite";
import autoImport from "unplugin-auto-import/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import autoComponent from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import page from "vite-plugin-pages";
import layout from "vite-plugin-vue-layouts";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@app",
        replacement: "src",
      },
    ],
  },
  plugins: [
    vue(),
    vueJsx(),
    autoImport({
      imports: ["vue", "vue-router"],
      resolvers: [ArcoResolver()],
      dts: "./src/types/auto-import.d.ts",
    }),
    autoComponent({
      resolvers: [ArcoResolver({ sideEffect: true })],
      dts: "./src/types/auto-component.d.ts",
    }),
    page(),
    layout(),
    unocss({
      presets: [
        presetUno(),
        presetIcons({
          prefix: "",
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
            width: "16px",
            height: "16px",
          },
        }),
      ],
    }),
  ],
});
