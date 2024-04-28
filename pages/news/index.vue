<template>
  <div class="mx-2 bg-white">
    <h1
      class="mb-8 mt-16 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      News From Ute Valley Park
    </h1>
    <div
      class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <UiCard
        v-for="post in publishedNewsEntries"
        :key="post.title"
        :title="post.title"
        :image="post.coverImage"
        :href="post._path"
        :published-on="post.publishedOn" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: publishedNewsEntries } = await useAsyncData("news", () =>
  queryContent("news")
    .sort({ publishedOn: -1 })
    .where({ published: true })
    .only(["title", "publishedOn", "coverImage", "_path"])
    .find(),
);
</script>
