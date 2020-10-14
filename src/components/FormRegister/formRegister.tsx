/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
import { endpoint } from 'lib/apollo/client'

import Button from 'components/Button'

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

  const [inputData, setInputData] = useState({
    username: '',
    lastName: '',
    postCode: '',
    email: '',
    password: '',
    confirmed: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target

    setInputData({
      ...inputData,
      [target.name]: target.value
    })
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
              {message !== '' && <S.Error>{message}</S.Error>}
              <S.Input
                type="text"
                name="username"
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
