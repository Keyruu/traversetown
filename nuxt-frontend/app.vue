<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {register} from 'swiper/element/bundle';

register()
gsap.registerPlugin(ScrollTrigger);

const { setCoords } = useCursorStore()
</script>
<template>
  <div ref="el" class="cursor-none overflow-x-hidden" @pointermove="setCoords">
    <Cursor/>
    <NuxtLayout class="layout">
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
