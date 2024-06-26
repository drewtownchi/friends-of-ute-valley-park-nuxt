<template>
  <div class="relative mt-16 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto mb-6 max-w-prose text-lg">
      <h1
        class="mb-8 mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        About Friends of Ute Valley Park
      </h1>
      <NuxtPicture
        :img-attrs="{ class: 'mx-auto block h-64 w-auto mb-6' }"
        src="img/logos/logo-medium.jpg"
        width="256"
        height="256"
        sizes="128 md:256"
        alt="Friends of Ute Valley logo" />
      <div class="prose lg:prose-xl">
        <p>
          Friends of Ute Valley Park (FUVP) is an officially recognized “Friends” organization by the city of Colorado
          Springs Parks, Recreation, and Cultural Services Department. Our mission is to maintain, preserve, and provide
          education for Ute Valley Park (UVP).
        </p>

        <p>
          <a
            href="https://coloradosprings.gov/sites/default/files/parks_recreation_and_cultural_services/parks/15.03.12_ute_mmp.pdf"
            >Click here</a
          >
          to view the Ute Valley Park Master Plan developed by the City of Colorado Springs.
        </p>

        <p>
          In 2012, The City Parks Department learned that the Hewlett-Packard Company was willing to sell 205 acres of
          its property in Rockrimmon adjacent to the existing 345 acre UVP. The City of Colorado Springs was hoping to
          purchase the additional 205 acres through the Trails, Open Spaces, and Parks fund (TOPS). Having a “Friends”
          group in place would be a way in which the community could be seen as having a stake in the purchase process.
          Thus, FUVP was organized in 2012 with its first meeting of the board taking place in early 2013. With the
          cooperation of FUVP, the Trust for Public Land, and TOPS the City was able to purchase the property in
          2014-15. FUVP raised $110,000 in 3-1/2 months toward the purchase.
        </p>

        <p>
          In March 2015 the City adopted a Master & Management Plan for UVP. The Plan represents a cooperative agreement
          between the community and the City. This community-created plan guides our efforts in UVP. For several years
          now, we have conducted trail maintenance twice a month on the first and third Wednesdays. Besides scheduled
          maintenance, we have conducted special maintenance and cleanup projects. We continue to look for innovative
          ways in which we can serve UVP.
        </p>

        <p>
          Since our formation, support for our efforts in maintaining the entire 550 acres of park land, has been both
          passionate and overwhelming. This passion and support is because people love the beauty and serenity that UVP
          provides as well as the many recreational opportunities such as walking, hiking, running and biking.
        </p>

        <p>Over the years, FUVP has won numerous awards and recognition for our efforts to fulfill our mission.</p>

        <p>
          FUVP is currently a committee fiscally sponsored by the Trails and Open Spaces Coalition (TOSC). Not only does
          this arrangement help keep our costs for operation down, but it also allows us to operate under TOSC's
          501(C)(3) non-profit status.
        </p>

        <p>
          We are a local community organization who are volunteering our time to be good stewards of the land for the
          benefit of the entire community and the entire Pikes Peak region.
        </p>

        <p>
          We need your support as we work to take care of our park. Help us now by <a href="/donate/">donating</a>. See
          the <a href="/volunteer/">Volunteer</a> page for upcoming fundraisers and volunteer opportunities.
        </p>
      </div>
    </div>
    <TeamList />
    <OldPhotos />

    <div class="mt-8">
      <h2
        class="mb-8 mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        1983 Colorado Front Range Inactive Coal Mine Data (El Paso County)
      </h2>
      <NuxtPicture src="img/maps/colorado-land-survey-preview.jpg" />
      <div class="mt-1 text-center text-sm text-gray-600">
        <a href="/img/maps/colorado-springs-coal-mine-survey.pdf"> Download (14.8 mb) </a>
      </div>
      <LeaveNoTraceSmall />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About",
});
</script>
