import { ApolloClient, InMemoryCache } from '@apollo/client'

// export const endpoint = 'http://localhost:1337/'
// export const endpoint = 'https://packgorilla.herokuapp.com/'
export const endpoint = 'http://142.93.139.20/'

export const client = new ApolloClient({
  uri: endpoint + 'graphql',
  cache: new InMemoryCache()
})
