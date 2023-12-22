export const useCursorStore = defineStore('cursor', () => {
    const x = ref(0)
    const y = ref(0)
    const scale = ref(1)
    const icon = ref<string | null>()
    const color = ref<string>('#4a4a4a')

    function setCoords(e: MouseEvent) {
        x.value = e.clientX
        y.value = e.clientY
    }

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

    return { x, y, scale, icon, color, setCoords, focus, double, triple, reset, spotify }
})
