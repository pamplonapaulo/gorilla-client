import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const useUser = () => ({ user: null, loading: false })

import Loader from 'components/Loader'

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
        <Loader isHidden={false} />
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

export default Index
