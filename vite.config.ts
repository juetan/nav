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
  base: "./",
  resolve: {
    alias: [
      {
        find: "@app",
        replacement: "src",
      },
    ],
  },
  server: {
    port: 8000,
    open: true,
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
        presetUno({ preflight: true }),
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
