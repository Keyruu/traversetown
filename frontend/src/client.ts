import { PUBLIC_GRAPHQL_URL, PUBLIC_GRAPHQL_WS_URL } from '$env/static/public';
import { Client, fetchExchange, subscriptionExchange } from '@urql/svelte';
import { createClient as createWSClient } from 'graphql-ws';

const wsClient = createWSClient({
  url: PUBLIC_GRAPHQL_WS_URL,
});

export const client = new Client({
  url: PUBLIC_GRAPHQL_URL,
  exchanges: [
    fetchExchange,
    subscriptionExchange({
      forwardSubscription(request) {
        const input = { ...request, query: request.query || '' };
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink);
            return { unsubscribe };
          },
        };
      },
    }),
  ],
});