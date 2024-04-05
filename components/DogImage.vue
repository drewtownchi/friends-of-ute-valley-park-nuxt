<template>
  <a :href="'https://instagram.com/' + name">
    <NuxtPicture :src="'img/dogs/' + name + '.jpg'"
                 alt=""
                 width="176"
                 height="256"
                 sizes="90 md:180"
                 :img-attrs="{ class: 'h-full w-full object-cover object-center' }" />
    <p
      class="absolute bottom-0 left-0 bg-gray-900/30 px-2 py-1 text-xs text-gray-50">
      @{{ name }}</p>
  </a>
</template>

<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>