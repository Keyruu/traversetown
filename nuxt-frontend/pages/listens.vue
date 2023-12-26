<script setup lang="ts">
const config = useRuntimeConfig()

const seoTitle = () => 'Keyruu listens to this'
const seoDesc = () => 'Keyruu likes a whole range of different music. For example metal, rap, pop, hyperpop, rock and more. ' +
    'Find out what he listens to here. You can either check how often he listened to an artist or checkout his spotify activity.';
const seoImage = () => '/ogImages/listens.png';

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  ogImage: seoImage,
  ogUrl: () => `${config.public.siteUrl}/listens`,
  twitterTitle: seoTitle,
  twitterDescription: seoDesc,
  twitterImage: seoImage,
});
</script>

<template>
  <main class="flex flex-col justify-center items-center w-full">
    <div class="h-36 w-full"></div>
    <div class="flex justify-center flex-col w-full">
      <HaveIListenedTo/>
      <SpotifyActivity/>
    </div>
  </main>
</template>

<style scoped>
</style>
