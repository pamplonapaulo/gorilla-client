import React, { useState, useEffect } from 'react'

import FormLogin from 'components/FormLogin'
import FormRegister from 'components/FormRegister'

import CheckMark from 'components/CheckMark'
import Button from 'components/Button'
import Back from 'components/Back'

import { useUser, useOverlay } from 'contexts'

import * as S from './styles'

const LoginOverlay = () => {
  const { userLog } = useUser()
  const { overlay, setOverlay } = useOverlay()

  const [register, setRegister] = useState<boolean>(false)
  const [height, setHeight] = useState<string>('0px')

  const handleClose = () => {
    setOverlay(!overlay)
  }

  const handleRegister = () => {
    setRegister(!register)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight + 'px')
    }
  }, [])

  return (
    <>
      {overlay && (
        <S.Overlay height={height}>
          <S.PopUp height={height}>
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
                <S.BtnBack onClick={() => handleRegister()}>
                  <Back color={'#facb37'} />
                </S.BtnBack>
                <FormRegister />
              </>
            )}
            {userLog !== 'false' && (
              <>
                <S.Top>
                  <S.HWrap>{`Bem-vindo(a), ${userLog}`}</S.HWrap>
                  <CheckMark />
                </S.Top>
                <S.Bottom>
                  <div onClick={() => handleClose()}>
                    <Button bg={'#facb37'}>Fechar</Button>
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

export default LoginOverlay
