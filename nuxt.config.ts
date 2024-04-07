// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-headlessui',
    '@vueuse/nuxt',
    '@nuxt/content',
    "@nuxt/image",
    "@nuxtjs/sitemap",
  ],
  image: {
    format: ['avif', 'webp'],
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append'
      }
    }
  },
  colorMode: {
    preference: 'light'
  }
})