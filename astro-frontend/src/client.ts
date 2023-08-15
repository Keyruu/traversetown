// import { PUBLIC_GRAPHQL_URL, PUBLIC_GRAPHQL_WS_URL } from '$env/static/public';
import { Client, fetchExchange, subscriptionExchange } from '@urql/svelte';
import { createClient as createWSClient } from 'graphql-ws';

const wsClient =
  typeof window !== "undefined"
    ? createWSClient({
      url: import.meta.env.PUBLIC_GRAPHQL_WS_URL,
    })
    : null;

const exchanges = [fetchExchange];

if (wsClient) {
  exchanges.push(
    subscriptionExchange({
      forwardSubscription(request) {
        const input = { ...request, query: request.query || "" };
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink);
            return { unsubscribe };
          },
        };
      },
    })
  );
}


export const client = new Client({
  url: import.meta.env.PUBLIC_GRAPHQL_URL,
  exchanges,
});