<script setup lang="ts">
const { setNavShow } = useNavStore()

setNavShow(true)

const config = useRuntimeConfig()

const seoTitle = () => 'Keyruu is about this'
const seoDesc = () => 'Keyruu is a full stack developer / devops engineer and musician from Germany. ' +
  'He also loves design and smart home. Find out more about him here and how to reach him.';
const seoImage = () => '/ogImages/index.png';

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  ogImage: seoImage,
  ogUrl: () => `${config.public.siteUrl}/about`,
  twitterTitle: seoTitle,
  twitterDescription: seoDesc,
  twitterImage: seoImage,
});
</script>

<template>
  <main>
    <div class="text-center flex flex-col justify-center text-xl h-[94vh] m-10">
      <h1 class="">Hi! I'm Lucas aka <strong>Keyruu</strong>!</h1>
      <p>I'm a full stack developer / devops engineer and musician from Germany. I also love design and smart home.</p>
      <p>I love to expirement with different web development stacks and implement them in hobby projects.</p>
      <p>This website is a demo of the stack and for implementing fun little features I think of.</p>
      <p>It's also a place for me to share my music and other stuff I like.</p>
      <p>Feel free to contact me via <a class="text-blue-700 hover:underline" href="mailto:me@keyruu.de"
          target="_blank">email</a>.</p>
      <p><br />This site does not need an Imprint, because it is a purely personal site without any commercial purpose.
      </p>
    </div>
  </main>
</template>

<style scoped></style>
