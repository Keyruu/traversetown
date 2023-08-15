<script>
  import Icon from "@iconify/svelte";
  import { extraStyles, getStylesString, resetMouse, scale } from "../cursor";
</script>

<img
  class="logo h-40 drop-shadow duration-500 logo-middle mt-auto"
  src="/keyruu_logo.png"
  alt="Keyruu"
  on:mouseenter={() => {
    scale.set(2);
    extraStyles.set(getStylesString("#fff", "difference"));
  }}
  on:mouseleave={() => {
    resetMouse();
  }}
/>
<Icon icon="pajamas:scroll-down" class="h-10 w-10 sticky mt-auto mb-8" />

<style lang="scss">
  // .logo {
  //   position: fixed;
  //   top: 0;
  //   left: 50%;
  //   transform: translate(-50%);
  //   padding: 1em;
  //   z-index: 998;
  // }
</style>
