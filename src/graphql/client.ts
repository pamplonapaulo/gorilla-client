import { GraphQLClient } from 'graphql-request'

// export const endpoint = 'http://localhost:1337/graphql'
export const endpoint = 'https://gorilla-cms.herokuapp.com/graphql'

const client = new GraphQLClient(endpoint)

export default client
