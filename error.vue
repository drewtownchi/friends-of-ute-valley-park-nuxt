<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <NuxtLayout>
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 mt-2">
      <div class="text-center">
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ error.statusCode }}
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="/"
                    class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            Go back home
          </NuxtLink>
          <NuxtLink to="/contact/"
                    class="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>