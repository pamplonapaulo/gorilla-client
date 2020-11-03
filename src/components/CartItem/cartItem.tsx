import React from 'react'
import { getImageUrl } from 'utils/getImageUrl'
import Input from 'components/Input'
import CloseIcon from 'components/CloseIcon'

import * as S from './styles'

type Props = {
  image: string
  name: string
  price: string
  subscription: boolean
  quantity: number
  parentCallback: (total: number) => void
}

const CartItem = ({
  image,
  name,
  price,
  subscription,
  quantity,
  parentCallback
}: Props) => {
  const handleQuantity = (total: number) => {
    console.log(total)
  }

  const handleDelete = (e: React.MouseEvent) => {
    const target = e.target
    console.log('this is cartItem.tsx')
    console.log(target)
    parentCallback(0)
  }

  return (
    <>
      <S.Container>
        <S.Thumb>
          <S.ImgWrap
            src={getImageUrl('/uploads/thumbnail_' + image)}
            alt={'p.Name'}
            unsized
          />
        </S.Thumb>
        <S.Details>
          <S.Info>
            <S.Text>{name}</S.Text>
            {subscription && <S.Text>Assinatura</S.Text>}
            <S.Text>R$ {price}</S.Text>
          </S.Info>
          <Input
            parentCallback={handleQuantity}
            scale={'0.8'}
            value={quantity}
          />
        </S.Details>
        <S.DeleteBtn onClick={handleDelete}>
          <CloseIcon color={'#47311b'} />
        </S.DeleteBtn>
      </S.Container>
    </>
  )
}

export default CartItem
