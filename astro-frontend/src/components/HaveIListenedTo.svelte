<script lang="ts">
  import Icon from "@iconify/svelte";
  import {
    GetPlaycountDocument,
    type GetPlaycountQuery,
    type GetPlaycountQueryVariables,
  } from "../generated/graphql";

  import { queryStore } from "@urql/svelte";
  import type { Unsubscriber } from "svelte/store";
  import { client } from "../client";

  let artist: string = "";

  const playcount = () =>
    queryStore<GetPlaycountQuery, GetPlaycountQueryVariables>({
      client,
      query: GetPlaycountDocument,
      variables: { artist },
    });

  let unsubscribe: Unsubscriber | undefined;
  let playcountValue: number | undefined;
  let comment: string | undefined;

  async function submit(e: Event) {
    e.preventDefault();
    if (unsubscribe) {
      unsubscribe();
    }
    const lowerArtist = artist.toLowerCase();
    if (lowerArtist === "keyruu") {
      playcountValue = 9999999;
      comment = "That's me! You should check out my music!";
    } else {
      unsubscribe = playcount().subscribe(({ data, error }) => {
        if (data != null) {
          playcountValue = data.playcount!;
          if (lowerArtist === "brakence") {
            comment =
              "This is my all-time favorite artist! brakence is a very big inspiration for me!";
          } else if (lowerArtist === "keshi") {
            comment =
              "keshi is probably my second favorite artist! I love his music!";
          } else if (playcountValue > 2000) {
            comment = "I love them! They are in my top 10!";
          } else if (playcountValue > 1000) {
            comment =
              "Oh boy! This is an awesome artist! Probably in my top 20.";
          } else if (playcountValue > 500) {
            comment = "I like them! Hasn't made it to my top 10 though.";
          } else if (playcountValue > 100) {
            comment = "I do like them! But I do not listen to them that often.";
          } else if (playcountValue > 10) {
            comment =
              "I don't really know about them... Maybe I should listen to them more?";
          } else {
            comment = "Yeah...";
          }
        } else if (error) {
          console.log(error);
          comment = "Yeah...";
        }
      });
    }
  }
</script>

<div class="flex justify-center items-center flex-col">
  <h1 class="text-3xl m-8">
    Type in an artist and see if I have listened to them:
  </h1>
  <form on:submit={submit} class="form-control m-8">
    <div class="input-group">
      <input
        type="text"
        placeholder="Search for an artist…"
        class="input input-bordered"
        bind:value={artist}
      />
      <button
        class="btn btn-square"
        id="artistsearch"
        aria-label="Search for artist"
      >
        <Icon icon="mdi:search" width={20} height={20} />
      </button>
    </div>
  </form>
  {#if playcountValue != null}
    <p class="text-2xl mt-8">I have listened to them {playcountValue} times!</p>
    <p class="text-2xl mb-8">{comment}</p>
  {:else}
    <p class="text-2xl m-8">I wonder if I like them...</p>
  {/if}
</div>
