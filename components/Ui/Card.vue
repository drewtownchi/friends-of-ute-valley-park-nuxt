<template>
  <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
    <NuxtPicture :src="image"
                 width="380"
                 height="460"
                 sizes="200px md:400px"
                 alt=""
                 :img-attrs="{class: 'absolute inset-0 -z-10 h-full w-full object-cover'}" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
    <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

    <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
      <time datetime="{publishedOn.toString()}"
            class="mr-8">{{ new Intl.DateTimeFormat('en-US').format(new Date(publishedOn)) }}</time>
    </div>
    <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
      <NuxtLink :to="href">
        <span class="absolute inset-0" />
        {{ title }}
      </NuxtLink>
    </h3>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string | undefined;
  image: string;
  href: string | undefined;
  publishedOn: string;
}>();

</script>