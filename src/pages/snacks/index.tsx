import Link from 'next/link'

import { useQuery } from '@apollo/client'
import GET_PRODUCTS from 'graphql/queries/getProducts'

import { Snack } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'

import styled from 'styled-components'

const Snacks = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <Container>
        <T>{'Nossos Produtos'}</T>
        <Wrapper>
          {data.products.map((p: Snack) => (
            <Item key={p.id}>
              <Photo
                src={getImageUrl(p.Image[0]['formats']['medium']['url'])}
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
  background: #47311b;
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media only screen and (min-width: 1024px) {
    position: relative;
  }
`

const T = styled.h1`
  color: #ef8321;
  font-weight: 400;
  font-size: 3.5rem;
  margin: 70px 0;
  text-transform: uppercase;
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;
  max-width: 75%;
`

const Item = styled.div`
  margin: 0 20px 50px;
  text-align: center;
`

const H = styled.h1`
  color: #ef8321;
  font-weight: 200;
  margin-bottom: 2.5px;
  text-align: center;

  &&:nth-of-type(1) {
    font-size: 2.5rem;
    margin-top: 5px;
    text-transform: lowercase;
  }

  &&:nth-of-type(2) {
    font-size: 2rem;
    margin-top: 5px;
    text-transform: uppercase;
  }
`

const Photo = styled.img`
  border-radius: 5px;
  max-width: 250px;
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
`

export default Snacks
