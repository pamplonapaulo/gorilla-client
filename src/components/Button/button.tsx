import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  colorOne: string
  colorTwo: string
  isBlinking?: boolean
}

const Button = ({
  children,
  colorOne,
  colorTwo,
  isBlinking = false
}: Props) => (
  <>
    <S.Btn
      theme={{
        primaryColor: colorOne,
        secondaryColor: colorTwo,
        isBlinking: isBlinking
      }}
    >
      {children}
    </S.Btn>
  </>
)

export default Button
