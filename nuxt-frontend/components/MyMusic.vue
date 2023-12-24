<script setup lang="ts">
const res = await fetch("https://keyruu.de/api/v1/releases");

const releases = (await res.json()).list;
</script>

<template>
  <div class="md:text-6xl text-4xl z-10 flex mb-10">
    <p
        class="font-semibold my-text
          hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600
          hover:bg-clip-text hover:text-transparent"
    >
      my&nbsp;
    </p>
    <p class="font-extralight">music:</p>
  </div>
  <Releases :releases="releases"/>
</template>

<style scoped>
.my-text {
  transition: transform 0.5s ease;
}
</style>
