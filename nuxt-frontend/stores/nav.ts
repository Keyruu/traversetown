export const useNavStore = defineStore('nav', () => {
    const navStyle = ref('')
    const logoStyle = ref('')

    function index() {
        navStyle.value = "visibility: hidden";
        logoStyle.value = "transform: translateY(40vh) scale(2);";
    }

    function reset() {
        navStyle.value = "";
        logoStyle.value = "";
    }

    return { navStyle, logoStyle, index, reset }
})
