export const useNavStore = defineStore('nav', () => {
  const show = ref(false)

  function setNavShow(value: boolean) {
    show.value = value
  }

  return { show, setNavShow }
})