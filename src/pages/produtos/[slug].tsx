import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import client from 'graphql/client'
import { gql } from 'graphql-request'
import GET_PORTFOLIO from 'graphql/queries/getPortfolio'

import { replaceSpecialChars } from 'utils/replaceSpecialChars'
import { Product, Item, Params } from 'types/api'

import styled from 'styled-components'

export default function Produto({ ...product }: Product) {
  const router = useRouter()

  return (
    <>
      {router.isFallback ? (
        <H>Loading…</H>
      ) : (
        <Container>
          <H>{product.Name}</H>
          {/* <meta
            property="og:image"
            content={getImageUrl(
              product.Image[0]['formats']['thumbnail']['url']
            )}
          /> */}
        </Container>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await client.request(GET_PORTFOLIO)

  return {
    paths: products.map((p: Item) => {
      return {
        params: {
          slug: replaceSpecialChars(p.Name)
        }
      }
    }),
    fallback: false
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params

  const { products } = await client.request(GET_PORTFOLIO)

  function matchSlug(p: Item) {
    return slug === replaceSpecialChars(p.Name)
  }

  const productId = products.filter(matchSlug)[0].id

  const GET_PRODUCT = gql`
    query GET_PRODUCT {
      product(id: ${productId}) {
        Name
        Price
        Weight
        Description
        InStock
        Active
        NutritionFacts {
          Obs
          Carbohydrates
          SaturatedFat
          Portion
          Proteins
          TransFat
          TotalFat
          EnergeticValue
          DietaryFiber
          Sodium
        }
        Image {
          formats
        }
      }
    }
  `
  const { product } = await client.request(GET_PRODUCT)

  return {
    props: {
      ...product
    }
  }
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
