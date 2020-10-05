import React, { Dispatch, SetStateAction, useState } from 'react'
import CREATE_POTENTIAL_CLIENT from 'graphql/mutations/createPotentialClient'
import client from 'graphql/client'

import Button from 'components/Button'

import { useUser } from 'contexts'

import * as S from './styles'

type Props = {
  popup: boolean
  setPopup: Dispatch<SetStateAction<boolean>>
}

const RegisterForm = ({ popup, setPopup }: Props) => {
  const { setUserLog } = useUser()

  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    postCode: '',
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

  const createCustomer = () => {
    const variables = {
      data: {
        ...inputData
      }
    }

    async function submit() {
      const data = await client.request(CREATE_POTENTIAL_CLIENT, variables)
      console.log(JSON.stringify(data, undefined, 2))
      setUserLog(data.createPotentialClient.potentialClient.firstName)
    }
    submit().catch((error) => console.error(error))

    setPopup(!popup)
  }

  return (
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
  )
}

export default RegisterForm
