<template>
  <div v-if="hasUpcomingVolunteerEvent" class="mb-2">
    <div
      class="relative isolate flex items-center gap-x-6 overflow-hidden bg-teal-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <svg
        viewBox="0 0 577 310"
        aria-hidden="true"
        class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
        <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
      </svg>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-balance">
        <p class="text-sm text-white">
          <Icon name="heroicons:megaphone" class="mr-2 inline-block h-6 w-6 text-white" />
          <strong class="font-semibold">Upcoming Volunteer Event {{ eventDates }}!</strong>
        </p>
        <UiChip size="lg" color="red">
          <UiButton
            to="/volunteer/"
            class="ml-8 sm:ml-0 flex-none rounded-full bg-green-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
            Learn more
            <Icon aria-hidden="true" name="heroicons:arrow-right" />
          </UiButton>
        </UiChip>
      </div>
      <div class="flex flex-1 justify-end" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { data: events } = await useAsyncData("home", () =>
  queryContent("events")
    .where({ date: { $gt: new Date() } })
    .find(),
);

const hasUpcomingVolunteerEvent = computed(() => {
  return events.value && events.value?.length > 0;
});

const eventDates = computed(() => {
  if (events.value === undefined || events.value === null) {
    return;
  }

  let dateString = "day" + (events.value.length > 1 ? "s" : "") + " on ";

  dateString += [...events.value]
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .map((item) => {
      return new Intl.DateTimeFormat("en-US").format(new Date(item.date));
    })
    .join(" and ");
  return dateString;
});
</script>
