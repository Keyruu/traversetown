<script setup lang="ts">
import type {ReleasesType} from "~/composables/nocodb-types";

const props = defineProps({
  initialSong: {
    type: String,
    required: false,
  },
})

const config = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch<ReleasesType>(`${config.public.nocodbUrl}/api/v1/releases`);

const initialSlide = computed(() => {
  if (props.initialSong === 'newest-song') {
    return 0
  }
  if (props.initialSong && data.value?.list) {
    const index = data.value.list
        .findIndex((release) => release.songtitle
            .replace(/ /g,'') === props.initialSong);
    if (index !== -1) {
      return index
    }
  }
  return 0
})
const route = useRoute()

if (route.path.startsWith('/music')) {
  const currentSong = data.value?.list[initialSlide.value];
  const seoTitle = () => `Keyruu - ${currentSong?.songtitle}`;
  const seoDesc = () => `Check out ${currentSong?.songtitle}! ` +
    `Made by ${currentSong?.artists}. Find apple music, spotify and youtube links here.`;
  const seoImage = () => `${config.public.nocodbUrl}/${currentSong?.cover[0].path}`;

  useSeoMeta({
    ogType: 'music.song',
    title: seoTitle,
    ogTitle: seoTitle,
    twitterTitle: seoTitle,
    description: seoDesc,
    ogDescription: seoDesc,
    twitterDescription: seoDesc,
    ogImage: seoImage,
    twitterImage: seoImage,
    ogUrl: () => `https://keyruu.de/music/${currentSong?.songtitle.replace(/ /g,'')}`,
  })
}
</script>

<template>
  <div class="md:text-6xl text-4xl z-10 flex mb-10 justify-center items-center">
    <p
        class="font-semibold my-text
          hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600
          hover:bg-clip-text hover:text-transparent"
    >
      my&nbsp;
    </p>
    <p class="font-extralight">music:</p>
  </div>
  <div v-if="!error && data">
    <Releases :releases="data.list" :initialSlide="initialSlide"/>
  </div>
</template>

<style scoped>
.my-text {
  transition: transform 0.5s ease;
}
</style>
