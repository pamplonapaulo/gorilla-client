import React, { useState } from 'react'

import RegisterForm from 'components/RegisterForm'

import User from 'components/User'
import UserOn from 'components/UserOn'
import Bag from 'components/Bag'

import { useUser } from 'contexts'

import * as S from './styles'

const UserSection = () => {
  const { userLog } = useUser()

  const [popup, setPopup] = useState<boolean>(false)

  const handleUser = () => {
    setPopup(!popup)
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
      {popup && (
        <S.Overlay>
          {userLog === 'false' && (
            <RegisterForm popup={popup} setPopup={setPopup} />
          )}
        </S.Overlay>
      )}
    </>
  )
}

export default UserSection
