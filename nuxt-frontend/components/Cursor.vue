<script setup lang="ts">
let mouseStore = useCursorStore()
let { x, y, scale, icon, color } = storeToRefs(mouseStore)
</script>

<template>
  <div class="cursor">
    <div class="cursor--small flex justify-center items-center" :style="`
        transform: scale(${scale}); background: ${color};
                         left: ${x - 10}px; top: ${y - 10}px;`">
      <UIcon v-if="icon" class="mix-blend-difference" :name="icon" />
    </div>
  </div>
</template>

<style>
/* cursor */
.cursor--small {
  position: fixed;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  mix-blend-mode: difference;
  pointer-events: none;
  user-select: none;
  background: #4a4a4a;
  z-index: 9999;
  transition: transform 0.2s ease-in-out;
}

.cursor {}

@media (pointer: none),
(pointer: coarse) {
  .cursor {
    visibility: hidden;
  }
}
</style>
