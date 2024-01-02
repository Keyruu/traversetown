<script setup lang="ts">
const { setNavShow } = useNavStore()

setNavShow(true)

const route = useRoute()

const trimmedSong = computed(() => {
  if (route.params.song) {
    return (route.params.song as string).replace(/ /g, '')
  }
  return 'fuckyou'
})
</script>

<template>
  <main class="flex flex-col justify-center items-center">
    <div class="h-64 w-full"></div>
    <MyMusic :initial-song="trimmedSong" />
  </main>
</template>

<style scoped></style>
