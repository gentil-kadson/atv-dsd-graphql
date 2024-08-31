import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://192.168.0.104:8080/query", // Atualize com a URL da sua API GraphQL
  cache: new InMemoryCache(),
});
