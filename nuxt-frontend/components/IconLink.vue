<script setup lang="ts">
  const props = defineProps({
      icon: String,
      iconColor: {
        type: String,
        default: "#3f3f46",
      },
      link: String,
      highlightColor: String,
      width: {
        type: Number,
        default: 20,
      },
      height: {
        type: Number,
        default: 20,
      },
      margin: {
        type: String,
        default: "",
      },
      extraClasses: {
        type: String,
        default: "",
      },
  })

  let currentColor = ref(props.iconColor)
  const {focus, reset} = useCursorStore()
</script>

<template>
<a
  @mouseenter="() => {
    currentColor = highlightColor;
    focus(2);
  }"
  @mouseleave="() => {
    currentColor = iconColor;
    reset();
  }"
  :class="`${margin} transition duration-500 hover:scale-110 ${extraClasses}`"
  :style="`color: ${currentColor}`"
  :href="link"
  target="_blank"
  rel="noreferrer"
  :aria-label="`Link to ${icon}`"
>
  <UIcon :name="icon" :class="`w-${width} h-${height}`"/>
</a>
  </template>
