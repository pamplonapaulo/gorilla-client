import { gql } from 'graphql-request'

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
      id
      Name
      Price
      Image {
        formats
      }
    }
  }
`

export default GET_PRODUCTS
