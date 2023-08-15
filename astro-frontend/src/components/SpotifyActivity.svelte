<script lang="ts">
  import { subscriptionStore } from "@urql/svelte";
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import { client } from "../client";
  import {
    SubscribeSpotifyTrackDocument,
    type SubscribeSpotifyTrackSubscription,
  } from "../generated/graphql";
  import CurrentTrack from "./CurrentTrack.svelte";

  const spotifyTrack = subscriptionStore<SubscribeSpotifyTrackSubscription>({
    client,
    query: SubscribeSpotifyTrackDocument,
  });

  let spotifyWeight = tweened(400, {
    duration: 200,
    easing: cubicOut,
  });
</script>

<section
  id="music"
  class="lg:h-[1000px] md:h-[800px] sm:h-[600px] sm:mb-0 mb-20 h-[600px] flex
  items-center flex-col now-playing-layout activity"
>
  <div class="md:text-6xl text-4xl z-10 sm:mb-24 mb-16 flex">
    <p class="font-extralight">my&nbsp;</p>
    <p
      class="hover:text-green-600 md:w-56 w-32 text-center align-middle"
      style="font-weight: {$spotifyWeight};"
      on:mouseenter={() => spotifyWeight.set(700)}
      on:mouseleave={() => spotifyWeight.set(400, { duration: 100 })}
    >
      spotify&nbsp;
    </p>
    <p class="font-extralight">activity:</p>
  </div>
  {#if $spotifyTrack.data?.subSpotifyTrack == null}
    Waiting for song...
  {:else}
    {#key $spotifyTrack.data.subSpotifyTrack?.spotifyId}
      <div in:fade={{ duration: 1000 }}>
        <CurrentTrack spotifyTrack={$spotifyTrack.data.subSpotifyTrack} />
      </div>
    {/key}
  {/if}
</section>

<style lang="scss">
  .activity {
    background-image: url("/gradient/subtle-gradient2.webp");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
