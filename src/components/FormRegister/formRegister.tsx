/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
import { endpoint } from 'lib/apollo/client'

import Button from 'components/Button'
import ErrorMessage from 'components/ErrorMessage'

import { isEmailValid, postcodeMask } from 'utils/formValidations'

// import { useUser } from 'contexts'

import * as S from './styles'

type Props = {
  popup: boolean
  setPopup: Dispatch<SetStateAction<boolean>>
}

const FormRegister = ({ popup, setPopup }: Props) => {
  // const { setUserLog } = useUser()

  const [form, setForm] = useState(true)
  const [message, setMessage] = useState('')

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
    if (
      inputData.username !== '' &&
      inputData.lastName !== '' &&
      inputData.postCode.length === 9 &&
      inputData.email !== '' &&
      inputData.password.length >= 8
    ) {
      createCustomer()
    } else if (inputData.username === '') {
      setMessage('Preencha o campo "Nome"')
    } else if (inputData.lastName === '') {
      setMessage('Preencha o campo "Sobrenome"')
    } else if (inputData.postCode.length !== 9) {
      setMessage('Preencha o campo "CEP"')
    } else if (inputData.email === '') {
      setMessage('Preencha o campo "Email"')
    } else if (inputData.password.length < 8) {
      setMessage('"Senha" deve conter pelo menos 8 caracteres')
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
          setPopup(!popup)
        }, 6000)
      })
      .catch((error: { response: any }) => {
        // Handle error.
        console.log(
          'error:',
          error.response.data.message[0].messages[0].message
        )
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
              {message !== '' && <ErrorMessage>{message}</ErrorMessage>}
              <S.Input
                type="text"
                name="username"
                placeholder="Nome"
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.username}
              />
              <S.Input
                type="text"
                name="lastName"
                placeholder="Sobrenome"
                onChange={handleInputChange}
                onBlur={handleFocusOut}
                isValid={validation.lastName}
              />
              <S.Input
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
            </S.Field>
          </S.Form>
          <div onClick={() => handleRegister()}>
            <Button bg={'#facb37'}>Gravar</Button>
          </div>
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
