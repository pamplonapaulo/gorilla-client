import Link from 'next/link'

import { useQuery } from '@apollo/client'
import GET_PRODUCTS from 'graphql/queries/getProducts'

import { Snack } from 'types/api'

import { getImageUrl } from 'utils/getImageUrl'
import { replaceSpecialChars } from 'utils/replaceSpecialChars'

import Loader from 'components/Loader'

import * as S from './styles'

const Snacks = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  if (loading) return <Loader isHidden={false} />
  if (error) return <p>Error :(</p>

  return (
    <>
      <S.Container>
        <S.T>{'Snacks'}</S.T>
        <S.Wrapper>
          {data.products.map((p: Snack) => (
            <S.Item key={p.id}>
              <S.Photo
                src={getImageUrl(p.Image['formats']['medium']['url'])}
                alt={p.Name}
              />
              <S.H>{p.Name}</S.H>
              <S.H>{'R$' + p.Price}</S.H>
              <Link
                as={`/snacks/${replaceSpecialChars(p.Name)}`}
                href={{
                  pathname: '/snacks/[slug]'
                }}
              >
                <S.Btn>{'Comprar'}</S.Btn>
              </Link>
            </S.Item>
          ))}
        </S.Wrapper>
      </S.Container>
    </>
  )
}

export default Snacks
