<template>
  <NuxtLink class="mt-2 flex items-center text-lg text-green-700 underline sm:mt-0"
            :to="locationInformation.directionsLink">
    <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 20 20"
         fill="currentColor"
         aria-hidden="true">
      <path fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd" />
    </svg>
    {{ locationInformation.name }}
  </NuxtLink>
</template>

<script setup lang="ts">

import type { MeetingLocation, VolunteerEvent } from '~/types';

const props = defineProps<{
  volunteerEvent: VolunteerEvent;
}>();

const {data: meetingLocations} = await useAsyncData('meeting-locations', () => queryContent<MeetingLocation>('trailheads').find())
console.log(props.volunteerEvent, meetingLocations.value ?? [])
const locationInformation = meetingLocationParser(props.volunteerEvent, meetingLocations.value ?? []);
</script>