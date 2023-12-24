<script setup lang="ts">
const props = defineProps<{
  icons: {
    src: string;
    alt: string;
    description: string;
  }[]
}>();

const middleIndex = Math.floor(props.icons.length / 2);
const isHovered = ref(false);

const {focus, reset} = useCursorStore()
</script>

<template>
  <div
      class="sm:w-9/12 w-full h-4/6 flex justify-center items-center group"
      @mouseenter="() => isHovered = true"
      @mouseleave="() => isHovered = false"
  >
    <ul class="grid grid-cols-3 gap-0.5 lg:gap-2">
      <li
          v-for="(icon, i) in icons"
          class="flex justify-center h-full"
          :key="icon.src"
      >
        <div class="sm:tooltip" data-tip={icon.description}>
          <div class="flex justify-center items-center bg-[#121212] p-6 w1/3 my-4">
            <NuxtImg
                :src="icon.src"
                :alt="icon.alt"
                @mouseenter="() => focus(2)"
                @mouseleave="reset"
                height="60"
                :placeholder="[60, 60]"
                class="object-contain h-[60px]"
                format="webp"
            />
          </div>
          <p class="mix-blend-difference hidden lg:flex">{{ icon.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  animation: fadeIn 1s ease both;
}

li:nth-child(2) {
  animation-delay: 100ms;
}

li:nth-child(3) {
  animation-delay: 200ms;
}

li:nth-child(4) {
  animation-delay: 300ms;
}

li:nth-child(5) {
  animation-delay: 400ms;
}

li:nth-child(6) {
  animation-delay: 500ms;
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

</style>
