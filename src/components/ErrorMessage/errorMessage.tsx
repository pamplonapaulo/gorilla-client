import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  bottom: string
  top: string
  bottomMobile: string
  topMobile: string
}

const ErrorMessage = ({
  children,
  bottom,
  top,
  bottomMobile,
  topMobile
}: Props) => (
  <>
    <S.Error
      top={top}
      topMobile={topMobile}
      bottom={bottom}
      bottomMobile={bottomMobile}
    >
      {children}
    </S.Error>
  </>
)

export default ErrorMessage
