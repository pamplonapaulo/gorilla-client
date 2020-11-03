/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import axios from 'axios'
import { endpoint } from 'lib/apollo/client'

import Button from 'components/Button'
import ErrorMessage from 'components/ErrorMessage'

import { isEmailValid, postcodeMask } from 'utils/formValidations'

import { useOverlay } from 'contexts'

import * as S from './styles'

const FormRegister = () => {
  const [form, setForm] = useState(true)
  const [message, setMessage] = useState('')
  const [passwordAlert, setPasswordAlert] = useState(false)
  const { overlay, setOverlay } = useOverlay()

  const [validation, setValidation] = useState({
    username: true,
    lastName: true,
    postCode: true,
    email: true,
    password: true
  })

  const [inputData, setInputData] = useState({
    username: '',
    lastName: '',
    postCode: '',
    email: '',
    password: ''
  })

  const handleFocusIn = (e: React.FocusEvent<HTMLInputElement>) => {
    if (window.innerWidth < 1024) {
      window.scrollTo(0, e.target.offsetTop - 75)
    }
  }

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target

    if (target.name === 'username' && target.value.length > 1) {
      setValidation({
        ...validation,
        [target.name]: true
      })
    } else if (target.name === 'username' && target.value.length <= 1) {
      setValidation({
        ...validation,
        [target.name]: false
      })
    }

    if (target.name === 'lastName' && target.value.length > 1) {
      setValidation({
        ...validation,
        [target.name]: true
      })
    } else if (target.name === 'lastName' && target.value.length <= 1) {
      setValidation({
        ...validation,
        [target.name]: false
      })
    }

    if (target.name === 'postCode' && inputData.postCode.length === 9) {
      setValidation({
        ...validation,
        [target.name]: true
      })
    } else if (target.name === 'postCode' && inputData.postCode.length !== 9) {
      setValidation({
        ...validation,
        [target.name]: false
      })
    }

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

    if (target.name === 'password' && target.value.length >= 8)
      setPasswordAlert(false)

    if (target.name === 'password' && target.value.length < 8)
      setPasswordAlert(true)

    if (target.name === 'postCode')
      setInputData({
        ...inputData,
        [target.name]: postcodeMask(target.value)
      })

    if (target.name === 'email' && isEmailValid(target.value))
      setInputData({
        ...inputData,
        [target.name]: target.value
      })

    if (
      target.name === 'password' ||
      target.name === 'username' ||
      target.name === 'lastName'
    )
      setInputData({
        ...inputData,
        [target.name]: target.value
      })
  }

  const handleRegister = () => {
    const errors = []

    if (
      inputData.username !== '' &&
      inputData.lastName !== '' &&
      inputData.postCode.length === 9 &&
      inputData.email !== '' &&
      inputData.password.length >= 8
    )
      createCustomer()

    if (inputData.username === '') {
      errors.push('username')
    }

    if (inputData.lastName === '') {
      errors.push('lastName')
    }

    if (inputData.postCode.length !== 9) {
      errors.push('postCode')
    }

    if (inputData.email === '') {
      errors.push('email')
    }

    if (inputData.password.length < 8) {
      errors.push('password')
    }

    if (errors.length > 0) {
      let alert = {}
      errors.forEach((err) => (alert = { ...alert, [err]: false }))
      setValidation({
        ...validation,
        ...alert
      })
      setMessage('Preencha os campos corretamente')
    }
  }

  const createCustomer = () => {
    const variables = {
      data: {
        ...inputData
      }
    }
    axios
      .post(endpoint + 'auth/local/register', {
        username: variables.data.username,
        lastName: variables.data.lastName,
        postCode: variables.data.postCode,
        email: variables.data.email,
        password: variables.data.password
      })
      .then((response: { data: { user: any; jwt: any } }) => {
        // Handle success.
        console.log('User profile', response.data.user)
        console.log('User token', response.data.jwt)
        setForm(!form)
        setTimeout(() => {
          setOverlay(!overlay)
        }, 6000)
      })
      .catch((error: { response: any }) => {
        // Handle error.
        setMessage(error.response.data.message[0].messages[0].message)
      })
  }

  return (
    <>
      {form && (
        <>
          <S.Form>
            <S.Field>
              <S.Legend>Cadastro</S.Legend>
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
                onFocus={handleFocusIn}
                type="text"
                name="username"
                placeholder="Nome"
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.username}
              />
              <S.Input
                onFocus={handleFocusIn}
                type="text"
                name="lastName"
                placeholder="Sobrenome"
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.lastName}
              />
              <S.Input
                onFocus={handleFocusIn}
                type="text"
                name="postCode"
                placeholder="CEP"
                pattern="(\d{5})-(\d{3})"
                value={inputData.postCode}
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.postCode}
              />
              <S.Input
                onFocus={handleFocusIn}
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.email}
              />
              <S.Input
                onFocus={handleFocusIn}
                type="password"
                name="password"
                placeholder="Senha"
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.password}
              />
              <S.PasswordAlert isValid={passwordAlert}>
                Mínimo de 8 caracteres.
              </S.PasswordAlert>
            </S.Field>
          </S.Form>
          <S.BtnSave onClick={() => handleRegister()}>
            <Button colorOne={'#facb37'} colorTwo={'#000'}>
              Gravar
            </Button>
          </S.BtnSave>
        </>
      )}
      {!form && (
        <S.Success>
          {'Enviamos um email para que você valide o seu cadastro.'}
          <br />
          <br />
          {'Se necessário, verifique o ANTI-SPAM do seu email'}
        </S.Success>
      )}
    </>
  )
}

export default FormRegister
