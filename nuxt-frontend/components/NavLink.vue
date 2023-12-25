<link rel="stylesheet" href="../../../../../Downloads/Zodiak_Complete/Fonts/WEB/css/zodiak.css">
<script setup lang="ts">

const props = defineProps<{
  text: string,
  direction: string,
  to: string,
}>()

const route = useRoute()

const selectedStyle = computed(() => {
  let oppositeDirection = props.direction === 'left' ? 'right' : 'left'
  if (route.path.includes(props.to)) {
    return `before:${oppositeDirection}-0`
  } else {
    return `before:${oppositeDirection}-full`
  }
})
</script>

<template>
  <div class="flex justify-center items-center">
    <NuxtLink :to="to" :class="`cursor-pointer ${selectedStyle} hvr-underline-from-${direction}`">
      {{text}}
    </NuxtLink>
  </div>
</template>

<style scoped>
/* Underline From Left */
.hvr-underline-from-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  background: #4ca7f0;
  height: 4px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {
  right: 0;
}

/* Underline From Right */
.hvr-underline-from-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  right: 0;

  bottom: 0;
  background: #4ca7f0;
  height: 4px;
  -webkit-transition-property: left;
  transition-property: left;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-right:hover:before, .hvr-underline-from-right:focus:before, .hvr-underline-from-right:active:before {
  left: 0;
}
</style>
