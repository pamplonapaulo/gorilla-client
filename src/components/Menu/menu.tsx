import React from 'react'
import * as S from './styles'
import { useMenu } from 'contexts'

const Menu = ({ pages = ['conheça', 'compre', 'assine', 'chame'] }) => {
  const { menu } = useMenu()

  return (
    <S.SideBar className={menu ? 'active' : ''}>
      <S.List>
        {pages.map((page) => (
          <S.Item key={page}>
            <S.A>
              <S.H1>{page}</S.H1>
            </S.A>
          </S.Item>
        ))}
      </S.List>
    </S.SideBar>
  )
}

export default Menu
