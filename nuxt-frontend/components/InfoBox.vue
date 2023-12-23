<script setup lang="ts">
const props = defineProps<{
  icons: {
    src: string;
    alt: string;
    description: string;
  }[],
  text: string
}>();

const middleIndex = Math.floor(props.icons.length / 2);
const isHovered = ref(false);
</script>

<template>
<div
    class="sm:w-9/12 w-full h-4/6 flex justify-center items-center group"
    @mouseenter="() => isHovered = true"
    @mouseleave="() => isHovered = false"
>
<div class="grid grid-cols-3 gap-2">
  <div
      v-for="(icon, i) in icons"
      class="flex justify-center h-full">
    <div class="sm:tooltip" data-tip={icon.description}>
      <div class="flex justify-center items-center bg-gray-900 p-6 w1/3 my-4">
        <img
            :src="icon.src"
            :alt="icon.alt"
            class="max-h-14 max-w-14 "
        />
      </div>
      <p class="mix-blend-difference hidden lg:flex">{{icon.description}}</p>
    </div>
  </div>
</div>
</div>
</template>

<style scoped>
.icon-shadow {
  --tw-drop-shadow: drop-shadow(0 2px 2px rgb(100 100 100));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

</style>
