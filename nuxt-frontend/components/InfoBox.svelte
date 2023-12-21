<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";

  export let icons: {
    src: string;
    alt: string;
    description: string;
  }[];

  const middleIndex = Math.floor(icons.length / 2);
  let isHovered: boolean;

  export let text: string;
</script>

<div
  class="border-[1px] border-gray-500 sm:w-3/12 w-full sm:h-4/6 h-3/6 flex flex-col justify-center items-center group hover:bg-white"
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
>
  <div class="flex-row flex-1 flex justify-center items-center w-full">
    {#if isHovered}
      {#each icons.slice(0, middleIndex) as icon, i (i)}
        <div class="flex justify-center w-1/3">
          <div class="sm:tooltip" data-tip={icon.description}>
            <img
              in:fly={{
                y: -100,
                duration: 800,
                delay: i * 100,
                easing: cubicOut,
              }}
              src={icon.src}
              alt={icon.alt}
              class="max-h-14 max-w-14"
            />
          </div>
        </div>
      {/each}
    {/if}
  </div>
  <h1
    class="mix-blend-difference font-bold md:text-3xl sm:text-xl group-hover:scale-125 transition duration-300"
  >
    {text}
  </h1>
  <div class="flex-row flex-1 flex justify-center items-center w-full">
    {#if isHovered}
      {#each icons.slice(-middleIndex) as icon, i}
        <div class="flex justify-center w-1/3">
          <div class="sm:tooltip" data-tip={icon.description}>
            <img
              in:fly={{
                y: -100,
                duration: 800,
                delay: (i + middleIndex) * 100,
                easing: cubicOut,
              }}
              src={icon.src}
              alt={icon.alt}
              class="max-w-14 max-h-14"
            />
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>
