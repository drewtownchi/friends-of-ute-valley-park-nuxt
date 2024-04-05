<template>
  <div>
    <h2 class="mb-8 mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      Old Photos from Ute Valley Park
    </h2>
    <div class="grid gap-3 md:grid-cols-3">
      <NuxtImg width="376"
               height="250"
               src="img/old-ute-valley-park-photos/old-ute-1.jpg" />
      <NuxtImg width="376"
               height="250"
               src="img/old-ute-valley-park-photos/old-ute-2.jpg" />
      <NuxtImg width="376"
               height="250"
               src="img/old-ute-valley-park-photos/old-ute-3.jpg" />
      <NuxtImg width="376"
               height="250"
               src="img/old-ute-valley-park-photos/old-ute-4.jpg" />
      <NuxtImg width="376"
               height="250"
               src="img/old-ute-valley-park-photos/old-ute-5.jpg" />
      <NuxtImg width="376"
               height="250"
               src="img/old-ute-valley-park-photos/old-ute-6.jpg" />
    </div>
    <div v-if="!viewMore">
      <button class="my-2 ml-1 rounded px-2 py-1 text-base text-green-900 underline"
              @click="viewMore = true">
        View More
        <Icon name="heroicons:chevron-down"
              class="ml-1 inline-block h-6 w-6" />
      </button>
    </div>
    <div v-else>
      <div class="mt-3 grid gap-3 md:grid-cols-3">
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-7.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-8.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-9.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-10.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-11.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-12.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-13.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-14.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-15.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-16.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-17.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-18.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-19.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-20.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-21.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-22.jpg" />
        <NuxtImg width="376"
                 height="250"
                 src="img/old-ute-valley-park-photos/old-ute-23.jpg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const viewMore = ref(false);
</script>
