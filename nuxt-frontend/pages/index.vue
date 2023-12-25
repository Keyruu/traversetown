<script setup lang="ts">
import gsap from "gsap";
import ILike from "~/components/ILike.vue";

const {focus, reset, spotify} = useCursorStore()
const img = useImage()
const mainGradient = img('/gradient/main-gradient.png',
    {width: 2880, height: 1280})

let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context((self) => {
    const logo = self.selector!('.logo')
    const nav = self.selector!('nav')
    const foggySea = self.selector!('.foggy-sea')

    const scrollTrigger = {
      trigger: foggySea,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    };

    gsap.fromTo(logo, {
      y: '40vh',
      scale: 2,
    }, {
      y: 0,
      scale: 1,
      scrollTrigger
    });

    gsap.fromTo(nav, {
      visibility: 'hidden',
    }, {
      visibility: 'visible',
      scrollTrigger: {
        ...scrollTrigger,
        start: 'top +=200',
      }
    });
  }, 'body'); // <- Scope!

});

onUnmounted(() => {
  if (ctx) ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <main>
    <div
        :class="`w-full h-screen bg-no-repeat bg-cover
        flex justify-center items-center flex-col`"
        :style="`background-image: url('${mainGradient}')`">
      <UIcon name="i-mdi-arrow-down" class="h-10 w-10 sticky text-white mt-auto mb-8"/>
    </div>
    <ILike/>
    <div class="fullstack mb-20">
      <section
          id="devops"
          class="flex sm:flex-row flex-col justify-center items-center text-center w-full"
      >
        <FullStack/>
      </section>
    </div>
    <section id="music" class="mb-20 flex flex-col items-center">
      <MyMusic/>
    </section>
    <section id="haveilistenedto" class="bg-neutral">
      <HaveIListenedTo/>
    </section>
    <section id="spotify-activity">
      <SpotifyActivity/>
    </section>
  </main>
</template>

<style scoped>
</style>
