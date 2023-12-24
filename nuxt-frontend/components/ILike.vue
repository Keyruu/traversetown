<script setup lang="ts">
import gsap from "gsap";
import Context = gsap.Context;

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

const img = useImage()
const foggySeaBg = img('/foggy_sea.jpg',
    {width: 3008, height: 700})

let ctx: Context;

onMounted(() => {
  ctx = gsap.context((self) => {
    const foggySea = self.selector!('.foggy-sea')

    const scrollTrigger = {
      trigger: foggySea,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }

    const rightToLeft = self.selector!('.personal-text.right-to-left')
    gsap.to(rightToLeft, {
      xPercent: -100,
      scrollTrigger: {
        ...scrollTrigger,
        onUpdate({getVelocity}) {
          gsap.fromTo(rightToLeft, {
            skewX: `${getVelocity() / -200}deg`
          }, {
            skewX: 0
          })
        }
      }
    });

    const leftToRight = self.selector!('.personal-text.left-to-right')
    gsap.to(leftToRight, {
      xPercent: 100,
      scrollTrigger: {
        ...scrollTrigger,
        onUpdate({getVelocity}) {
          gsap.fromTo(leftToRight, {
            skewX: `${getVelocity() / 200}deg`
          }, {
            skewX: 0
          })
        }
      }
    });
  }, 'main'); // <- Scope!
});

onUnmounted(() => {
  if (ctx) ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <div :class="`foggy-sea h-[600px] bg-no-repeat bg-cover w-full mb-24 flex flex-col justify-center`"
       :style="`background-image: url('${foggySeaBg}')`">
    <p
        class="mix-blend-difference lg:text-8xl md:text-6xl mb-8 font-thin w-full text-center text-4xl"
    >
      i like
    </p>
    <div class="likes">
      <div class="flex-row flex mix-blend-difference origin-bottom">
        <Likes :likes="likes" :leftToRight="false"/>
      </div>
      <div
          class="flex-row flex mix-blend-difference origin-bottom"
      >
        <Likes :leftToRight="true" :likes="likes2"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
