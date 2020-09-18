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

export async function getStaticProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  return { props: {} }
}

const Container = styled.div`
  background: ##000;
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 1024px) {
    position: fixed;
  }
`

export default Home
