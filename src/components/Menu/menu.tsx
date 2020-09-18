import React from 'react'
import Link from 'next/link'

import * as S from './styles'
import { useMenu } from 'contexts'

const Menu = ({
  pages = [
    ['home', '/home'],
    ['conheça', '/conheca'],
    ['compre', '/compre'],
    ['assine', '/assine'],
    ['chame', '/chame'],
    ['siga', '/siga']
  ]
}) => {
  const { menu } = useMenu()

  return (
    <S.SideBar className={menu ? 'active' : ''}>
      <S.List>
        {pages.map((page) => (
          <Link key={page[0]} href={page[1]}>
            <S.Item>
              <S.A>
                <S.H1>{page[0]}</S.H1>
              </S.A>
            </S.Item>
          </Link>
        ))}
      </S.List>
    </S.SideBar>
  )
}

export default Menu
