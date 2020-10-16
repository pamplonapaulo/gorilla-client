/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

import Button from 'components/Button'
import ErrorMessage from 'components/ErrorMessage'

import { useUser } from 'contexts'

import { isEmailValid } from 'utils/formValidations'

import axios from 'axios'
import { endpoint } from 'lib/apollo/client'

import * as S from './styles'

const FormLogin = () => {
  const { setUserLog } = useUser()

  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target

    setInputData({
      ...inputData,
      [target.name]: target.value
    })
  }

  const handleLogin = () => {
    if (isEmailValid(inputData.email) && inputData.password !== '')
      loginCustomer()

    if (!isEmailValid(inputData.email))
      setMessage('Algo estranho no campo "Email"')

    if (inputData.password === '') setMessage('Preencha o campo "Senha"')

    if (!isEmailValid(inputData.email) && inputData.password === '')
      setMessage('"Senha" e "Email" não foram preenchidos corretamente.')
  }

  const loginCustomer = () => {
    axios
      .post(endpoint + 'auth/local', {
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
        console.log(
          'An error occurred:',
          error.response.data.message[0].messages[0].message
        )
      })
  }

  return (
    <>
      <S.Form>
        <S.Field>
          <S.Legend>ÁREA DO CLIENTE</S.Legend>
          {message !== '' && <ErrorMessage>{message}</ErrorMessage>}
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
      <div onClick={() => handleLogin()}>
        <Button bg={'#facb37'}>Entrar</Button>
      </div>
    </>
  )
}

export default FormLogin
