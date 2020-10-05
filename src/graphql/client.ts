//https://github.com/prisma-labs/graphql-request

import { GraphQLClient } from 'graphql-request'

const endpoint = 'http://localhost:1337/graphql'
// const endpoint = 'https://gorilla-cms.herokuapp.com/graphql'

const client = new GraphQLClient(endpoint)

export default client
