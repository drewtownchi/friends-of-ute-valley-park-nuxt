// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-headlessui',
    '@vueuse/nuxt',
    '@nuxt/content',
    "@nuxt/image"
  ],
  image: {
    format: ['avif', 'webp'],
  }
})