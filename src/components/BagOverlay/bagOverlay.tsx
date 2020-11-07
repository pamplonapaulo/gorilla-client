/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'

import CartItem from 'components/CartItem'
import Button from 'components/Button'
import Arrow from 'components/Arrow'

import { BagItem } from 'types/api'

import { useBag, useBagOverlay } from 'contexts'

import * as S from './styles'

const BagOverlay = () => {
  const { bag, setBag } = useBag()
  const { bagOverlay } = useBagOverlay()
  const [totalOnBag, setTotalOnBag] = useState(0)
  // const [arrBuys, setArrBuys] = useState<BagItem[] | []>([])
  // const [arrSubscriptions, setArrSubscriptions] = useState<BagItem[] | []>([])
  const [arrBuys, setArrBuys] = useState<any>([])
  const [arrSubs, setArrSubs] = useState<any>([])
  const [subtotal, setSubtotal] = useState<number>(0)

  const handleGoToCart = () => {
    console.log('ir ao carrinho')
  }

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
      {bagOverlay && (
        <S.BagPopUp>
          <S.Title>Carrinho de compras ({totalOnBag})</S.Title>
          <S.ProductsWrap>
            {arrSubs.map((p: BagItem) => (
              <CartItem
                key={p.name}
                subscription={true}
                quantity={p.quantityToSubscribe}
                parentCallback={handleQuantity}
                item={p}
              />
            ))}
            {arrBuys.map((p: BagItem) => (
              <CartItem
                key={p.name}
                subscription={false}
                quantity={p.quantityToBuy}
                parentCallback={handleQuantity}
                item={p}
              />
            ))}
          </S.ProductsWrap>
          <S.Footer>
            <S.FooterText>Subtotal:</S.FooterText>
            <S.FooterText>R$ {subtotal.toFixed(2)}</S.FooterText>
          </S.Footer>
          <S.CallCheckout>
            {totalOnBag > 0 && (
              <div
                onClick={() => handleGoToCart()}
                style={{ width: 'fit-content' }}
              >
                <Button colorOne={'#47311b'} colorTwo={'#2DA650'}>
                  <span style={{ margin: '0 8px' }}>Avançar</span>
                  <Arrow color={'#47311b'} rotate={'180'} />
                </Button>
              </div>
            )}
          </S.CallCheckout>
        </S.BagPopUp>
      )}
    </>
  )
}

export default BagOverlay
