import { gql } from 'graphql-request'

const GET_SINGLE_PRODUCT = gql`
  query GET_PRODUCT_NAME {
    product(id: 4) {
      Name
      Price
      Description
      Image {
        url
        formats
      }
    }
  }
`

export default GET_SINGLE_PRODUCT
