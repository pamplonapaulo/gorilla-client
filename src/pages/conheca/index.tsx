/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

import { useMutation } from '@apollo/client'
import CREATE_POTENTIAL_CUSTOMER from 'graphql/mutations/createPotentialCustomer'

import Button from 'components/Button'

import styled from 'styled-components'

const Conheca: React.FunctionComponent = () => {
  const customer = {
    firstName: 'Apollo',
    lastName: 'GraphQL',
    email: 'apollo123@apollo.com',
    postCode: '22240-000',
    password: 'xyz09'
  }

  const [addPotentialCustomer, { data }] = useMutation(
    CREATE_POTENTIAL_CUSTOMER
  )

  return (
    <Container>
      <div
        onClick={() => {
          addPotentialCustomer({ variables: { data: customer } })
          console.log(data)
        }}
      >
        <Button bg={'#000'}>New Customer</Button>
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
