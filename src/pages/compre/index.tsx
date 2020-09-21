import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_PRODUCTS from 'graphql/queries/getProducts'
import { ProductsCollection } from 'types/api'

import styled from 'styled-components'

const Compre = ({ products }: ProductsCollection) => (
  <>
    <Container>
      <H>{products.length}</H>
      {products.map((p) => (
        <div key={p.id}>
          <H>{p.id}</H>
          <H>{p.Name}</H>
          <H>{p.Price}</H>
        </div>
      ))}
    </Container>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await client.request(GET_PRODUCTS)

  console.log(products)

  return {
    props: {
      products
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

// const Photo = styled.img`
//   max-width: 300px;
// `

export default Compre
