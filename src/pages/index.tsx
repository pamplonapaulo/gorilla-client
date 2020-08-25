import styled from 'styled-components'

import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  background-color: #ccc;
  color: #000f08;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 70px;

  @media only screen and (min-width: 1024px) {
    padding-top: 0rem;
  }
`
