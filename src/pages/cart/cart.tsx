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
    display: block;
    padding: 25rem;
  }
`

export default Cart
