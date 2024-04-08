// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    name: 'Friends Of Ute Valley Park',
    url: 'https://friendsofutevalleypark.com'
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-headlessui',
    '@vueuse/nuxt',
    '@nuxt/content',
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-lazy-hydrate",
  ],
  image: {
    format: ['avif', 'webp'],
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append'
      }
    },
    componentIslands: true,
  },
  colorMode: {
    preference: 'light'
  }
})