import React, { useState, useEffect } from 'react'

import * as S from './styles'

type Props = {
  parentCallback: (total: number) => void
  scale: string
  value: number
  isCartPage?: boolean
}

const Input = ({ parentCallback, scale, value, isCartPage }: Props) => {
  const [quantity, setQuantity] = useState(value)

  useEffect(() => {
    setQuantity(value)
  }, [value, setQuantity])

  function changeQuantity(value: string) {
    if (value === '-' && quantity > 0) {
      parentCallback(quantity - 1)
      setQuantity(quantity - 1)
    } else if (value === '+') {
      parentCallback(quantity + 1)
      setQuantity(quantity + 1)
    }
  }

  return (
    <>
      <S.Container theme={{ size: scale }}>
        <S.Btn onClick={() => changeQuantity('-')}>{'-'}</S.Btn>
        <S.FakeInput
          theme={{ quantity: scale === '1' ? quantity : 0, isCartPage }}
        >
          <S.P>{quantity}</S.P>
        </S.FakeInput>
        <S.Btn onClick={() => changeQuantity('+')}>{'+'}</S.Btn>
        <S.HiddenInput defaultValue={quantity} type="number" min="0" />
      </S.Container>
    </>
  )
}

export default Input
