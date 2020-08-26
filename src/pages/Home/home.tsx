import styled from 'styled-components'
import VideoBg from 'components/VideoBG'
import Logo from 'components/Logo'
import MadeInNikiti from 'components/MadeIn'

const Home = () => (
  <>
    <VideoBg />
    <Container>
      <Logo />
      <MadeInNikiti />
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
  flex-direction: column;
`

export default Home
