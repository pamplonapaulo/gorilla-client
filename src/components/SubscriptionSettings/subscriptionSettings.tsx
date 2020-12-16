import React from 'react'

import Select from 'components/Select'

import * as S from './styles'

const SubscriptionSettings = () => {
  const handleSelect = (name: string) => {
    console.log(name)
    console.log('handleSelect')
  }
  return (
    <S.Wrapper>
      <S.Title>Como quer sua assinatura?</S.Title>

      <S.Field>
        <Select
          parentCallback={handleSelect}
          label="Frequência"
          options={[
            'A cada 1 semana',
            'A cada 2 semanas',
            'A cada 3 semanas',
            'A cada 4 semanas'
          ]}
        />
        <Select
          parentCallback={handleSelect}
          label="Dia"
          options={[
            'Qualquer dia',
            'Segunda-feira',
            'Terça-feira',
            'Quarta-feira',
            'Quinta-feira',
            'Sexta-feira'
          ]}
        />
        <Select
          parentCallback={handleSelect}
          label="Período"
          options={[
            'Qualquer horário',
            'Manhã (10h às 14h)',
            'Tarde (14h às 19h)'
          ]}
        />
        <Select
          parentCallback={handleSelect}
          label="Deixar na portaria"
          options={['Sim, pode!', 'Não, quero receber em mãos']}
        />
      </S.Field>
    </S.Wrapper>
  )
}

export default SubscriptionSettings
