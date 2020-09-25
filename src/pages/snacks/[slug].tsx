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
          <meta
            property="og:image"
            content={getImageUrl(
              product.Image[0]['formats']['thumbnail']['url']
            )}
          />
          <Rows>
            <Wrapper>
              <Photo
                src={getImageUrl(product.Image[0]['formats']['medium']['url'])}
                alt={product.Name}
              />
            </Wrapper>
            <Columns>
              <Head>
                <HHuge>{product.Name}</HHuge>
                <H>{`R$ ${product.Price}`}</H>
                <H>{` ${product.Weight}g`}</H>
                {/* <div>
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
                </div> */}
              </Head>
              <Actions>
                <Rows>
                  <Input />
                  <Btn>{'Assinar'}</Btn>
                </Rows>
                <Rows>
                  <Input />
                  <Btn>{'Comprar'}</Btn>
                </Rows>
              </Actions>
              <Facts>
                <H>Informação Nutricional</H>
                <Portion>{`Tamanho da porção: ${product.NutritionFacts.Portion} gramas`}</Portion>
                <FactsDetails>
                  <FactItem>{`Valor Energético: ${product.NutritionFacts.EnergeticValue}`}</FactItem>
                  <FactItem>{`Proteínas: ${product.NutritionFacts.Proteins}`}</FactItem>
                  <FactItem>{`Carbohidratos: ${product.NutritionFacts.Carbohydrates}`}</FactItem>
                  <FactItem>{`Fibras: ${product.NutritionFacts.DietaryFiber}`}</FactItem>
                  <FactItem>{`Sódio: ${product.NutritionFacts.Sodium}`}</FactItem>
                  <FactItem>{`Gordura Saturada: ${product.NutritionFacts.SaturatedFat}`}</FactItem>
                  <FactItem>{`Gordura Trans: ${product.NutritionFacts.TransFat}`}</FactItem>
                  <FactItem>{`Gorduras Totais: ${product.NutritionFacts.TotalFat}`}</FactItem>
                </FactsDetails>
              </Facts>
            </Columns>
          </Rows>
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #EF8321;

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
    padding: 35px 5vw 0;
    margin-top 70px;
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
    height: 100%;
    padding: 0;
    width: 40%;
    justify-content: end;
    align-items: end;
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  height: 150px;

  padding-top: 3rem;

  @media only screen and (min-width: 1024px) {
    justify-content: end;
    padding: 0;
    height: 400px;
  }
`

const Actions = styled.div`
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
    padding: 0;
    height: 120px;
  }
`

const Facts = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  height: 150px;

  padding-top: 3rem;

  @media only screen and (min-width: 1024px) {
    justify-content: end;
    height: 100%;
    padding: 50px 0;
  }
`

const Portion = styled.h2`
  color: #000f08;
  font-weight: 700;
  font-size: 2rem;
`

const FactsDetails = styled.div`
  display: flex;
  display: table;
  margin-top: 25px;
  border-collapse: separate;
  border-spacing: 10px;
  margin-left: -10px;
`

const FactItem = styled.p`
  background: #47311b;
  height: 60px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  vertical-align: middle;
  display: table-cell;
  width: auto;
  margin: 5px;
  padding: 5px;
  border-radius: 30px;
  color: white;
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
  align-items: center;

  @media only screen and (min-width: 1024px) {
    padding: 0;
    height: 100%;
    justify-content: flex-start;
  }
`

const Photo = styled.img`
  border-radius: 5px;
`

const HHuge = styled.h1`
  color: #000f08;
  font-weight: 700;
  font-size: 5rem;
`

const H = styled.h1`
  color: #000f08;
  font-weight: 700;
  font-size: 3rem;
`

const Btn = styled.button`
  background: #000f08;
  color: #fff;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 0.7em 1em;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s;
  text-align: center;
  width: 140px;
  height: 50px;
`

// const RadioWrapper = styled.div`
//   position: relative;
// `

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
