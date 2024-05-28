import { defineConfig, presetAttributify, presetUno, presetTypography } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      /* preset options */
    }),
    presetTypography(),
  ],
});
