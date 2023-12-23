<script setup lang="ts">
defineProps<{
  image: string
}>()

const {focus, reset} = useCursorStore()
</script>

<template>
  <div class="flex justify-center items-center">
    <NuxtImg
        class="pic"
        :src="$props.image"
        alt="cover"
        @mouseenter="() => focus(3)"
        @mouseleave="reset"
        :placeholder="[500, 500]"
        sizes="sm:30vw md:50vw lg:100vw"
        format="webp"
    />
  </div>
</template>

<style>
.pic {
  max-height: 45vh;
}

@media only screen and (max-width: 600px) {
  .pic {
    max-height: 170px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .pic {
    max-height: 200px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .pic {
    max-height: 200px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .pic {
    max-height: 225px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1300px) {
  .pic {
    max-height: 250px;
  }
}

@media only screen and (min-width: 1540px) {
  .pic {
    max-height: 45vh;
  }
}
</style>
