import React from 'react'

import { useBagOverlay } from 'contexts'

import * as S from './styles'

const BagOverlay = () => {
  const { bagOverlay } = useBagOverlay()

  return (
    <>
      {bagOverlay && (
        <S.BagPopUp>
          <h1>BAG</h1>
        </S.BagPopUp>
      )}
    </>
  )
}

export default BagOverlay
