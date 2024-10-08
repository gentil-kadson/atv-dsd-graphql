import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:8080/query", // Atualize com a URL da sua API GraphQL
  cache: new InMemoryCache(),
});
