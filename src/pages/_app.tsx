import Router from 'next/router'
import NProgress from 'nprogress'

import { AppProps } from 'next/app'
import Head from 'next/head'

import styled from 'styled-components'

import GlobalStyles from 'styles/global'
import { MenuProvider } from '../contexts'

import Header from 'components/Header'
import Footer from 'components/Footer'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gorilla Pack | O snack saudável de Nikiti</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
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
      <MenuProvider>
        <ContainerOuter>
          <Header />
          <ContainerInner>
            <Component {...pageProps} />
          </ContainerInner>
          <Footer />
        </ContainerOuter>
      </MenuProvider>
    </>
  )
}

const ContainerOuter = styled.div`
  color: #000f08;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 70px;
  @media only screen and (min-width: 1024px) {
    padding-top: 0rem;
  }
`

const ContainerInner = styled.main`
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  @media only screen and (min-width: 1024px) {
    height: unset;
  }
`

export default App
