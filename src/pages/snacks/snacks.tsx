import Link from 'next/link'

import { useQuery } from '@apollo/client'
import GET_PRODUCTS from 'graphql/queries/getProducts'

import { Snack } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'

import Loader from 'components/Loader'

import styled from 'styled-components'

const Snacks = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Error :(</p>
  if (data) console.log(data)

  return (
    <>
      <Container>
        <T>{'Snacks'}</T>
        <Wrapper>
          {data.products.map((p: Snack) => (
            <Item key={p.id}>
              <Photo
                src={getImageUrl(p.Image['formats']['small']['url'])}
                alt={p.Name}
              />
              <H>{p.Name}</H>
              <H>{'R$' + p.Price}</H>
              <Link
                as={`/snacks/${replaceSpecialChars(p.Name)}`}
                href={{
                  pathname: '/snacks/[slug]'
                }}
              >
                <Btn>{'Comprar'}</Btn>
              </Link>
            </Item>
          ))}
        </Wrapper>
      </Container>
    </>
  )
}

const Container = styled.div`
  align-items: center;
  background: #47311b;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 70px;
    position: relative;
  }
`

const T = styled.h1`
  color: #ef8321;
  font-weight: 400;
  font-size: 3.5rem;
  margin: 30px 0;
  text-transform: uppercase;

  @media only screen and (min-width: 1024px) {
    margin: 70px 0;
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;

  @media only screen and (min-width: 1024px) {
    max-width: 75%;
    flex-direction: row;
  }
`

const Item = styled.div`
  margin: 0 0 50px;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    margin: 0 20px 50px;
  }
`

const H = styled.h1`
  color: #ef8321;
  font-weight: 200;
  margin-bottom: 2.5px;
  text-align: center;
  font-size: 1.4rem;
  margin-top: 5px;

  &&:nth-of-type(1) {
    text-transform: lowercase;

    @media only screen and (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  &&:nth-of-type(2) {
    text-transform: uppercase;

    @media only screen and (min-width: 1024px) {
      font-size: 2rem;
    }
  }
`

const Photo = styled.img`
  border-radius: 5px;
  max-width: 145px;

  @media only screen and (min-width: 1024px) {
    max-width: 250px;
  }
`

const Btn = styled.button`
  background: #2da650;
  border: none;
  border-radius: 0;
  color: rgba(0, 0, 0, 0.9);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin-top: 5px;
  padding: 0.7em 1em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  width: 80px;

  @media only screen and (min-width: 1024px) {
    font-size: 1.2rem;
    max-width: 250px;
    width: 140px;
  }
`

export default Snacks
