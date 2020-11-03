import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  colorOne: string
  colorTwo: string
}

const Button = ({ children, colorOne, colorTwo }: Props) => (
  <>
    <S.Btn theme={{ primaryColor: colorOne, secondaryColor: colorTwo }}>
      {children}
    </S.Btn>
  </>
)

export default Button
