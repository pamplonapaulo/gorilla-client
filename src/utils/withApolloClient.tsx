import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { endpoint } from 'graphql/client'

// const GRAPHQL_ENDPOINT_DEVELOPMENT = 'http://localhost:1337'
// const GRAPHQL_ENDPOINT_PRODUCTION = 'https://gorilla-cms.herokuapp.com'

// const GRAPHQL_ENDPOINT =
//   process.env.NODE_ENV === 'development'
//     ? GRAPHQL_ENDPOINT_DEVELOPMENT
//     : GRAPHQL_ENDPOINT_PRODUCTION
export const link = createHttpLink({
  fetch,
  uri: endpoint
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})
export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: 'http://localhost:1337',
      cache: new InMemoryCache().restore(initialState || {})
    })
)
