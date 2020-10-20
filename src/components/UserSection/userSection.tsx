import React, { useState } from 'react'

import FormLogin from 'components/FormLogin'
import FormRegister from 'components/FormRegister'

import User from 'components/User'
import CheckMark from 'components/CheckMark'
import UserOn from 'components/UserOn'
import Bag from 'components/Bag'
import Button from 'components/Button'
import Back from 'components/Back'

import { useUser } from 'contexts'

import * as S from './styles'

const UserSection = () => {
  const { userLog } = useUser()

  const [popup, setPopup] = useState<boolean>(false)
  const [register, setRegister] = useState<boolean>(false)

  const handleUser = () => {
    setPopup(!popup)
  }

  const handleBag = () => {
    console.log('bag')
  }

  const handleRegister = () => {
    setRegister(!register)
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
          <S.PopUp>
            {userLog === 'false' && !register && (
              <>
                <S.Top>
                  <FormLogin />
                </S.Top>
                <S.Bottom>
                  <S.H>Não tem cadastro?</S.H>
                  <div onClick={() => handleRegister()}>
                    <Button bg={'#facb37'}>Cadastrar</Button>
                  </div>
                </S.Bottom>
              </>
            )}
            {userLog === 'false' && register && (
              <>
                <div onClick={() => handleRegister()}>
                  <Back color={'#facb37'} />
                </div>
                <FormRegister popup={popup} setPopup={setPopup} />
              </>
            )}
            {userLog !== 'false' && (
              <>
                <S.Top>
                  <S.HWrap>{`Bem-vindo(a), ${userLog}`}</S.HWrap>
                  <CheckMark />
                </S.Top>
                <S.Bottom>
                  <div onClick={() => handleUser()}>
                    <Button bg={'#facb37'}>Voltar</Button>
                  </div>
                </S.Bottom>
              </>
            )}
          </S.PopUp>
        </S.Overlay>
      )}
    </>
  )
}

export default UserSection
