<template>
  <div>
    <a
      href="#main-content"
      class="sr-only bg-white text-black underline focus:not-sr-only">Skip to main content</a>
    <div class="min-h-screen bg-white">
      <VolunteerBanner />
      <AppHeader />

      <div id="main-content">
        <main>
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <slot />
          </div>
        </main>
      </div>
      <AppFooter />
    </div>
  </div>
</template>