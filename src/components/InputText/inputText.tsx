import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  hasError: boolean
}

const InputText = ({ children, hasError }: Props) => (
  <>
    {!hasError && <S.Input>{children}</S.Input>}
    {hasError && <S.InputRed>{children}</S.InputRed>}
  </>
)

export default InputText
