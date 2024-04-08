import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
const colors = require('tailwindcss/colors')

export default <Partial<Config>>{
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      green: colors.green,
      red: colors.red,
      teal: colors.teal,
    },
  },
  darkMode: [],
  content: {
    files: [
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/data/table.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/accordion.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/avatarGroup.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/badge.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/buttonGroup.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/kbd.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/meter.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/meterGroup.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/progress.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/checkbox.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/radioGroup.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/radio.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/toggle.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/range.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/layout/card.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/layout/container.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/layout/divider.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/layout/skeleton.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/breadcrumb.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/commandPalette.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/pagination.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/verticalNavigation.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/contextMenu.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/modal.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/notification.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/notifications.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/popover.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/slideover.mjs'),
      '!' + resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/tooltip.mjs')
    ]
  }
}
