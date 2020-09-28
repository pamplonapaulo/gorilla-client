import React from 'react'
import Link from 'next/link'
import User from 'components/User'
import Bag from 'components/Bag'

import * as S from './styles'

const Logotype = () => (
  <S.Container>
    <Link href={'/home'}>
      <User />
    </Link>
    <Link href={'/home'}>
      <Bag />
    </Link>
  </S.Container>
)

export default Logotype
