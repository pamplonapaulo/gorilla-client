import styled from 'styled-components'

import Home from 'pages/Home'

const Main = () => (
  <Container>
    <Home />
  </Container>
)

const Container = styled.main`
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

export default Main
