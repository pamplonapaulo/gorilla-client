import styled from 'styled-components'

import Home from 'pages/Home'

const Main = () => (
  <Container>
    <Home />
  </Container>
)

const Container = styled.main`
  @media only screen and (min-width: 1024px) {
    min-height: calc(100% - 270px);
  }
`

export default Main
