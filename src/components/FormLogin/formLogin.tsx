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

  const [validation, setValidation] = useState({
    email: true,
    password: true
  })

  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  })

  const [message, setMessage] = useState('')

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target

    if (target.name === 'email' && isEmailValid(target.value)) {
      setValidation({
        ...validation,
        [target.name]: true
      })
    } else if (target.name === 'email' && !isEmailValid(target.value)) {
      setValidation({
        ...validation,
        [target.name]: false
      })
    }

    if (target.name === 'password' && target.value.length >= 8) {
      setValidation({
        ...validation,
        [target.name]: true
      })
    } else if (target.name === 'password' && target.value.length < 8) {
      setValidation({
        ...validation,
        [target.name]: false
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target

    setInputData({
      ...inputData,
      [target.name]: target.value
    })
  }

  const handleLogin = () => {
    const errors = []

    if (isEmailValid(inputData.email) && inputData.password.length >= 8)
      loginCustomer()

    if (isEmailValid(inputData.email) && inputData.password.length < 8) {
      errors.push('password')
      setMessage('Senha incorreta.')
    }

    if (!isEmailValid(inputData.email)) {
      errors.push('email')
      setMessage('E-mail inválido.')
    }

    if (errors.length > 0) {
      let alert = {}
      errors.forEach((err) => (alert = { ...alert, [err]: false }))
      setValidation({
        ...validation,
        ...alert
      })
    }
  }

  const loginCustomer = () => {
    axios
      .post(endpoint + 'auth/local', {
        identifier: inputData.email,
        password: inputData.password
      })
      .then((response: { data: { user: any; jwt: any } }) => {
        // Handle success.
        console.log('User profile', response.data.user)
        console.log('User token', response.data.jwt)
        setUserLog(response.data.user.username)
      })
      .catch((error: { response: any }) => {
        // Handle error.
        setMessage(error.response.data.message[0].messages[0].message)
      })
  }

  return (
    <>
      <S.Form>
        <S.Field>
          <S.Legend>ÁREA DO CLIENTE</S.Legend>
          {message !== '' && (
            <ErrorMessage
              bottom={'unset'}
              bottomMobile={'unset'}
              top={'0'}
              topMobile={'58px'}
            >
              {message}
            </ErrorMessage>
          )}
          <S.Input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleInputChange}
            onBlur={handleFocusOut}
            isValid={validation.email}
          />
          <S.Input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleInputChange}
            onBlur={handleFocusOut}
            isValid={validation.password}
          />
          <S.Forgot href="#">Esqueceu a senha?</S.Forgot>
        </S.Field>
      </S.Form>
      <div onClick={() => handleLogin()}>
        <Button bg={'#facb37'}>Entrar</Button>
      </div>
    </>
  )
}

export default FormLogin
