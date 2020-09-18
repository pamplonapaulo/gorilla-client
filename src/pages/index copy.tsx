import styled from 'styled-components'
import VideoBg from 'components/VideoBG'
import Logo from 'components/Logo'
import MadeInNikiti from 'components/MadeIn'

import { GetServerSideProps } from 'next'

import client from 'graphql/client'
import GET_PRODUCT_NAME from 'graphql/queries/getProducts'
import { ProductNameProps } from 'types/api'

const Index = ({ Name, Price, Description }: ProductNameProps) => (
  <>
    <VideoBg />
    <Container>
      <Logo />
      <MadeInNikiti
        productName={Name}
        productPrice={Price}
        productDescription={Description}
      />
    </Container>
  </>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const { product } = await client.request(GET_PRODUCT_NAME)

  console.log(product)

  return {
    props: {
      ...product
    }
  }
}

const Container = styled.div`
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

export default Index
