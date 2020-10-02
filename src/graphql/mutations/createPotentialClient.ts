import { gql } from 'graphql-request'

const CREATE_POTENTIAL_CLIENT = gql`
  mutation CREATE_POTENTIAL_CLIENT($data: PotentialClientInput) {
    createPotentialClient(input: { data: $data }) {
      potentialClient {
        firstName
        lastName
        email
        emailValidation
        postCode
      }
    }
  }
`

export default CREATE_POTENTIAL_CLIENT
