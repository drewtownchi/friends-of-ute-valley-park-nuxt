<template>
  <div class="my-8 rounded bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Leave No Trace
          </h2>
          <p class="text-xl text-gray-600">
            Ute Valley Park proudly supports the Leave No Trace Seven Principles. Please help keep the park safe and clean for all visitors by following the principles.
          </p>
          <p class="mt-3 max-w-3xl text-lg text-green-700">
            Please read and always obey the
            <a
              href="/rules/"
              class="inline-block font-bold text-green-800 underline"
            > rules</a>
            of Ute Valley Park.
          </p>
          <div class="mt-8 sm:flex">
            <div class="mx-auto w-64 rounded-md bg-white p-8 shadow focus-within:ring-2 focus-within:ring-green-100">
              <a href="https://www.lnt.org">
                <NuxtPicture
                  class="h-auto w-64"
                  src="/img/logos/leave-no-trace.jpg"
                  alt="Leave No Trace logo"
                  width="192"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="lg:col-span-2">
          <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
            <li
              v-for="principle in principles"
              :key="principle.name"
            >
              <div class="space-y-4">
                <div class="aspect-h-2 aspect-w-3">
                  <NuxtPicture
                    :src="principle.image"
                    width="360"
                    sizes="360"
                    class="rounded-lg object-cover shadow-lg"
                    :alt="principle.altText"
                    loading="lazy"
                  />
                </div>
                <div class="text-lg font-medium leading-6">
                  <h3 class="text-green-700">
                    {{ principle.name }}
                  </h3>
                </div>
                <div class="text-lg">
                  <p
                    class="text-gray-600"
                    v-html="principle.text"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const principles = [
  {
    name: 'Plan Ahead & Prepare',
    text: 'A little preparation goes a long way! Checking the forecast, planning your route, and reviewing the Rules and Regulations will help prepare you for your Ute Valley Park adventure.',
    image: 'img/lnt/plan-ahead-and-prepare.jpg',
    altText: 'A lone tree in Ute Valley Park',
  },
  {
    name: 'Travel on Durable Surfaces',
    text: '<a class="text-green-700 underline" href="/leavenotrace/travel-on-durable-surfaces/">Stay on designated trails</a> to minimize soil erosion and preserve Ute Valley Park\'s natural features. Muddy trails? Hike right through them! And please respect Natural Preservation Area closures.',
    image: 'img/lnt/travel-on-durable-surfaces.jpg',
    altText: 'Ute Valley Park trail',
  },
  {
    name: 'Dispose of Waste Properly',
    text: 'Please pack out all trash items, including bagged <a class="text-green-700 underline" href="/leavenotrace/dogs/">dog waste</a>, or place it into trash cans before leaving the park. This keeps Ute Valley Park looking (and smelling) bea-UTE-iful!',
    image: 'img/lnt/dispose-of-waste-properly.jpg',
    altText: 'Rubbish in the dirt',
  },
  {
    name: 'Leave What You Find',
    text: 'From flowers to frog eggs, Ute Valley Park is full of fascinating features! <a class="text-green-700 underline" href="/leavenotrace/leave-what-you-find/">Remember to take pictures</a> of these fun finds and leave them where they are for other park users to discover.',
    image: 'img/lnt/leave-what-you-find.jpg',
    altText: 'Flowers',
  },
  {
    name: 'Respect Wildlife',
    text: 'Ute Valley Park provides essential habitat for a <a class="text-green-700 underline" href="/leavenotrace/respect-wildlife/">variety of animals</a>. Please observe all wildlife from safe distances and never feed them. Keeping your pet on a leash protects everyone who uses, and lives in, the park.',
    image: 'img/lnt/respect-wildlife.jpg',
    altText: 'A deer in Ute Valley Park',
  },
  {
    name: 'Be Considerate of Other Visitors',
    text: 'Practice recreational empathy! Enhance the experience of other park visitors by sharing the trail. Cyclists should always ride in control. Hikers, be mindful of the Downhill Bike Area trails.',
    image: 'img/lnt/be-considerate-of-other-visitors.jpg',
    altText: 'Hikers walking on snow in the park',
  },
];
</script>