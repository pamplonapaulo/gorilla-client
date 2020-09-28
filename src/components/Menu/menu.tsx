import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import * as S from './styles'
import { useMenu } from 'contexts'

const Menu = ({
  pages = [
    ['conheça', '/conheca'],
    ['snacks', '/snacks'],
    ['chame', '/chame'],
    ['siga', '/siga']
  ]
}) => {
  const { menu } = useMenu()
  const [current, setCurrent] = useState('string')

  Router.events.on('routeChangeStart', (url) => {
    const match: RegExpExecArray | null = /\/[a-z]{3,}/g.exec(url)

    if (match) {
      setCurrent(match[0])
    }
  })

  return (
    <S.SideBar className={menu ? 'active' : ''}>
      <S.List>
        {pages.map((page) => (
          <Link key={page[0]} href={page[1]}>
            <S.Item className={page[1] == current ? 'active' : ''}>
              <S.H1>{page[0]}</S.H1>
            </S.Item>
          </Link>
        ))}
      </S.List>
    </S.SideBar>
  )
}

export default Menu
