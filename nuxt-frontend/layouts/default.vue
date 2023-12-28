<script setup lang="ts">
const {focus, reset} = useCursorStore()

const slideoverOpen = ref(false)
const config = useSiteConfig()

const seoTitle = () => 'Keyruu'
const seoDesc = () => 'Personal website of Keyruu aka Lucas. Keyruu is a DevOps Engineer and full-stack developer. ' +
    'He also does music (hyperpop, rap, pop) and design. ' +
    'He uses Svelte, Vue, Java, Quarkus, GraphQL, Kubernetes, Helm, Hetzner, Go and Rust.'
const seoImage = () => '/ogImages/index.png';

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  ogImage: seoImage,
  ogUrl: () => config.url,
  twitterTitle: seoTitle,
  twitterDescription: seoDesc,
  twitterImage: seoImage,
  twitterCard: 'summary',
  themeColor: '#121212',
  ogSiteName: () => 'Keyruu'
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png'
    }
  ],
  script: [
    {
      src: 'https://sorryihavetodothis.keyruu.de/js/script.js',
      defer: true,
      'data-domain': 'keyruu.de'
    },
  ]
})
</script>

<template>
  <div>
    <USlideover v-model="slideoverOpen" side="right">
      <div class="flex-1 p-10 text-2xl flex justify-center flex-col">
        <UButton icon="i-mdi-close" variant="link" @click="slideoverOpen = false" class="mb-6 absolute top-2 right-2" />
        <NavLink @click="slideoverOpen = false" to="/" class="mb-6" text="home" direction="left"/>
        <NavLink @click="slideoverOpen = false" to="/likes" class="mb-6" text="likes" direction="left"/>
        <NavLink @click="slideoverOpen = false" to="/music/newest-song" class="mb-6" text="music" direction="left"/>
        <NavLink @click="slideoverOpen = false" to="/listens" class="mb-6" text="listens" direction="left"/>
        <NavLink @click="slideoverOpen = false" to="/about" class="" text="about" direction="left"/>
      </div>
    </USlideover>
    <nav class="bg-[#121212] z-50 fixed w-screen">
      <div class="grid grid-cols-3 lg:grid-cols-5 grid-rows-1 gap-1">
        <div class="lg:hidden"></div>
        <NavLink to="/likes" class="hidden lg:flex" text="likes" direction="left"/>
        <NavLink to="/music/newest-song" class="hidden lg:flex" text="music" direction="left"/>
        <div class="flex justify-center items-center">
          <NuxtLink to="/">
            <NuxtImg
                class="logo w-44 my-4 drop-shadow visible"
                width="500"
                height="300"
                :placeholder="[500, 300]"
                sizes="xs:20vw sm:30vw md:50vw lg:100vw"
                src="/keyruu_logo.png"
                alt="Keyruu"
                @mouseenter="() => focus(2)"
                @mouseleave="reset"
            />
          </NuxtLink>
        </div>
        <NavLink to="/listens" class="hidden lg:flex" text="listens" direction="right"/>
        <NavLink to="/about" class="hidden lg:flex" text="about" direction="right"/>
        <div class="flex justify-center items-center lg:hidden">
          <UButton
              variant="link"
              class="h-8 w-8"
              icon="i-mdi-menu"
              @click="slideoverOpen = true" />
        </div>
      </div>
    </nav>
    <slot/>
    <footer class="text-gray-600 body-font">
      <div class="bg-zinc-800">
        <div
            class="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center"
        >
          <div>
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2023 Keyruu
            </p>
          </div>
          <span
              class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
          >
              <IconLink
                  icon="i-mdi-github"
                  link="https://github.com/Keyruu"
                  iconColor="#6b7280"
                  highlightColor="#fff"
                  extraClasses="ml-3"
                  :do-focus="false"
              />
              <IconLink
                  icon="i-mdi-linkedin"
                  link="https://www.linkedin.com/in/lucasrott/"
                  iconColor="#6b7280"
                  highlightColor="#3375b0"
                  extraClasses="ml-3"
                  :do-focus="false"
              />
              <IconLink
                  icon="i-mdi-discord"
                  link="https://discord.gg/XYUmUeFwA7"
                  iconColor="#6b7280"
                  highlightColor="#5865F2"
                  extraClasses="ml-3"
                  :do-focus="false"
              />
              <IconLink
                  icon="i-mdi-instagram"
                  link="https://www.instagram.com/iamkeyruu/?hl=de"
                  iconColor="#6b7280"
                  highlightColor="#e1306c"
                  extraClasses="ml-3"
                  :do-focus="false"
              />
            </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>
