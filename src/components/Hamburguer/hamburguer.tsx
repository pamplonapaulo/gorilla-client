import React from 'react'
import * as S from './styles'
import { useMenu } from 'contexts'

const Hamburguer = () => {
  const { menu, setMenu } = useMenu()

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <S.Wrapper>
      <S.Btn onClick={() => handleMenu()}>
        <S.Span className={menu ? 'active' : ''}></S.Span>
      </S.Btn>
    </S.Wrapper>
  )
}

export default Hamburguer
