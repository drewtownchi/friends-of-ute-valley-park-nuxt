// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    name: "Friends Of Ute Valley Park",
    url: "https://friendsofutevalleypark.com",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "radix-vue/nuxt",
    "nuxt-headlessui",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@unocss/nuxt",
    "nuxt-icon",
  ],
  image: {
    format: ["avif", "webp"],
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: "append",
      },
    },
    componentIslands: true,
  },
  css: ["@unocss/reset/tailwind.css"],
});
