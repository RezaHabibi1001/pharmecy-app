import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://graphql-weather-api.herokuapp.com',
    cache: new InMemoryCache()
  });

ReactDOM.render(
<ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root'))