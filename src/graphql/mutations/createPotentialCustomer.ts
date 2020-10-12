import { gql } from '@apollo/client'

const CREATE_POTENTIAL_CUSTOMER = gql`
  mutation CREATE_POTENTIAL_CUSTOMER($data: PotentialClientInput) {
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

export default CREATE_POTENTIAL_CUSTOMER
