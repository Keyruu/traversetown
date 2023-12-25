export const useNavStore = defineStore('nav', () => {
    const navStyle = ref('')
    const logoStyle = ref('')

    function index() {
        console.log('WHEN DOES THIS INDEX RUN MF')
        // navStyle.value = "visibility: hidden";
        // logoStyle.value = "transform: translateY(40vh) scale(2);";
    }

    function reset() {
        console.log('WHEN DOES THIS RESET RUN MF')
        navStyle.value = "";
        logoStyle.value = "";
    }

    return { navStyle, logoStyle, index, reset }
})
