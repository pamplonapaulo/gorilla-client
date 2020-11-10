import React, { useState, useEffect } from 'react'
import { getImageUrl } from 'utils/getImageUrl'
import Input from 'components/Input'
import CloseIcon from 'components/CloseIcon'

import { BagItem } from 'types/api'

import * as S from './styles'

type Props = {
  subscription: boolean
  quantity: number
  parentCallback: (
    item: BagItem,
    subscription: boolean,
    totalItems: number
  ) => void
  item: BagItem
}

const CartItem = ({ subscription, quantity, parentCallback, item }: Props) => {
  const [multiple, setMultiple] = useState(quantity)

  useEffect(() => {
    setMultiple(quantity)
  }, [quantity, setMultiple])

  const handleQuantity = (total: number) => {
    const updated = {
      ...item,
      quantityToSubscribe: subscription ? total : item.quantityToSubscribe,
      quantityToBuy: !subscription ? total : item.quantityToBuy
    }
    setMultiple(total)
    parentCallback(updated, subscription, total)
  }

  return (
    <>
      <S.Container>
        <S.Thumb>
          <S.ImgWrap
            src={getImageUrl('/uploads/thumbnail_' + item.imgHash)}
            alt={item.name}
            unsized
          />
        </S.Thumb>
        <S.Details>
          <S.Info>
            <S.Text>{item.name}</S.Text>
            {subscription && <S.Text>Assinatura</S.Text>}
            <S.Text>R$ {(item.price * multiple).toFixed(2)}</S.Text>
          </S.Info>
          <Input
            parentCallback={handleQuantity}
            scale={'0.8'}
            value={multiple}
          />
        </S.Details>
        <S.DeleteBtn onClick={() => handleQuantity(0)}>
          <CloseIcon color={'#47311b'} />
        </S.DeleteBtn>
      </S.Container>
    </>
  )
}

export default CartItem
