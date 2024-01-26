import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      preflight: true,
    }),
    presetIcons({
      prefix: "",
      extraProperties: {
        display: "inline-block",
        "vertical-align": "-2px",
      },
    }),
  ],
  rules: [
    [
      "flex-between",
      {
        display: "flex",
        alignItems: "center",
        contentJustify: "space-between",
        gap: "8px",
      },
    ],
  ],
});
