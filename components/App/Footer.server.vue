<template>
  <div class="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
      <div v-for="item in footerItems" :key="item.name" class="px-5 py-2">
        <a
          :href="item.link"
          class="text-base text-gray-500 hover:text-green-800 hover:underline focus:text-green-800 focus:underline focus:outline-none">
          {{ item.name }}
        </a>
      </div>
    </nav>
    <div class="mt-8 flex justify-center space-x-6">
      <SocialLinks />
    </div>
    <p class="mt-8 text-center text-base text-gray-600">&copy; 2024 Friend of Ute Valley Park. All rights reserved.</p>
    <p class="mt-2 text-center text-base text-gray-600">
      A fiscally sponsored fund of the Trails and Open Space Coalition, a 501(c)(3) organization. Contributions are tax
      deductible to the extent allowed by law.
    </p>
  </div>
</template>

<script setup lang="ts">
const footerItems = [
  { name: "About", link: "/about/" },
  { name: "News", link: "/news/" },
  { name: "Volunteer", link: "/volunteer/" },
  { name: "FAQ", link: "/faq/" },
  { name: "Privacy", link: "/privacy/" },
  { name: "Donate", link: "/donate/" },
  { name: "Rules", link: "/rules/" },
  { name: "Assets", link: "/assets/" },
  { name: "Sitemap", link: "/sitemap.xml" },
];
</script>
