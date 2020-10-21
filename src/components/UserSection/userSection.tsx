import React from 'react'

import User from 'components/User'
import UserOn from 'components/UserOn'
import Bag from 'components/Bag'

import { useUser, useOverlay } from 'contexts'

import * as S from './styles'

const UserSection = () => {
  const { userLog } = useUser()
  const { overlay, setOverlay } = useOverlay()

  const handleUser = () => {
    console.log('handle user')
    setOverlay(!overlay)
  }

  const handleBag = () => {
    console.log('bag')
  }

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
        </div>
      </S.Container>
    </>
  )
}

export default UserSection
