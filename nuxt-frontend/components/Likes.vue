<script setup lang="ts">
import gsap from "gsap";
import Context = gsap.Context;

const props = defineProps<{
  likes: any[],
  leftToRight: boolean
}>();

const doubleLikes = [...props.likes, ...props.likes]

</script>

<template>
  <div
      :class="`personal-text  w-full flex ${leftToRight
    ? 'left-to-right -translate-x-full'
    : 'right-to-left'}`"
  >

    <p
        v-for="(like, i) in doubleLikes"
        :class="`font-bold lg:text-7xl md:text-7xl text-4xl uppercase hover:-translate-y-4 transition duration-200 ease-out ${i %
        2 ===
      0
        ? 'font-light'
        : ''}`"
    >
      {{ like.name }}
    </p>
  </div>
</template>

<style scoped>
</style>
