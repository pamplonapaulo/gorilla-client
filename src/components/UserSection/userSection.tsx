import React, { useState } from 'react'

import RegisterForm from 'components/RegisterForm'

import User from 'components/User'
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
        {userLog !== 'false' ? <h1>{`Olá, ${userLog}!`}</h1> : <h1></h1>}
        <div onClick={() => handleUser()}>
          <User />
        </div>
        <div onClick={() => handleBag()}>
          <Bag />
        </div>
      </S.Container>
      {popup && (
        <S.Overlay>
          {userLog === 'false' ? (
            <RegisterForm popup={popup} setPopup={setPopup} />
          ) : (
            <h1>{`Olá, ${userLog}!`}</h1>
          )}
        </S.Overlay>
      )}
    </>
  )
}

export default UserSection
