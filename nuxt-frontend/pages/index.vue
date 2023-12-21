<script setup lang="ts">
let { result } = useSubscription(SubscribeSpotifyTrackDocument)

let { focus, reset, spotify } = useCursorStore()

const likes = [
  { name: "DevOps" },
  { name: "Music" },
  { name: "Design" },
  { name: "Gaming" },
  { name: "Frontend" },
  { name: "Backend" },
  { name: "Spezi" },
];
const likes2 = [
  { name: "Spezi" },
  { name: "Backend" },
  { name: "DevOps" },
  { name: "Design" },
  { name: "Gaming" },
  { name: "Music" },
  { name: "Frontend" },
];

const res = await fetch("https://keyruu.de/api/v1/releases");
const releases = (await res.json()).list;
</script>

<template>
  <Cursor />
  <div class="text-amber-800" @mouseover="spotify" @mouseleave="reset">
    TESTTESTTESTTESTTESTTESTTESTTESTTESTTEST
    <img class="mix-blend-difference" src="/keyruu_logo.png">
  </div>
  Test: {{ result?.subSpotifyTrack?.trackName }}
</template>
