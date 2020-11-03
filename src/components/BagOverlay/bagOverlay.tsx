import React, { useState, useEffect } from 'react'

import CartItem from 'components/CartItem'
import Button from 'components/Button'

import { useBag, useBagOverlay } from 'contexts'

import * as S from './styles'

const BagOverlay = () => {
  const { bag } = useBag()
  const { bagOverlay } = useBagOverlay()
  const [totalOnBag, setTotalOnBag] = useState(0)

  const handleGoToCart = () => {
    console.log('ir ao carrinho')
  }

  const handleDeleteItem = (total: number) => {
    console.log('this is bagOverlay.tsx')
    console.log(total)
  }

  useEffect(() => {
    console.log(bag)
    setTotalOnBag(bag.toBuy.length - 1 + (bag.toSubscribe.length - 1))
  }, [bag, setTotalOnBag])

  return (
    <>
      {bagOverlay && (
        <S.BagPopUp>
          <S.Title>Carrinho de compras ({totalOnBag})</S.Title>
          <S.ProductsWrap>
            <CartItem
              image={'tests_5be5068aaf.png'}
              name={'Banana'}
              price={'9,99'}
              subscription={true}
              quantity={3}
              parentCallback={handleDeleteItem}
            />
            <CartItem
              image={'tests_5be5068aaf.png'}
              name={'Amendoim'}
              price={'9,99'}
              subscription={false}
              quantity={4}
              parentCallback={handleDeleteItem}
            />
            <CartItem
              image={'tests_5be5068aaf.png'}
              name={'Banana com canela'}
              price={'9,99'}
              subscription={true}
              quantity={1}
              parentCallback={handleDeleteItem}
            />
          </S.ProductsWrap>
          <S.Footer>
            <S.FooterText>Subtotal:</S.FooterText>
            <S.FooterText>R$ 20,99</S.FooterText>
          </S.Footer>
          <div onClick={() => handleGoToCart()}>
            <Button colorOne={'#47311b'} colorTwo={'#2DA650'}>
              Ir ao carrinho
            </Button>
          </div>
        </S.BagPopUp>
      )}
    </>
  )
}

export default BagOverlay
