/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

import styled from 'styled-components'

const Conheca: React.FunctionComponent = () => {
  return (
    <Container>
      <div>
        <h1>empty</h1>
      </div>
    </Container>
  )
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

export async function getStaticProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  return { props: {} }
}

export default Conheca
