<template>
  <ContentDoc v-slot="{ doc }">
    <div class="py-10">
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="relative overflow-hidden bg-white py-16">
            <div class="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
              <div class="relative mx-auto h-full max-w-prose text-lg">
                <svg
                  class="absolute left-full top-12 translate-x-32 transform"
                  width="404"
                  height="384"
                  fill="none"
                  viewBox="0 0 404 384">
                  <defs>
                    <pattern
                      id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                </svg>
                <svg
                  class="absolute right-full top-1/2 -translate-x-32 -translate-y-1/2 transform"
                  width="404"
                  height="384"
                  fill="none"
                  viewBox="0 0 404 384">
                  <defs>
                    <pattern
                      id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg>
                <svg
                  class="absolute bottom-12 left-full translate-x-32 transform"
                  width="404"
                  height="384"
                  fill="none"
                  viewBox="0 0 404 384">
                  <defs>
                    <pattern
                      id="d3eb07ae-5182-43e6-857d-35c643af9034"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                </svg>
              </div>
            </div>
            <div class="relative px-4 sm:px-6 lg:px-8">
              <div class="mx-auto mb-6 max-w-prose text-lg">
                <h1
                  class="mb-8 mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                  {{ doc.title }}
                </h1>
                <NuxtPicture
                  width="600"
                  height="384"
                  :img-attrs="{ class: 'h-96 w-full rounded-lg object-cover shadow-lg' }"
                  sizes="300px md:600"
                  :src="doc.coverImage"
                  alt="" />
                <div class="mt-4 flex text-sm leading-5 text-gray-500">
                  <time datetime="{doc.publishedOn.toString()}">
                    {{ new Intl.DateTimeFormat("en-US").format(new Date(doc.publishedOn)) }}
                  </time>
                </div>
                <div class="prose lg:prose-xl">
                  <ContentRenderer :value="doc" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </ContentDoc>
</template>
