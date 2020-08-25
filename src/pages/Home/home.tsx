import styled from 'styled-components'
import VideoBg from 'components/VideoBG'
import Logo from 'components/Logo'

const Home = () => (
  <>
    <VideoBg />
    <Container>
      <Logo />
    </Container>
  </>
)

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`

export default Home
