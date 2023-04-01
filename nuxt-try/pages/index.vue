<template>
  <div class="flex h-screen flex-col justify-center overflow-hidden">
    <div class="flex flex-1 flex-col overflow-y-auto">
      <main class="flex max-h-full grow flex-col items-center justify-center">
        Test Index
        {{ result }}
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
const query = gql`
  subscription onMessageAdded($channelId: ID!) {
    messageAdded(channelId: $channelId) {
      id
      text
    }
  }
`
const { result } = useSubscription(query)
</script>