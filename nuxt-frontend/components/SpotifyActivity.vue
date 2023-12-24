<script setup lang="ts">
const img = useImage()
const backgroundImg = img('/gradient/subtle-gradient2.png',
    {width: 2880, height: 1280})

let {result} = useSubscription(SubscribeSpotifyTrackDocument)

let spotifyWeight = ref(400)
</script>

<template>
  <section
      id="music"
      :class="`py-24 flex bg-[url('${backgroundImg}')] bg-no-repeat bg-cover
      items-center flex-col`"
      :style="`background-image: url('${backgroundImg}')`"
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

<style scoped>
.spotify {
  transition: all 0.2s ease-in-out;
}
</style>
