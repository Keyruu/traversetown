<script setup lang="ts">
let coords = reactive({
  x: 0,
  y: 0
})
const {set: setCoords} = useSpring(coords, {
  stiffness: 800,
  damping: 80,
})

const {x, y} = useMouse()

watch([x, y], ([newX, newY]) => {
  setCoords({
    x: newX - 10,
    y: newY - 10
  })
})

let mouseStore = useCursorStore()
let {scale, icon, color} = storeToRefs(mouseStore)
</script>

<template>
  <div class="cursor"
       :style="`transform: translate3d(${coords.x}px, ${coords.y}px, 0);`"
  >
    <div class="cursor--small flex justify-center items-center"
         :style="`transform: scale(${scale}); background: ${color}`">
      <UIcon v-if="icon" class="mix-blend-difference" :name="icon"/>
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

.cursor {
  position: fixed;
}

@media (pointer: none),
(pointer: coarse) {
  .cursor {
    visibility: hidden;
  }
}
</style>
