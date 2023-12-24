<script setup lang="ts">
import ColorThief from "colorthief";

const props = defineProps<{
  spotifyTrack: SpotifyTrack;
}>();

function getProgress(progressMs: number, durationMs: number): number {
  return (progressMs / durationMs) * 100;
}

const progress = ref(0)
const durationMs = ref(0);
const progressMs = ref(0);
const isTooDark = ref(false);

watch(() => props.spotifyTrack, (newSpotifyTrack) => {
  progressMs.value = newSpotifyTrack.progressMs!;
  durationMs.value = newSpotifyTrack.durationMs!;
  progress.value = getProgress(progressMs.value, durationMs.value);
})

const img = ref<HTMLImageElement | null>(null);
const dominantColor = ref<any | null>(null);
const rgbString = ref<string | null>(null)
const imgLoaded = ref(false);

onMounted(() => {
  if (img.value) {
    img.value.onload = () => {
      imgLoaded.value = true;
      dominantColor.value = new ColorThief().getColor(img.value);
      rgbString.value = `rgb(${dominantColor.value[0]},${dominantColor.value[1]},${dominantColor.value[2]})`;
      isTooDark.value = dominantColor.value[0] + dominantColor.value[1] + dominantColor.value[2] < 150;
    };
  }
})

const coverTranslateX = ref(0);
const coverTranslateY = ref(0);
const coverScale = ref(1)
let textTranslateY = ref(0)

function coverMouseMoved(event: MouseEvent) {
  const target = event.currentTarget as Element;
  const rect = target.getBoundingClientRect(),
      x = event.clientX - rect.x,
      y = event.clientY - rect.y;
  coverTranslateX.value = (x - target.clientWidth / 2) / 90;
  coverTranslateY.value = (y - target.clientHeight / 2) / 90;
}

const {spotify, reset} = useCursorStore();
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <a
        class="w-auto container cover cursor-pointer"
        @mouseenter="() => {
      spotify()
      coverScale = 1.1;
      textTranslateY = 30;
    }"
        @mouseleave="() => {
      reset();
      coverScale = 1;
      textTranslateY = 0;
      coverTranslateX = 0;
      coverTranslateY = 0;
    }"
        @mousemove="coverMouseMoved"
        :href="spotifyTrack.songLink"
        target="_blank"
        rel="noreferrer"
        :style="`
          translate: ${coverTranslateX}px ${coverTranslateY}px;
          transform: scale(${coverScale});
        `"
    >
      <div
          v-if="spotifyTrack.isPlaying === false"
          class="content z-10 m-auto text-black opacity-60"
      >
        <UIcon name="i-mdi-pause" class="w-[300px] h-[300px]"/>
      </div>
      <div
          v-else
          class="w-full h-1.5 bg-neutral opacity-80 z-10 content mt-auto rounded-b-lg"
      >
        <div
            class="h-1.5 rounded-bl-lg bg-slate-100 song-progress"
            :style="`width: ${progress}%;`"
        />
      </div>
      <div v-if="imgLoaded === false" class="rounded-lg cover content bg-gray-400">Content</div>
      <img
          ref="img"
          crossorigin="anonymous"
          class="rounded-lg shadow-lg cover content"
          :src="spotifyTrack.coverUrl"
          alt="albumCover"
      />
      <div
          v-if="spotifyTrack.isPlaying"
          class="content cover rounded-lg"
          :style="`box-shadow: 0 0 50px 15px ${rgbString};`"
      />
    </a>
    <div
        :style="`background: ${rgbString}; transform: translateY(${textTranslateY}px);`"
        class="h-full px-4 overflow-hidden text-center relative mt-8 py-0.5 font-extrabold song-info"
    >
      <div
          :class="`title-font sm:text-4xl text-3xl font-medium flex ${
        isTooDark ? 'text-slate-300' : 'text-gray-900'
      }`"
      >
        <p class="font-semibold">{{ spotifyTrack.trackName }}</p>
        &nbsp;—&nbsp;
        <p class="font-light">{{ spotifyTrack.artistName }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.cover {
  max-height: 37vh;
  max-width: 37vh;
  transition: translate 0.1s ease, transform 0.3s ease-in-out;
}

.song-info {
  transition: transform 0.3s ease;
}

.song-progress {
  transition: width 5s linear;
}

.container {
  display: grid;
}

.content,
.overlay {
  grid-area: 1 / 1;
}
</style>
