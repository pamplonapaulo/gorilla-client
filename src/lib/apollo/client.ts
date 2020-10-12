import { ApolloClient, InMemoryCache } from '@apollo/client'
import { endpoint } from 'graphql/client'

export const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache()
})
