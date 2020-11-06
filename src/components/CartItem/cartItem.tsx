import React, { useState, useEffect } from 'react'
import { getImageUrl } from 'utils/getImageUrl'
import Input from 'components/Input'
import CloseIcon from 'components/CloseIcon'
import { useBag } from 'contexts'

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
  const { bag } = useBag()
  const [itemObj] = useState(item)
  const [totalItems, setTotalItems] = useState(quantity)

  useEffect(() => {
    const match = (p: BagItem) => p.id == itemObj.id
    let selected

    if (bag.some(match)) {
      selected = bag.filter(match)
      setTotalItems(
        subscription
          ? selected[0].quantityToSubscribe
          : selected[0].quantityToBuy
      )
    }
  }, [bag, itemObj.id, subscription])

  // useEffect(() => {
  //   parentCallback(itemObj, subscription, totalItems)
  // }, [totalItems, itemObj, subscription, parentCallback])

  // useCallback(() => {
  //   if (subscription) {
  //     setItemObjt({
  //       ...itemObj,
  //       quantityToSubscribe: totalItems
  //     })
  //   }

  //   if (subscription) {
  //     setItemObjt({
  //       ...itemObj,
  //       quantityToBuy: totalItems
  //     })
  //   }
  //   parentCallback(itemObj)
  // }, [totalItems, subscription, itemObj, parentCallback])

  const handleQuantity = (total: number) => {
    setTotalItems(total)
    parentCallback(itemObj, subscription, total)
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
            <S.Text>R$ {item.price * totalItems}</S.Text>
          </S.Info>
          <Input
            parentCallback={handleQuantity}
            scale={'0.8'}
            value={totalItems}
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
