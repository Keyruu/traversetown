import daisyui from "daisyui"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo'],
  tailwindcss: {
    config: {
      plugins: [daisyui]
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:8080/graphql',
        wsEndpoint: 'ws://localhost:8080/graphql'
      }
    },
  },
})
