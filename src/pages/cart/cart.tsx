import React from 'react'

import MountOrders from 'components/MountOrders'
import SubscriptionSettings from 'components/SubscriptionSettings'

import styled from 'styled-components'

const Cart = () => {
  return (
    <Container>
      <MountOrders isCartPage={true}>
        <SubscriptionSettings />
      </MountOrders>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  background: #ef8321;
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: center;
  width: 100%;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 1024px) {
    display: block;
    padding: 100px 25rem 0;
  }
`

export default Cart
