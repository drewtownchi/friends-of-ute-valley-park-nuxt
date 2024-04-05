<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-12 text-center sm:px-6 lg:px-8">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl">
            Get to Know Our Team
          </h2>
          <p class="text-lg leading-7 text-gray-500">
            Meet the dedicated team of Friends of Ute Valley Park, who work hard to preserve the natural beauty of this cherished community resource and make it enjoyable for everyone.
          </p>
        </div>
        <ul class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12">
          <li v-for="teamMember in teamMembers"
              :key="teamMember.name">
            <div class="space-y-4">
              <NuxtPicture v-if="teamMember.image !== ''"
                           :img-attrs="{class: 'mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24'}"
                           :src="teamMember.image"
                           sizes="60px md:120px"
                           alt="" />
              <Icon v-else
                    name="heroicons:user-circle"
                    class="mx-auto h-20 w-20 text-green-800 lg:h-24 lg:w-24" />

              <div class="space-y-2">
                <div class="text-xs font-medium leading-4 lg:text-sm lg:leading-5">
                  <h4>{{ teamMember.name }}</h4>
                  <p class="text-green-700">
                    {{ teamMember.title }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const teamMembers = [
  { name: 'Drew Town', title: 'Chair', image: 'img/members/drew-town.png' },
  { name: 'Christine Thomas', title: 'Vice-Chair', image: 'img/members/christine-thomas.jpg' },
  { name: 'Megan Town', title: 'Treasurer', image: 'img/members/megan-town.jpg' },
  { name: 'Molly Murrow', title: 'Secretary', image: 'img/members/molly-murrow.jpg' },
  { name: 'Phill Emmert', title: 'Communications', image: 'img/members/phill-emmert.jpg' },
  { name: 'Frank Self', title: 'Committee Member', image: 'img/members/frank-self.jpg' },
];
</script>