import React, { useState } from 'react'
import User from 'components/User'
import Bag from 'components/Bag'

import Button from 'components/Button'

import * as S from './styles'

const UserSection = () => {
  const [popup, setPopup] = useState(false)

  const handleUser = () => {
    setPopup(!popup)
    console.log('user login')
  }

  const handleBag = () => {
    console.log('bag')
  }

  return (
    <>
      <S.Container>
        <div onClick={() => handleUser()}>
          <User />
        </div>
        <div onClick={() => handleBag()}>
          <Bag />
        </div>
      </S.Container>
      {popup && (
        <S.Overlay>
          <S.SignUp>
            <S.Form>
              <S.Field>
                <S.Legend>Cadastro</S.Legend>
                <S.Input type="text" name="firstName" placeholder="Nome" />
                <S.Input type="text" name="lastNname" placeholder="Sobrenome" />
                <S.Input
                  type="text"
                  name="postcode"
                  placeholder="CEP"
                  pattern="(\d{5})-(\d{3})"
                />
                <S.Input type="email" name="email" placeholder="E-mail" />
                <S.Input type="password" name="password" placeholder="Senha" />
              </S.Field>
            </S.Form>
            <Button bg={'#facb37'}>Gravar</Button>
          </S.SignUp>
        </S.Overlay>
      )}
    </>
  )
}

export default UserSection
