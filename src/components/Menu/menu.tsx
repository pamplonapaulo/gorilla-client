import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import * as S from './styles'
import { useMenu } from 'contexts'

import Instagram from 'components/Instagram'
import Whatsapp from 'components/Whatsapp'

const Menu = ({
  pages = [
    ['debug', '/page-debug', 'true'],
    ['snacks', '/snacks', 'true'],
    ['whatsapp', 'https://api.whatsapp.com/send?phone=447471341741'],
    ['instagram', 'https://www.instagram.com/gorillapack/']
  ]
}) => {
  const { menu, setMenu } = useMenu()
  const [current, setCurrent] = useState('string')
  const [instagramColor, setInstagramColor] = useState('#47311b')
  const [whatsappColor, setWhatsappColor] = useState('#47311b')

  Router.events.on('routeChangeStart', (url) => {
    const match: RegExpExecArray | null = /\/[a-z]{3,}/g.exec(url)

    if (match && url === '/home') {
      setCurrent(match[0])
    } else if (match && url === '/snacks') {
      setCurrent(match[0])
      setMenu(!menu)
    } else if (match) {
      setCurrent(match[0])
    }
  })

  const handleHover = (name: string, hover: boolean) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      if (name === 'whatsapp' && hover === true) setWhatsappColor('#EF8321')
      if (name === 'whatsapp' && hover === false) setWhatsappColor('#47311b')
      if (name === 'instagram' && hover === true) setInstagramColor('#EF8321')
      if (name === 'instagram' && hover === false) setInstagramColor('#47311b')
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setWhatsappColor('#2da650')
      setInstagramColor('#2da650')
    }
  }, [])

  return (
    <S.SideBar className={menu ? 'active' : ''}>
      <S.List>
        {pages.map((page) => (
          <S.D key={page[0]}>
            {page[2] && (
              <Link href={page[1]}>
                <S.Item className={page[1] == current ? 'active' : ''}>
                  <S.H1>{page[0]}</S.H1>
                </S.Item>
              </Link>
            )}
            {!page[2] && (
              <S.A href={page[1]} target="_blank" rel="noreferrer">
                <S.Item
                  className={page[1] == current ? 'active' : ''}
                  onMouseOver={() => handleHover(page[0], true)}
                  onMouseLeave={() => handleHover(page[0], false)}
                >
                  {page[0] === 'instagram' && (
                    <Instagram color={instagramColor} />
                  )}
                  {page[0] === 'whatsapp' && <Whatsapp color={whatsappColor} />}
                  <S.H1>{page[0]}</S.H1>
                </S.Item>
              </S.A>
            )}
          </S.D>
        ))}
      </S.List>
    </S.SideBar>
  )
}

export default Menu
