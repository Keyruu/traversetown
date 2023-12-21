<script lang="ts">
  import Icon from "@iconify/svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let iconColor = "#3f3f46";
  let currentColor = iconColor;
  export let icon: string;
  export let link: string;
  export let highlightColor = iconColor;
  export let width: number = 20;
  export let height: number = 20;
  export let margin = "";
  export let extraClasses = "";
</script>

<a
  on:mouseenter={() => {
    currentColor = highlightColor;
    dispatch("customMouseEnter");
  }}
  on:mouseleave={() => {
    currentColor = iconColor;
    dispatch("customMouseLeave");
  }}
  class="{margin} transition duration-500 hover:scale-110 {extraClasses}"
  style="color: {currentColor}"
  href={link}
  target="_blank"
  rel="noreferrer"
  aria-label="Link to {icon}"
>
  <Icon {icon} {width} {height} />
</a>
