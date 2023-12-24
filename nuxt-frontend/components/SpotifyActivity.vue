<script setup lang="ts">
let {result} = useSubscription(SubscribeSpotifyTrackDocument)

let spotifyWeight = ref(400)
</script>

<template>
  <section
      id="music"
      class="lg:h-[1000px] md:h-[800px] sm:h-[600px] sm:mb-0 pt-24 mb-20 h-[600px] flex
  items-center flex-col now-playing-layout activity"
  >
    <div class="md:text-6xl text-4xl z-10 sm:mb-24 mb-16 flex">
      <p class="font-extralight">my&nbsp;</p>
      <p
          class="hover:text-green-600 md:w-56 w-32 text-center align-middle spotify"
          :style="`font-weight: ${spotifyWeight};`"
          @mouseenter="() => spotifyWeight = 700"
          @mouseleave="() => spotifyWeight = 400"
      >
        spotify&nbsp;
      </p>
      <p class="font-extralight">activity:</p>
    </div>
    <p v-if="result?.subSpotifyTrack?.trackName == null">
      Waiting for song...
    </p>
    <div v-else>
      <CurrentTrack :spotifyTrack="result?.subSpotifyTrack"/>
    </div>
  </section>
</template>

<style>
.spotify {
  transition: all 0.2s ease-in-out;
}

.activity {
  background-image: url("/gradient/subtle-gradient2.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
