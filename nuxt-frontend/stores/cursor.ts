export const useCursorStore = defineStore('cursor', () => {
    const scale = ref(1)
    const icon = ref<string | null>()
    const color = ref<string>('#4a4a4a')

    function triple() {
        scale.value = 3
    }

    function double() {
        scale.value = 2
    }

    function focus(factor: number) {
        scale.value = factor
        color.value = '#fff'
    }

    function reset() {
        scale.value = 1
        icon.value = null
        color.value = '#4a4a4a'
    }

    function spotify() {
        focus(3)
        icon.value = 'i-mdi-spotify'
    }

    return { scale, icon, color, focus, double, triple, reset, spotify }
})
