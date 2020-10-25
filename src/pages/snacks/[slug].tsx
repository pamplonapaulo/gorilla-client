import React, { useState } from 'react'

import { GetStaticPaths } from 'next'

import { useRouter } from 'next/router'

import { gql, GraphQLClient } from 'graphql-request'
import { endpoint } from 'lib/apollo/client'
import GET_PORTFOLIO from 'graphql/queries/getPortfolio'

import { Product, Item, Params } from 'types/api'

import { useBag } from 'contexts'

import { getImageUrl } from 'utils/getImageUrl'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'

import { HeartOutline } from 'components/Heart'
import Button from 'components/Button'
import Input from 'components/Input'

import styled from 'styled-components'

const client = new GraphQLClient(endpoint + 'graphql')

export default function Produto({ ...product }: Product) {
  const router = useRouter()

  const [quantityBuy, setQuantityBuy] = useState(0)
  const [quantitySubscribe, setQuantitySubscribe] = useState(0)

  const { bag, setBag } = useBag()

  const handleSubscription = (p: string) => {
    const quantity = []

    for (let i = 0; i < quantitySubscribe; i++) {
      quantity.push(p)
    }

    setBag({
      toBuy: [...bag.toBuy],
      toSubscribe: [...bag.toSubscribe, ...quantity]
    })
  }

  const handleBuy = (p: string) => {
    const quantity = []

    for (let i = 0; i < quantityBuy; i++) {
      quantity.push(p)
    }

    setBag({
      ...bag,
      toBuy: [...bag.toBuy, ...quantity]
    })
  }

  const handleQuantityBuys = (total: number) => {
    setQuantityBuy(total)
  }

  const handleQuantitySubscribe = (total: number) => {
    setQuantitySubscribe(total)
  }

  return (
    <>
      {router.isFallback ? (
        <H>Loading…</H>
      ) : (
        <Background>
          <ContainerOuter>
            <meta
              property="og:image"
              content={getImageUrl(
                product.Image['formats']['thumbnail']['url']
              )}
            />
            <ContainerInner>
              <Wrapper>
                <Photo
                  src={getImageUrl(product.Image['formats']['medium']['url'])}
                  alt={product.Name}
                />
              </Wrapper>
              <Columns>
                <Head>
                  <ProdName>
                    <HHuge>{product.Name}</HHuge>
                    <HeartOutline />
                  </ProdName>
                  <Rows>
                    <H>{`R$ ${product.Price}`}</H>
                    <H>{` ${product.Weight}g`}</H>
                  </Rows>
                </Head>
                <Actions>
                  <BtnsWrapper>
                    <Input parentCallback={handleQuantitySubscribe} />
                    <div onClick={() => handleSubscription(product.id)}>
                      <Button bg={'#fff'}>Assinar</Button>
                    </div>
                  </BtnsWrapper>
                  <BtnsWrapper>
                    <Input parentCallback={handleQuantityBuys} />
                    <div onClick={() => handleBuy(product.id)}>
                      <Button bg={'#fff'}>Comprar</Button>
                    </div>
                  </BtnsWrapper>
                </Actions>
                <Facts>
                  <NutriTitle>Informação Nutricional</NutriTitle>
                  <Portion>{`Tamanho da porção: ${product.NutritionFacts.Portion} gramas`}</Portion>
                  <FactsDetails>
                    <FactItem>
                      <P>Valor Energético</P>
                      <P>
                        <Span>{product.NutritionFacts.EnergeticValue} cal</Span>
                      </P>
                    </FactItem>
                    <FactItem>
                      <P>Proteínas</P>
                      <P>
                        <Span>{product.NutritionFacts.Proteins} gr</Span>
                      </P>
                    </FactItem>
                    <FactItem>
                      <P>Carbohidratos</P>
                      <P>
                        <Span>{product.NutritionFacts.Carbohydrates} gr</Span>
                      </P>
                    </FactItem>
                    <FactItem>
                      <P>Fibras</P>
                      <P>
                        <Span>{product.NutritionFacts.DietaryFiber} gr</Span>
                      </P>
                    </FactItem>
                    <FactItem>
                      <P>Sódio</P>
                      <P>
                        <Span>{product.NutritionFacts.Sodium} gr</Span>
                      </P>
                    </FactItem>
                    <FactItem>
                      <P>Gordura Saturada</P>
                      <P>
                        <Span>{product.NutritionFacts.SaturatedFat} gr</Span>
                      </P>
                    </FactItem>
                    <FactItem>
                      <P>Gordura Trans</P>
                      <P>
                        <Span>{product.NutritionFacts.TransFat} ml</Span>
                      </P>
                    </FactItem>
                    <FactItem>
                      <P>Gorduras Totais</P>
                      <P>
                        <Span>{product.NutritionFacts.TotalFat} ml</Span>
                      </P>
                    </FactItem>
                  </FactsDetails>
                </Facts>
              </Columns>
            </ContainerInner>
          </ContainerOuter>
        </Background>
      )}
    </>
  )
}

const Background = styled.div`
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
    height: calc(100vh - 70px);
    padding: 35px 0vw 0;
    margin: 70px auto 0;
  }
`

const ContainerOuter = styled.div`
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
    height: calc(100vh - 70px);
    padding: 35px 0vw 0;
    max-width: 1200px;
    margin: 70px auto 0;
  }
`

const ContainerInner = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  height: auto;
  padding-top: 35px;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
    height: 100%;
    justify-content: flex-start;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  height: auto;

  @media only screen and (min-width: 1024px) {
    height: 100%;
    padding: 0;
    width: 50%;
    justify-content: end;
    align-items: end;
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-evenly;
  padding: 0 40px;
  width: 100%;
  position: relative;

  @media only screen and (min-width: 1024px) {
    justify-content: end;
    padding: 0;
    margin: 0 auto;
    max-width: 80%;
  }
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-evenly;
  padding: 3rem 10px 0;
  position: relative;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    height: 120px;
    justify-content: center;
    margin: 0 auto;
    max-width: 80%;
    padding: 0;
  }
`

const Facts = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  height: auto;
  margin-top: 3rem;

  @media only screen and (min-width: 1024px) {
    justify-content: end;
    height: 100%;
    padding: 50px 0;
    margin: 0 auto;
    max-width: 80%;
  }
`

const FactsDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  border-collapse: separate;
  border-spacing: 10px;
  width: 420px;
  padding: 5px;

  @media only screen and (min-width: 1024px) {
    padding: 0;
    margin-left: -5px;
  }
`

const FactItem = styled.div`
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  flex-wrap: wrap;
  margin: 5px;
  padding: 10px;
  color: white;
  display: flex;
  border: 1px solid #47311b;
  justify-content: space-between;
  width: calc(50vw - 15px);

  @media only screen and (min-width: 1024px) {
    width: 200px;
  }
`

const P = styled.p`
  text-transform: none;
  font-size: 11px;
  align-self: center;

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
  }
`

const Span = styled.span`
  display: table;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    font-weight: bolder;
  }
`

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  height: auto;

  @media only screen and (min-width: 1024px) {
    justify-content: center;
    height: 100%;
    padding: 0;
    width: 50%;
  }
`

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1024px) {
    padding: 0;
    height: 100%;
  }
`

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1024px) {
    padding: 0;
    height: 100%;
    justify-content: flex-start;
  }
`

const Photo = styled.img`
  margin: 0 auto;
  max-width: 80%;
`

const ProdName = styled.div`
  justify-content: space-between;
  height: 80px;
  display: flex;
  flex-direction: row;
  display: table;
  max-width: 510px;
  padding: 0;
  text-align: left;

  @media only screen and (min-width: 1024px) {
    justify-content: end;
    margin: 0 auto;
    min-width: 410px;
    width: 100%;
  }
`

const HHuge = styled.h1`
  color: #000f08;
  font-weight: 700;
  font-size: 3rem;
  display: table-cell;
  vertical-align: middle;

  @media only screen and (min-width: 1024px) {
    font-size: 5rem;
  }
`

const H = styled.h1`
  color: #000f08;
  font-weight: 700;
  font-size: 2rem;

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`

const NutriTitle = styled.h1`
  color: #000f08;
  font-weight: 700;
  font-size: 1.5rem;
  padding-left: 10px;

  @media only screen and (min-width: 1024px) {
    padding-left: 0;
    font-size: 2rem;
  }
`

const Portion = styled.h2`
  color: #000f08;
  font-weight: 700;
  font-size: 1rem;
  padding-left: 10px;

  @media only screen and (min-width: 1024px) {
    padding-left: 0;
    font-size: 2rem;
  }
`

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
        id
        Name
        Price
        Weight
        Description
        InStock
        IsActive
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
