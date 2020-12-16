import React from 'react'

import MountOrders from 'components/MountOrders'

import { useBagOverlay } from 'contexts'

import * as S from './styles'

const BagOverlay = () => {
  const { bagOverlay, setBagOverlay } = useBagOverlay()

  return (
    <>
      <S.BagPopUp
        onMouseLeave={() => setBagOverlay(false)}
        onMouseEnter={() => setBagOverlay(true)}
        theme={{ isVisible: bagOverlay }}
      >
        <MountOrders />
      </S.BagPopUp>
    </>
  )
}

export default BagOverlay
