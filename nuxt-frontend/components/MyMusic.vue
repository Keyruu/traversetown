<script setup lang="ts">
import type {ReleasesType} from "~/composables/nocodb-types";

const props = defineProps({
  initialSong: {
    type: String,
    required: false,
  },
})

const { data, pending, error, refresh } = await useFetch<ReleasesType>("https://keyruu.de/api/v1/releases");

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
  <Releases :releases="data.list" :initialSlide="initialSlide"/>
</template>

<style scoped>
.my-text {
  transition: transform 0.5s ease;
}
</style>
