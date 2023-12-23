<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {register} from 'swiper/element/bundle';
import Atropos from "atropos";

register()
gsap.registerPlugin(ScrollTrigger);

// if (process.client) {
//   if (!customElements.get('atropos-component')) {
//     import('atropos/element').then(({AtroposComponent}) => {
//       customElements.define('atropos-component', AtroposComponent);
//     });
//   }
// }

const { setCoords } = useCursorStore()
</script>
<template>
  <div ref="el" class="cursor-none overflow-x-hidden" @pointermove="setCoords">
    <Cursor/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
