<script lang="ts">
  export let likes: any[];
  export let leftToRight = false;

  $: doubleLikes = [...likes, ...likes];
</script>

<div
  class="personal-text w-full flex {leftToRight
    ? 'translate-x-full scrollTextLeftToRight'
    : '-translate-x-full scrollTextRightToLeft'} "
>
  {#each doubleLikes as like, i}
    <p
      class="font-bold lg:text-7xl md:text-7xl text-4xl uppercase hover:-translate-y-4 transition duration-200 ease-out {i %
        2 ===
      0
        ? 'different-font'
        : ''}"
    >
      {like.name}
    </p>
  {/each}
</div>

<style lang="scss">
  .different-font {
    font-family: "Montagu Slab", serif;
    font-weight: 300;
  }

  .scrollTextRightToLeft {
    animation: scrollRightToLeft 20s linear infinite;
  }

  @keyframes scrollRightToLeft {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(50%);
    }
  }

  .scrollTextLeftToRight {
    animation: scrollLeftToRight 20s linear infinite;
  }

  @keyframes scrollLeftToRight {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
