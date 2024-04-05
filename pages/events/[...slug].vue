<template>
  <ContentDoc v-slot="{doc}">
    <div class="relative mt-2 overflow-hidden bg-white py-16">
      <div class="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div class="relative mx-auto h-full max-w-prose text-lg">
          <svg class="absolute left-full top-12 translate-x-32 transform"
               width="404"
               height="384"
               fill="none"
               viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                       x="0"
                       y="0"
                       width="20"
                       height="20"
                       patternUnits="userSpaceOnUse">
                <rect x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404"
                  height="384"
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg class="absolute right-full top-1/2 -translate-x-32 -translate-y-1/2 transform"
               width="404"
               height="384"
               fill="none"
               viewBox="0 0 404 384">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                       x="0"
                       y="0"
                       width="20"
                       height="20"
                       patternUnits="userSpaceOnUse">
                <rect x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404"
                  height="384"
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg class="absolute bottom-12 left-full translate-x-32 transform"
               width="404"
               height="384"
               fill="none"
               viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034"
                       x="0"
                       y="0"
                       width="20"
                       height="20"
                       patternUnits="userSpaceOnUse">
                <rect x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404"
                  height="384"
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto mb-6 max-w-prose text-lg">
          <h1 class="mb-8 mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {{ doc.title }}
          </h1>
          <NuxtPicture loading="lazy"
                       class="h-96 w-full rounded-lg object-cover shadow-lg"
                       src="img/volunteer/volunteer.jpg"
                       alt="volunteers working in Ute Valley Park" />
          <div class="mt-6">
            <div>
              <VolunteerLocationLink :volunteer-event="doc" />
              <span v-if="doc.meetingLocation.notes"
                    class="ml-6 max-w-xs text-sm text-gray-500">{{ doc.meetingLocation.notes }}</span>
            </div>
            <div class="mt-2 flex items-center pt-2 text-gray-500 sm:mt-0">
              <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 20 20"
                   fill="currentColor"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd" />
              </svg>
              {{ new Intl.DateTimeFormat('en-US').format(new Date(doc.date)) }}&nbsp;
              {{ doc.time }}
            </div>
          </div>
          <div class="prose py-8 lg:prose-xl">
            <ContentRenderer :value="doc" />
          </div>
          <div class="mt-2 flex flex-shrink-0 sm:mt-0">
            <div v-if="doc.link">
              <p class="mb-3 font-semibold text-green-700">
                You must register to participate in this event.
              </p>
              <NuxtLink :to="doc.link"
                        class="mb-2 inline-flex items-center rounded-md border border-transparent bg-green-500 px-6 py-3 text-base font-medium text-green-50 shadow transition duration-150 ease-in-out hover:text-green-100 focus:outline-none focus:ring-2 focus:ring-green-300 md:my-0">
                Register
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContentDoc>
</template>