import React, { useState, useEffect } from 'react'

import User from 'components/User'
import UserOn from 'components/UserOn'
import Bag from 'components/Bag'

import { useUser, useOverlay, useBag } from 'contexts'

import * as S from './styles'

const UserSection = () => {
  const { userLog } = useUser()
  const { overlay, setOverlay } = useOverlay()
  const { bag } = useBag()
  const [totalOnBag, setTotalOnBag] = useState(0)

  const handleUser = () => {
    console.log('handle user')
    setOverlay(!overlay)
  }

  const handleBag = () => {
    console.log('bag')
  }

  useEffect(() => {
    console.log(bag)
    setTotalOnBag(bag.toBuy.length - 1 + (bag.toSubscribe.length - 1))
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
            <div onClick={() => handleUser()}>
              <User />
            </div>
          </>
        )}
        <div onClick={() => handleBag()}>
          <Bag />
          {totalOnBag > 0 && <S.OnBag>{totalOnBag}</S.OnBag>}
        </div>
      </S.Container>
    </>
  )
}

export default UserSection
