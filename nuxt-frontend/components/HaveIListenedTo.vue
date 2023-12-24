<script setup lang="ts">
const artist = ref("");

const playcountValue = ref<number | null>(null);
const comment = ref<string | null>(null);
const loading = ref(false);

async function submit(e: Event) {
  e.preventDefault();

  const lowerArtist = artist.value.toLowerCase();
  if (lowerArtist === "keyruu") {
    playcountValue.value = 9999999;
    comment.value = "That's me! You should check out my music!";
  } else {
    const playcount = useQuery(GetPlaycountDocument, {
      artist: lowerArtist,
    });
    loading.value = true

    playcount.onResult(({data, errors, error}) => {
      if (data.playcount != null) {
        loading.value = false
        playcountValue.value = data.playcount!;
        if (lowerArtist === "brakence") {
          comment.value =
              "This is my all-time favorite artist! brakence is a very big inspiration for me!";
        } else if (lowerArtist === "keshi") {
          comment.value =
              "keshi is probably my second favorite artist! I love his music!";
        } else if (playcountValue.value > 2000) {
          comment.value = "I love them! They are in my top 10!";
        } else if (playcountValue.value > 1000) {
          comment.value =
              "Oh boy! This is an awesome artist! Probably in my top 20.";
        } else if (playcountValue.value > 500) {
          comment.value = "I like them! Hasn't made it to my top 10 though.";
        } else if (playcountValue.value > 100) {
          comment.value = "I do like them! But I do not listen to them that often.";
        } else if (playcountValue.value > 10) {
          comment.value =
              "I don't really know about them... Maybe I should listen to them more?";
        } else {
          comment.value = "Yeah...";
        }
      } else if (errors || error) {
        loading.value = false
        console.log(errors);
        playcountValue.value = null;
        comment.value = "Yeah...";
      }
    })

    playcount.onError((err) => {
      loading.value = false
      console.log(err);
      playcountValue.value = null;
      comment.value = "Yeah...";
    })
  }
}
</script>

<template>
  <div class="flex justify-center items-center flex-col bg-gray-900">
    <h1 class="text-3xl m-8">
      Type in an artist and see if I have listened to them:
    </h1>
    <form @submit="submit" class="form-control m-8">
      <div class="input-group">
        <UInput
            type="text"
            leading-icon="i-mdi-search"
            :loading="loading"
            placeholder="Search for an artist…"
            class="input input-bordered"
            v-model="artist"
        />
      </div>
    </form>
    <div v-if="playcountValue && !loading">
      <p class="text-2xl mt-8 text-center">I have listened to them {{ playcountValue }} times!</p>
      <p class="text-2xl mb-8 text-center">{{ comment }}</p>
    </div>
    <p v-if="!playcountValue && !loading" class="text-2xl m-8">I wonder if I like them...</p>
  </div>
</template>
