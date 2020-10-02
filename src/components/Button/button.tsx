import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  bg: string
}

const Button = ({ children, bg }: Props) => (
  <>
    <S.Btn color={bg}>{children}</S.Btn>
  </>
)

export default Button
