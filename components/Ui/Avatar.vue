<template>
  <div>
    <AvatarRoot
      class="inline-flex h-20 w-20 select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarImage as-child :src="'/' + src">
        <NuxtImg
          width="80"
          height="80"
          format="webp"
          :src="src"
          :alt="alt"
          class="h-full w-full rounded-[inherit] object-cover" />
      </AvatarImage>

      <AvatarFallback
        class="text-green-700 leading-1 flex h-full w-full items-center justify-center bg-white font-medium"
        :delay-ms="600">
        {{ initials }}
      </AvatarFallback>
    </AvatarRoot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt: string;
}>();

const initials = computed(() =>
  props.alt
    .split(" ")
    .map((word) => word[0])
    .join(""),
);
</script>
