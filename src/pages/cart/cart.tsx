import React, { useState, useEffect } from 'react'

import CartAction from 'components/CartAction'
import ItemsArrayMap from 'components/ItemsArrayMap'

import { BagItem } from 'types/api'

import { useBag } from 'contexts'

import styled from 'styled-components'

const Cart = () => {
  const { bag, setBag } = useBag()
  const [totalOnBag, setTotalOnBag] = useState(0)
  const [arrBuys, setArrBuys] = useState<BagItem[] | []>([])
  const [arrSubs, setArrSubs] = useState<BagItem[] | []>([])
  const [subtotal, setSubtotal] = useState<number>(0)

  const handleQuantity = (
    item: BagItem,
    subscription: boolean,
    totalItems: number
  ) => {
    const updated = {
      ...item,
      quantityToSubscribe: subscription ? totalItems : item.quantityToSubscribe,
      quantityToBuy: !subscription ? totalItems : item.quantityToBuy
    }

    const match = (p: BagItem) => p.id == item.id

    if (bag.some(match)) {
      const arr = bag
      arr.splice(arr.findIndex(match), 1)

      setBag([...arr, updated])
    }
  }

  const hasBuys = (p: BagItem) => p.quantityToBuy > 0
  const hasSubs = (p: BagItem) => p.quantityToSubscribe > 0

  useEffect(() => {
    if (bag.some(hasBuys)) {
      setArrBuys(bag.filter(hasBuys))
    } else {
      setArrBuys([])
    }
    if (bag.some(hasSubs)) {
      setArrSubs(bag.filter(hasSubs))
    } else {
      setArrSubs([])
    }
  }, [bag, setArrBuys, setArrSubs])

  useEffect(() => {
    let value = 0
    let totalOnBuy = 0
    let totalOnSub = 0

    for (let i = 0; i < arrBuys.length; i++) {
      value += arrBuys[i].price * arrBuys[i].quantityToBuy
      totalOnBuy += arrBuys[i].quantityToBuy
    }

    for (let i = 0; i < arrSubs.length; i++) {
      value += arrSubs[i].price * arrSubs[i].quantityToSubscribe
      totalOnSub += arrSubs[i].quantityToSubscribe
    }

    setSubtotal(value)
    setTotalOnBag(totalOnSub + totalOnBuy)
  }, [arrBuys, arrSubs, setSubtotal])

  return (
    <Container>
      <div>
        <h1>Carrinho de compras ({totalOnBag})</h1>

        <div>
          <ItemsArrayMap
            items={arrSubs}
            subscription={true}
            parentCallback={handleQuantity}
          />
          <ItemsArrayMap
            items={arrBuys}
            subscription={false}
            parentCallback={handleQuantity}
          />
        </div>
        <Footer>
          <FooterText>Subtotal:</FooterText>
          <FooterText>R$ {subtotal.toFixed(2)}</FooterText>
        </Footer>
        <CartAction
          isVisible={totalOnBag > 0}
          actionLink={'/home'}
          actionName={'Concluir'}
        />
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

const Footer = styled.div`
  color: blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
`

const FooterText = styled.h6`
  color: #47311b;
  font-size: 1.5rem;
  margin: 10px 0;
  width: calc(95% / 2);

  &&:nth-of-type(2) {
    text-align: right;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`

export default Cart
