<script setup lang="ts">
const {focus, reset} = useCursorStore()
</script>

<template>
  <div>
    <nav class="bg-[#121212] z-50 fixed w-screen" >
      <div class="grid grid-cols-1 lg:grid-cols-5 grid-rows-1 gap-1">
        <NavLink to="likes" class="hidden lg:flex" text="likes" direction="left"/>
        <NavLink to="music" class="hidden lg:flex" text="music" direction="left"/>
        <div class="flex justify-center items-center">
          <NuxtLink to="/">
            <NuxtImg
                class="logo w-44 my-4 drop-shadow visible"
                width="500"
                height="300"
                :placeholder="[500, 300]"
                src="/keyruu_logo.png"
                alt="Keyruu"
                @mouseenter="() => focus(2)"
                @mouseleave="reset"
            />
          </NuxtLink>
        </div>
        <NavLink to="listens" class="hidden lg:flex" text="listens" direction="right"/>
        <NavLink to="about" class="hidden lg:flex" text="about" direction="right"/>
      </div>
    </nav>
    <slot/>
    <footer class="text-gray-600 body-font">
      <div class="bg-zinc-800">
        <div
            class="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center"
        >
          <div
              class="tooltip"
              data-tip="This site does not need an Imprint, because it is a purely personal site without any commercial purpose."
          >
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
