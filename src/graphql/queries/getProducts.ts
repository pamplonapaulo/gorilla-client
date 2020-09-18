import { gql } from 'graphql-request'

const GET_PRODUCT_NAME = gql`
  query GET_PRODUCT_NAME {
    product(id: 4) {
      Name
      Price
      Description
    }
  }
`

export default GET_PRODUCT_NAME
