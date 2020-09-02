import styled from 'styled-components'

const Conheca = () => (
  <>
    <Container>
      <H>Page Conheça</H>
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
  background: #ef8321;
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

const H = styled.h1`
  color: #000f08;
  font-weight: 700;
  font-size: 3rem;
`

export default Conheca
