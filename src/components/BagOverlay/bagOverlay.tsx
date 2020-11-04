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

  const handleDeleteItem = (total: number, id: number) => {
    console.log('id: ', id)
    console.log('total: ', total)
  }

  useEffect(() => {
    console.log(bag)
    setTotalOnBag(bag.length - 1)
  }, [bag, setTotalOnBag])

  return (
    <>
      {bagOverlay && (
        <S.BagPopUp>
          <S.Title>Carrinho de compras ({totalOnBag})</S.Title>
          <S.ProductsWrap>
            <CartItem
              id={0}
              image={'tests_5be5068aaf.png'}
              name={'Banana'}
              price={9.99}
              subscription={true}
              quantity={3}
              parentCallback={handleDeleteItem}
            />
            <CartItem
              id={1}
              image={'tests_5be5068aaf.png'}
              name={'Amendoim'}
              price={3.99}
              subscription={false}
              quantity={4}
              parentCallback={handleDeleteItem}
            />
            <CartItem
              id={2}
              image={'tests_5be5068aaf.png'}
              name={'Banana com canela'}
              price={2.99}
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
