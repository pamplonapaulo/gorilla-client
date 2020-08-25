import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { MenuProvider } from '../contexts'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gorilla Pack</title>
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
          content="Snacks de banana desidratada. Entregas para toda cidade de Niterói."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </>
  )
}

export default App
