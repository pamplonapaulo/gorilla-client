import React from 'react'
import { getImageUrl } from 'utils/getImageUrl'
import Input from 'components/Input'
import CloseIcon from 'components/CloseIcon'

import * as S from './styles'

type Props = {
  id: number
  image: string
  name: string
  price: number
  subscription: boolean
  quantity: number
  parentCallback: (total: number, id: number) => void
}

const CartItem = ({
  id,
  image,
  name,
  price,
  subscription,
  quantity,
  parentCallback
}: Props) => {
  const handleQuantity = (total: number) => {
    parentCallback(total, id)
  }

  const handleDelete = (id: number) => {
    parentCallback(0, id)
  }

  return (
    <>
      <S.Container>
        <S.Thumb>
          <S.ImgWrap
            src={getImageUrl('/uploads/thumbnail_' + image)}
            alt={name}
            unsized
          />
        </S.Thumb>
        <S.Details>
          <S.Info>
            <S.Text>{name}</S.Text>
            {subscription && <S.Text>Assinatura</S.Text>}
            <S.Text>R$ {price * quantity}</S.Text>
          </S.Info>
          <Input
            parentCallback={handleQuantity}
            scale={'0.8'}
            value={quantity}
          />
        </S.Details>
        <S.DeleteBtn onClick={() => handleDelete(id)}>
          <CloseIcon color={'#47311b'} />
        </S.DeleteBtn>
      </S.Container>
    </>
  )
}

export default CartItem
