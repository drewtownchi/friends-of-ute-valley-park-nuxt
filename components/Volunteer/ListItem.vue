<template>
  <li class="my-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap">
    <div>
      <p class="text-sm font-semibold leading-6 text-green-800">
        <a :href="'/events/' + volunteerEvent.slug"
           class="hover:underline">{{ volunteerEvent.title }}</a>
      </p>
      <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
        <p>
          <time :datetime="formattedDate + ' ' + volunteerEvent.time">{{ formattedDate }} {{ volunteerEvent.time }}</time>
        </p>
        <svg viewBox="0 0 2 2"
             class="h-0.5 w-0.5 fill-current">
          <circle cx="1"
                  cy="1"
                  r="1" />
        </svg>
        <p>
          <a :href="directionsLink"
             class="text-green-800 underline">{{ meetingLocation }}</a>
        </p>
        <svg v-if="volunteerEvent.meetingLocation.notes"
             viewBox="0 0 2 2"
             class="h-0.5 w-0.5 fill-current">
          <circle cx="1"
                  cy="1"
                  r="1" />
        </svg>
        <p v-if="volunteerEvent.meetingLocation.notes"
           :title="volunteerEvent.meetingLocation.notes"
           class="mx-2 max-w-xs overflow-hidden truncate overflow-ellipsis text-sm text-gray-500">
          {{ volunteerEvent.meetingLocation.notes }}
        </p>
      </div>
    </div>
    <div class="flex w-full flex-none justify-between gap-x-4 sm:w-auto">
      <div class="flex h-12">
        <a :href="volunteerEvent.link"
           class="inline-flex items-center rounded-md border border-transparent bg-green-600 px-2 py-1 text-sm font-medium text-green-50 shadow-sm transition duration-150 ease-in-out hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
          Register
        </a>
      </div>
      <div class="flex h-12 gap-x-2.5">
        <a href="https://coloradosprings.gov/sites/default/files/inline-images/informed_consent_and_release_form-fillable.pdf"
           class="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-2 py-1 text-sm font-medium text-teal-50 shadow-sm transition duration-150 ease-in-out hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
          Consent and Release Form
        </a>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { VolunteerEvent, MeetingLocation } from '~/types';

const props = defineProps<{
  volunteerEvent: VolunteerEvent;
  meetingLocations: MeetingLocation[];
}>();

const {name: meetingLocation, directionsLink } = meetingLocationParser(props.volunteerEvent, props.meetingLocations)

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat('en-US').format(new Date(props.volunteerEvent.date));
});

</script>