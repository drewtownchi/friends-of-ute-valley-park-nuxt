<template>
  <div>
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <NuxtPicture
        src="img/volunteer/volunteer-hero-mask.jpg"
        alt=""
        :img-attrs="{ class: 'absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center' }"
        width="1500" />

      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true">
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          " />
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          " />
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p class="mt-6 text-lg leading-8 text-gray-200">
            Join our dedicated team of volunteers and make a lasting impact on the park you love. Together, we'll
            maintain trails, connect with fellow nature enthusiasts, and give back to this cherished community resource.
          </p>
        </div>
      </div>
    </div>

    <div>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2
          v-if="upcomingVolunteerEvents.length > 0"
          class="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
          Upcoming volunteer events
        </h2>
        <div class="px-4 py-5">
          <ul class="divide-y divide-gray-100">
            <VolunteerListItem
              v-for="volunteerEvent in upcomingVolunteerEvents"
              :key="volunteerEvent.date"
              :volunteer-event="volunteerEvent"
              :meeting-locations="meetingLocations" />
          </ul>
        </div>

        <div class="mt-8 border-b border-gray-200 pb-5 pt-4">
          <h3 class="text-3xl font-medium leading-6 text-green-900">
            Learn More About Volunteering in Ute Valley Park
          </h3>
        </div>
        <div class="border-gray-200 pt-8 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <NuxtPicture
              src="img/volunteer/volunteer-3.jpg"
              :img-attrs="{ class: 'rounded-lg object-cover shadow' }"
              alt="" />
          </div>
          <div class="col-span-2">
            <ul class="ml-4 list-disc divide-y divide-gray-200 text-gray-700">
              <li class="py-3">
                <span class="font-bold">Volunteer days:</span> the 1st and 3rd Wednesday of every month, 5:30-7:30 p.m.
                April through September.
              </li>
              <li class="py-3">
                Crew leaders may schedule additional volunteer days. Please check our website, the FUVP
                <a
                  href="https://www.facebook.com/FriendsOfUteValleyPark/"
                  class="font-semibold text-green-700 no-underline"
                  >Facebook
                </a>
                page or register for our newsletter below for additional volunteer opportunities, meeting locations and
                updates.
              </li>
              <li class="py-3">
                Volunteer and get a free beverage, stickers and buttons! After 4 hours of volunteer work you will
                receive a free beverage (beer or non-alcoholic) at our end of year appreciation party.
              </li>
              <li class="py-3">All tools provided.</li>
              <li class="py-3 font-semibold">
                You must wear pants and closed toed shoes and please bring gloves and safety goggles or sunglasses.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-16">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div class="max-w-xl text-2xl font-bold text-gray-900 sm:text-4xl lg:col-span-6">
          <h2 class="inline tracking-tight sm:block lg:inline xl:block">Get Notified!</h2>
          <p class="inline text-base font-normal sm:block lg:inline xl:block">
            Sign up for our newsletter to receive volunteer events right in your inbox.
          </p>
        </div>
        <div class="w-full md:max-w-xl lg:col-span-6 lg:max-w-md lg:pt-2">
          <EmailForm />
        </div>
      </div>
    </div>

    <LeaveNoTraceSmall />

    <ContactForm default-option="Volunteer">
      <slot name="title">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Contact us for more information!
        </h2>
      </slot>
      <slot name="subtitle">
        <p class="mt-3 text-lg leading-7 text-gray-600">
          We'd love to hear from you! Whether you have questions about volunteering or just want to share your thoughts
          on Ute Valley Park, feel free to get in touch.
        </p>
      </slot>
    </ContactForm>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Volunteer",
});

const { data: upcomingVolunteerEvents } = await useAsyncData("volunteer-events", () =>
  queryContent("events")
    .sort({ date: 1 })
    .where({ date: { $gte: new Date() } })
    .find(),
);

const { data: meetingLocations } = await useAsyncData("meeting-locations", () => queryContent("trailheads").find());
</script>
