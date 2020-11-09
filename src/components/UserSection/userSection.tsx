import React, { useState, useEffect } from 'react'

import User from 'components/User'
import UserOn from 'components/UserOn'
import Bag from 'components/Bag'

import { useUser, useOverlay, useBag, useBagOverlay } from 'contexts'

import { BagItem } from 'types/api'

import * as S from './styles'

const UserSection = () => {
  const { userLog } = useUser()
  const { overlay, setOverlay } = useOverlay()
  const { bag } = useBag()
  const { setBagOverlay } = useBagOverlay()
  const [totalOnBag, setTotalOnBag] = useState(0)

  useEffect(() => {
    const hasBuys = (p: BagItem) => p.quantityToBuy > 0
    const hasSubs = (p: BagItem) => p.quantityToSubscribe > 0
    let total = 0

    if (bag.some(hasBuys)) {
      bag.filter(hasBuys).forEach((el) => {
        total += el.quantityToBuy
      })
    }
    if (bag.some(hasSubs)) {
      bag.filter(hasSubs).forEach((el) => {
        total += el.quantityToSubscribe
      })
    }
    setTotalOnBag(total)
  }, [bag, setTotalOnBag])

  return (
    <>
      <S.Container>
        {userLog !== 'false' ? (
          <>
            <UserOn />
            <S.Hello>{`Fala ${userLog}!`}</S.Hello>
          </>
        ) : (
          <>
            <S.BtnWrapper onClick={() => setOverlay(!overlay)}>
              <User />
            </S.BtnWrapper>
          </>
        )}
        <S.BtnWrapper
          onMouseLeave={() => setBagOverlay(false)}
          onMouseEnter={() => setBagOverlay(true)}
        >
          <Bag />
          {totalOnBag > 0 && <S.OnBag>{totalOnBag}</S.OnBag>}
        </S.BtnWrapper>
      </S.Container>
    </>
  )
}

export default UserSection
