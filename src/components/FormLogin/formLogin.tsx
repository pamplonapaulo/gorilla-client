/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

import Button from 'components/Button'

import { useUser } from 'contexts'

import axios from 'axios'

import * as S from './styles'

const FormLogin = () => {
  const { setUserLog } = useUser()

  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setInputData({
      ...inputData,
      [name]: value
    })
  }

  const loginCustomer = () => {
    axios
      .post('http://localhost:1337/auth/local', {
        identifier: inputData.email,
        password: inputData.password
      })
      .then((response: { data: { user: any; jwt: any } }) => {
        // Handle success.
        console.log('Well done!')
        console.log('User profile', response.data.user)
        console.log('User token', response.data.jwt)
        setUserLog(response.data.user.username)
      })
      .catch((error: { response: any }) => {
        // Handle error.
        console.log('An error occurred:', error.response)
      })
  }

  return (
    <>
      <S.Form>
        <S.Field>
          <S.Legend>ÁREA DO CLIENTE</S.Legend>
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
      <div onClick={() => loginCustomer()}>
        <Button bg={'#facb37'}>Entrar</Button>
      </div>
    </>
  )
}

export default FormLogin
