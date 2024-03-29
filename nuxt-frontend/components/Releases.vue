<script setup lang="ts">
import type {Release} from "~/composables/nocodb-types";

const props = defineProps({
  releases: {
    type: Array as () => Release[],
    required: true,
  },
  initialSlide: {
    type: Number,
    default: 0,
  },
})

let slideIndex = ref(props.initialSlide);

const config = useRuntimeConfig()
const route = useRoute()

function onSlideChange(event: CustomEvent) {
  slideIndex.value = event.detail[0].activeIndex;
  if(route.path.startsWith('/music/')) {
    history.pushState({},'', `/music/${props.releases[slideIndex.value].songtitle.replace(/ /g,'')}`)
  }
}

function extractImageURL(cover: any) {
  return `${config.public.nocodbUrl}/${cover[0].path}`;
}
</script>

<template>
  <div class="text-gray-600 body-font my-auto overflow-hidden">
    <div class="w-full mx-auto flex flex-col px-5 justify-center items-center">
      <div class="custom-swiper flex items-center justify-center mb-10">
        <swiper-container
            navigation="true"
            pagination="true"
            effect="coverflow"
            centered-slides=true
            slides-per-view="auto"
            :initial-slide="initialSlide"
            :coverflow-effect="`{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            }`"
            @swiperslidechange="onSlideChange"
            class="h-full"
        >
          <swiper-slide
              v-for="(release, index) in releases"
              class="flex items-center justify-center">
            <Cover :image="extractImageURL(release.cover)"/>
          </swiper-slide>
        </swiper-container>
      </div>
      <div
          :style="`background: ${releases[slideIndex].primary_color}`"
          class="h-full px-4 overflow-hidden text-center relative py-0.5"
      >
        <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900">
          <strong>{{ releases[slideIndex].songtitle }}</strong> —
          {{ releases[slideIndex].artists }}
        </h1>
      </div>
      <div class="flex">
        <IconLink
            icon="i-mdi-spotify"
            margin="m-8"
            :width="16"
            :height="16"
            :link="releases[slideIndex].spotify"
            :highlightColor="releases[slideIndex].primary_color"
        />
        <IconLink
            icon="i-mdi-apple"
            margin="m-8"
            :width="16"
            :height="16"
            :link="releases[slideIndex].spotify"
            :highlightColor="releases[slideIndex].primary_color"
        />
        <IconLink
            icon="i-mdi-youtube"
            margin="m-8"
            :width="16"
            :height="16"
            :link="releases[slideIndex].spotify"
            :highlightColor="releases[slideIndex].primary_color"
        />
      </div>
    </div>
  </div>
</template>
