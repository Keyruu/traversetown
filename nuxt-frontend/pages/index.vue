<script setup lang="ts">
import gsap from "gsap";

let {result} = useSubscription(SubscribeSpotifyTrackDocument)

let {focus, reset, spotify} = useCursorStore()
const likes = [
  {name: "DevOps"},
  {name: "Music"},
  {name: "Design"},
  {name: "Gaming"},
  {name: "Frontend"},
  {name: "Backend"},
  {name: "Spezi"},
];

const likes2 = [
  {name: "Spezi"},
  {name: "Backend"},
  {name: "DevOps"},
  {name: "Design"},
  {name: "Gaming"},
  {name: "Music"},
  {name: "Frontend"},
];
const res = await fetch("https://keyruu.de/api/v1/releases");

const releases = (await res.json()).list;

const main = ref();
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const logo = self.selector('.logo')
    const nav = self.selector('nav')
    const foggySea = self.selector('.foggy-sea')

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
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <main ref="main">
    <div class="logo-container flex justify-center items-center flex-col">
      <UIcon name="i-mdi-arrow-down" class="h-10 w-10 sticky text-white mt-auto mb-8"/>
    </div>
    <div class="foggy-sea w-full mb-24 flex flex-col justify-center">
      <p
          class="mix-blend-difference lg:text-8xl md:text-6xl mb-8 font-thin w-full text-center text-4xl"
      >
        i like
      </p>
      <div class="likes">
        <div class="flex-row flex mix-blend-difference origin-bottom">
          <!--            <Likes client:visible likes={likes} />-->
        </div>
        <div
            class="flex-row flex mix-blend-difference origin-bottom"
        >
          <!--            <Likes leftToRight client:visible likes={likes2} />-->
        </div>
      </div>
    </div>
    <div class="fullstack">
      <section
          id="devops"
          class="h-[1000px] sm:mb-0 mb-20 flex sm:flex-row flex-col justify-center items-center text-center w-full"
      >
        <!--          <FullStack client:visible />-->
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

.fullstack {
  background-image: url("/gradient/subtle-gradient.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.placeholder {
  width: 100%;
  height: 120vh;
}

.foggy-sea {
  background-image: url("/foggy_sea.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  height: 600px;
}
</style>
