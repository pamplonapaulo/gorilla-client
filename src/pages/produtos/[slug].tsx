import { GetStaticPaths } from 'next'

import { useRouter } from 'next/router'

import { gql } from 'graphql-request'
import client from 'graphql/client'
import GET_PORTFOLIO from 'graphql/queries/getPortfolio'

import { Product, Item, Params } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'

import Input from 'components/Input'

import styled from 'styled-components'

export default function Produto({ ...product }: Product) {
  const router = useRouter()

  return (
    <>
      {router.isFallback ? (
        <H>Loading…</H>
      ) : (
        <Container>
          {/* <meta
            property="og:image"
            content={getImageUrl(
              product.Image[0]['formats']['thumbnail']['url']
            )}
          /> */}

          <Rows>
            <Wrapper>
              <Photo
                src={getImageUrl(product.Image[0]['formats']['medium']['url'])}
                alt={product.Name}
              />
            </Wrapper>
            <Columns>
              <Columns>
                <H>{product.Name}</H>
                <H>{`R$ ${product.Price}`}</H>
                <H>{`Peso: ${product.Weight}`}</H>
                <div>
                  <p>Comprar uma vez ou assinar?</p>
                  <RadioWrapper>
                    <input type="radio" id="buy" name="deal" value="Comprar" />
                    <label htmlFor="buy">Comprar</label>
                  </RadioWrapper>
                  <RadioWrapper>
                    <input
                      type="radio"
                      id="subscription"
                      name="deal"
                      value="Assinar"
                    />
                    <label htmlFor="subscription">Assinar</label>
                  </RadioWrapper>
                </div>
              </Columns>
              <Rows>
                <Input />
                <Btn>{'Add à sacola'}</Btn>
              </Rows>
            </Columns>
          </Rows>
          <Columns>
            <p>Informação Nutricional</p>
            <H>{`Porção ${product.NutritionFacts.Portion}`}</H>
            <H>{`Valor Energético: ${product.NutritionFacts.EnergeticValue}`}</H>
            <H>{`Proteínas: ${product.NutritionFacts.Proteins}`}</H>
            <H>{`Carbohidratos: ${product.NutritionFacts.Carbohydrates}`}</H>
            <H>{`Fibras: ${product.NutritionFacts.DietaryFiber}`}</H>
            <H>{`Sódio: ${product.NutritionFacts.Sodium}`}</H>
            <H>{`Gordura Saturada: ${product.NutritionFacts.SaturatedFat}`}</H>
            <H>{`Gordura Trans: ${product.NutritionFacts.TransFat}`}</H>
            <H>{`Gorduras Totais: ${product.NutritionFacts.TotalFat}`}</H>
          </Columns>
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
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: pink;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 1024px) {
    height: calc(100vh - 70px);
    padding-top: 70px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  height: 150px;

  padding-top: 3rem;

  @media only screen and (min-width: 1024px) {
    height: 200px;
    justify-content: center;
    padding: 4rem 5vw 0;
    width: 50%;
    height: 100%;
    padding: 0;
    align-items: center;
  }
`

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  height: 150px;

  padding-top: 3rem;

  @media only screen and (min-width: 1024px) {
    justify-content: center;
    height: 100%;
    padding: 0 5vw;
  }
`

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4rem;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  height: 150px;

  padding-top: 3rem;

  @media only screen and (min-width: 1024px) {
    justify-content: center;
    padding: 4rem 5vw 0;
    height: 100%;
  }
`

const Photo = styled.img`
  border-radius: 5px;
  max-width: 250px;
`

const H = styled.h1`
  color: #000f08;
  font-weight: 700;
  font-size: 3rem;
`

const Btn = styled.button`
  background: #2da650;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 0.7em 1em;
  margin-top: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  width: 140px;
  height: 50px;
`

const RadioWrapper = styled.div`
  position: relative;
`
