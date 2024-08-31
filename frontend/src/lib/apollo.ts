import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/", // Atualize com a URL da sua API GraphQL
  cache: new InMemoryCache(),
});
