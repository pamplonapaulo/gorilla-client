/* eslint-disable @typescript-eslint/no-explicit-any */
import App from 'next/app'
import React from 'react'

import Router from 'next/router'
import NProgress from 'nprogress'

import Head from 'next/head'

import { ApolloProvider } from '@apollo/client'
import { client } from 'lib/apollo/client'

import { MenuProvider, UserProvider, OverlayProvider } from 'contexts'

import Header from 'components/Header'
import LoginOverlay from 'components/LoginOverlay'
import Footer from 'components/Footer'

import styled from 'styled-components'
import GlobalStyles from 'styles/global'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Gorilla Pack | O snack saudável de Nikiti</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
            key="viewport"
          />
          <link rel="shortcut icon" href="/img/icon-380.png" />
          <link rel="apple-touch-icon" href="/img/icon-380.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Snacks saudáveis de banana desidratada em Niterói."
          />
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <GlobalStyles />
        <ApolloProvider client={client}>
          <MenuProvider>
            <UserProvider>
              <OverlayProvider>
                <ContainerOuter>
                  <Header />
                  <ContainerInner>
                    <LoginOverlay />
                    <Component {...pageProps} />
                  </ContainerInner>
                  <Footer />
                </ContainerOuter>
              </OverlayProvider>
            </UserProvider>
          </MenuProvider>
        </ApolloProvider>
      </>
    )
  }
}

const ContainerOuter = styled.div`
  color: #000f08;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 70px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 0rem;
  }
`

const ContainerInner = styled.main`
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: hidden;
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  @media only screen and (min-width: 1024px) {
    height: unset;
    min-height: calc(100vh - 70px);
  }
`

export default MyApp
