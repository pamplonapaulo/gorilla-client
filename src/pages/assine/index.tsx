import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_SINGLE_PRODUCT from 'graphql/queries/getSingleProduct'
import { ProductNameProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import styled from 'styled-components'

const Assine = ({ Name, Price, Description, Url }: ProductNameProps) => (
  <>
    <Container>
      <H>{Name}</H>
      <H>{Price}</H>
      <H>{Description}</H>
      <H>{Url}</H>
      <Photo src={getImageUrl(Url)} alt={'Product Image'} />
    </Container>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { product } = await client.request(GET_SINGLE_PRODUCT)

  return {
    props: {
      Name: product.Name,
      Price: product.Price,
      Description: product.Description,
      Url: product.Image[0]['formats']['small']['url']
    }
  }
}

const Container = styled.div`
  background: #47311b;
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
  font-size: 1.5rem;
  margin-bottom: 2rem;
`

const Photo = styled.img`
  max-width: 300px;
`

export default Assine
