import React from 'react'

import * as S from './styles'

const SubscriptionSettings = () => {
  return (
    <S.Wrapper>
      <S.Title>Como quer sua assinatura?</S.Title>

      <S.Field>
        <S.Item>
          <S.Label>Frequência:</S.Label>
          <S.Select>
            <S.Option>A cada 1 semana</S.Option>
            <S.Option>A cada 2 semanas</S.Option>
            <S.Option>A cada 3 semanas</S.Option>
            <S.Option>A cada 4 semanas</S.Option>
          </S.Select>
        </S.Item>

        <S.Item>
          <S.Label>Dia:</S.Label>
          <S.Select>
            <S.Option>Qualquer dia</S.Option>
            <S.Option>Segunda-feira</S.Option>
            <S.Option>Terça-feira</S.Option>
            <S.Option>Quarta-feira</S.Option>
            <S.Option>Quinta-feira</S.Option>
            <S.Option>Sexta-feira</S.Option>
          </S.Select>
        </S.Item>

        <S.Item>
          <S.Label>Período:</S.Label>
          <S.Select>
            <S.Option>Qualquer horário</S.Option>
            <S.Option>Manhã (10h às 14h)</S.Option>
            <S.Option>Tarde (14h às 19h)</S.Option>
          </S.Select>
        </S.Item>

        <S.Item>
          <S.Label>Deixar na portaria:</S.Label>
          <S.Select>
            <S.Option>Sim, pode!</S.Option>
            <S.Option>Não, quero receber em mãos</S.Option>
          </S.Select>
        </S.Item>
      </S.Field>
    </S.Wrapper>
  )
}

export default SubscriptionSettings
