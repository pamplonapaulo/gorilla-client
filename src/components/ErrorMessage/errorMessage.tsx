import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
}

const ErrorMessage = ({ children }: Props) => (
  <>
    <S.Error>{children}</S.Error>
  </>
)

export default ErrorMessage
