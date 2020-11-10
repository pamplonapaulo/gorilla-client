import React, { useState, useEffect } from 'react'

import CartAction from 'components/CartAction'
import ItemsArrayMap from 'components/ItemsArrayMap'

import { BagItem } from 'types/api'

import { useBag, useBagOverlay } from 'contexts'

import * as S from './styles'

const BagOverlay = () => {
  const { bag, setBag } = useBag()
  const { bagOverlay, setBagOverlay } = useBagOverlay()
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
    <>
      <S.BagPopUp
        onMouseLeave={() => setBagOverlay(false)}
        onMouseEnter={() => setBagOverlay(true)}
        theme={{ isVisible: bagOverlay }}
      >
        <S.Title>Carrinho de compras ({totalOnBag})</S.Title>
        <S.ProductsWrap>
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
        </S.ProductsWrap>
        <S.Footer>
          <S.FooterText>Subtotal:</S.FooterText>
          <S.FooterText>R$ {subtotal.toFixed(2)}</S.FooterText>
        </S.Footer>
        <CartAction
          isVisible={totalOnBag > 0}
          actionLink={'/cart'}
          actionName={'Avançar'}
        />
      </S.BagPopUp>
    </>
  )
}

export default BagOverlay
