import { gql } from 'graphql-request'

const GET_PORTFOLIO = gql`
  query GET_PORTFOLIO {
    products {
      id
      Name
    }
  }
`

export default GET_PORTFOLIO
