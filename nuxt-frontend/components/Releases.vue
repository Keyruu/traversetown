<script setup lang="ts">
import { register } from 'swiper/element/bundle';
register()

let slideIndex = 0;
export let releases: any[];

function onSlideChange(event: CustomEvent) {
  slideIndex = event.detail[0].activeIndex;
}

function extractImageURL(cover: any) {
  return `${import.meta.env.PUBLIC_NOCODB_URL}/${cover[0].path}`;
}
</script>

<template>
  <div class="text-gray-600 body-font my-auto overflow-hidden">
    <div class="w-full mx-auto flex flex-col px-5 justify-center items-center">
      <div class="custom-swiper flex items-center justify-center">
        <swiper-container
            navigation="true"
            pagination="true"
            effect={"coverflow"}
            centered-slides={true}
            slides-per-view={"auto"}
            coverflow-effect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            }}
            on:slidechange={onSlideChange}
            class="h-full"
        >
          {#each releases as release}
          <swiper-slide class="flex items-center justify-center">
            Cover
          </swiper-slide>
          {/each}
        </swiper-container>
      </div>
      <div
          :style="`background: ${releases[slideIndex].primary_color}`"
          class="h-full px-4 overflow-hidden text-center relative py-0.5"
      >
        <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900">
          <strong>{releases[slideIndex].songtitle}</strong> —
          {releases[slideIndex].artists}
        </h1>
      </div>
      <div class="flex">
        <UIcon
            icon="i-mdi-spotify"
            margin="m-8"
            width={50}
            height={50}
            link={releases[slideIndex].spotify}
            highlightColor={releases[slideIndex].primary_color}
            on:customMouseEnter={doubleMouse}
            on:customMouseLeave={resetMouse}
        />
        <UIcon
            icon="i-mdi-apple"
            margin="m-8"
            width={50}
            height={50}
            link={releases[slideIndex].apple}
            highlightColor={releases[slideIndex].primary_color}
            on:customMouseEnter={doubleMouse}
            on:customMouseLeave={resetMouse}
        />
        <UIcon
            icon="i-mdi-youtube"
            margin="m-8"
            width={50}
            height={50}
            link={releases[slideIndex].youtube}
            highlightColor={releases[slideIndex].primary_color}
            on:customMouseEnter={doubleMouse}
            on:customMouseLeave={resetMouse}
        />
      </div>
    </div>
  </div>
</template>
