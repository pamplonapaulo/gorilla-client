import React, { useState } from 'react'
import CREATE_POTENTIAL_CLIENT from 'graphql/mutations/createPotentialClient'
import client from 'graphql/client'

import User from 'components/User'
import Bag from 'components/Bag'

import Button from 'components/Button'

import * as S from './styles'

const UserSection = () => {
  const [popup, setPopup] = useState(false)
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    postCode: '',
    password: ''
  })

  const handleUser = () => {
    setPopup(!popup)
  }

  const handleBag = () => {
    console.log('bag')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setInputData({
      ...inputData,
      [name]: value
    })
  }

  const createCustomer = () => {
    const variables = {
      data: {
        ...inputData
      }
    }

    async function submit() {
      const data = await client.request(CREATE_POTENTIAL_CLIENT, variables)
      console.log(JSON.stringify(data, undefined, 2))
    }
    submit().catch((error) => console.error(error))
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
                <S.Input
                  type="text"
                  name="firstName"
                  placeholder="Nome"
                  onChange={handleInputChange}
                />
                <S.Input
                  type="text"
                  name="lastName"
                  placeholder="Sobrenome"
                  onChange={handleInputChange}
                />
                <S.Input
                  type="text"
                  name="postCode"
                  placeholder="CEP"
                  pattern="(\d{5})-(\d{3})"
                  onChange={handleInputChange}
                />
                <S.Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleInputChange}
                />
                <S.Input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  onChange={handleInputChange}
                />
              </S.Field>
            </S.Form>
            <div onClick={() => createCustomer()}>
              <Button bg={'#facb37'}>Gravar</Button>
            </div>
          </S.SignUp>
        </S.Overlay>
      )}
    </>
  )
}

export default UserSection
