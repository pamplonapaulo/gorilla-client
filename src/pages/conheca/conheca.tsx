/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

// import { useMutation } from '@apollo/client'
// import CREATE_POTENTIAL_CUSTOMER from 'graphql/mutations/createPotentialCustomer'

import Button from 'components/Button'

import axios from 'axios'
// import { endpoint } from 'graphql/client'

import styled from 'styled-components'

const Conheca: React.FunctionComponent = () => {
  // const customer = {
  //   firstName: 'Apollo',
  //   lastName: 'GraphQL',
  //   email: 'caralho@apollo.com',
  //   postCode: '22240-000',
  //   password: 'xyz09'
  // }

  // const [addPotentialCustomer, { data }] = useMutation(
  //   CREATE_POTENTIAL_CUSTOMER
  // )

  return (
    <Container>
      <div
        onClick={() => {
          // addPotentialCustomer({ variables: { data: customer } })
          // console.log(data)
          axios
            .post('http://localhost:1337/auth/local/register', {
              username: 'Redirect',
              email: 'pamplonapaulo@gmail.com',
              password: 'strapiPassword'
            })
            .then((response: { data: { user: any; jwt: any } }) => {
              // Handle success.
              console.log('Well done!')
              console.log('User profile', response.data.user)
              console.log('User token', response.data.jwt)
            })
            .catch((error: { response: any }) => {
              // Handle error.
              console.log('An error occurred:', error.response)
            })
        }}
      >
        <Button bg={'#000'}>New Customer</Button>
      </div>
      <div
        onClick={() => {
          // addPotentialCustomer({ variables: { data: customer } })
          // console.log(data)
          axios
            .post('http://localhost:1337/auth/local', {
              identifier: 'user@strapi.io',
              password: 'strapiPassword'
            })
            .then((response: { data: { user: any; jwt: any } }) => {
              // Handle success.
              console.log('Well done!')
              console.log('User profile', response.data.user)
              console.log('User token', response.data.jwt)
            })
            .catch((error: { response: any }) => {
              // Handle error.
              console.log('An error occurred:', error.response)
            })
        }}
      >
        <Button bg={'#000'}>Login</Button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background: #ef8321;
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 1024px) {
    position: fixed;
  }
`

export async function getStaticProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  return { props: {} }
}

export default Conheca
