import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const useUser = () => ({ user: null, loading: false })

const Index = () => {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/home')
    }
  }, [user, loading, router])

  return (
    <>
      <Container>
        <H>Loading...</H>
      </Container>
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

export default Index
