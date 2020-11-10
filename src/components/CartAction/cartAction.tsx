import React, { useState } from 'react'
import Link from 'next/link'

import Button from 'components/Button'
import Arrow from 'components/Arrow'

import * as S from './styles'

type Props = {
  isVisible: boolean
  actionLink: string
  actionName: string
}

const CartAction = ({ isVisible, actionLink, actionName }: Props) => {
  const [arrowColor, setArrowColor] = useState('#47311b')

  return (
    <S.Container>
      {isVisible && (
        <Link href={actionLink}>
          <div
            style={{ width: 'fit-content' }}
            onMouseOver={() => setArrowColor('#2DA650')}
            onMouseLeave={() => setArrowColor('#47311b')}
          >
            <Button colorOne={'#47311b'} colorTwo={'#2DA650'}>
              <span style={{ margin: '0 8px' }}>{actionName}</span>
              <Arrow color={arrowColor} rotate={'180'} />
            </Button>
          </div>
        </Link>
      )}
    </S.Container>
  )
}

export default CartAction
