<script setup lang="ts">
import gsap from "gsap";
import ILike from "~/components/ILike.vue";

let {result} = useSubscription(SubscribeSpotifyTrackDocument)

let {focus, reset, spotify} = useCursorStore()

const res = await fetch("https://keyruu.de/api/v1/releases");

const releases = (await res.json()).list;

let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const logo = self.selector!('.logo')
    const nav = self.selector!('nav')
    const foggySea = self.selector!('.foggy-sea')

    const scrollTrigger =  {
          trigger: foggySea,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        };

    gsap.to(logo, {
      y: 0,
      scale: 1,
      scrollTrigger
    });

    gsap.to(nav, {
      visibility: 'visible',
      scrollTrigger: {
        ...scrollTrigger,
        start: 'top +=200',
      }
    });
  }, 'body'); // <- Scope!
});

onUnmounted(() => {
  ctx!.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <main>
    <div class="logo-container flex justify-center items-center flex-col">
      <UIcon name="i-mdi-arrow-down" class="h-10 w-10 sticky text-white mt-auto mb-8"/>
    </div>
    <ILike />
    <div class="fullstack">
      <section
          id="devops"
          class="h-[1000px] sm:mb-0 mb-20 flex sm:flex-row flex-col justify-center items-center text-center w-full"
      >

        <FullStack />
      </section>
      <section id="keyruu" class="mb-20 flex flex-col items-center">
        <div class="md:text-6xl text-4xl z-10 flex">
          <p
              class="font-semibold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 hover:bg-clip-text hover:text-transparent"
          >
            my&nbsp;
          </p>
          <p class="font-extralight">music:</p>
        </div>
        <Releases :releases="releases"/>
      </section>
    </div>
    <section id="haveilistenedto" class="bg-neutral mb-24">
      <!--        <HaveIListenedTo client:visible />-->
    </section>
    <!--      <SpotifyActivity client:visible />-->
  </main>
</template>

<style>
.logo-container {
  background-image: url("/gradient/main-gradient.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

@media (min-width: 640px) {
  .logo-container {
    background-image: url("/gradient/main-gradient.png");
  }
}

.different-font {
  font-family: "Montagu Slab", serif;
  font-weight: 300;
}



.placeholder {
  width: 100%;
  height: 120vh;
}


</style>
