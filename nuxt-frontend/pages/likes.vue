<script setup lang="ts">
const config = useRuntimeConfig()

const seoTitle = () => 'Keyruu likes this'
const seoDesc = () => 'Keyruu likes a lot of different things. Find out what he likes here. ' +
    'This has tech prefences but also general stuff he likes. For example Spezi, Design, Svelte, Vue, Rust and Spezi.'
const seoImage = () => '/ogImages/likes.png';

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  ogImage: seoImage,
  ogUrl: () => `${config.public.siteUrl}/likes`,
  twitterTitle: seoTitle,
  twitterDescription: seoDesc,
  twitterImage: seoImage,
});
</script>

<template>
  <main>
    <div class="h-36 w-full"></div>
    <ILike/>
    <FullStack/>
  </main>
</template>

<style scoped>
</style>
