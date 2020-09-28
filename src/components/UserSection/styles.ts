import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
  width: 125px;
  z-index: 9;
  padding: 5px;
  flex-direction: row;
  display: flex;
  justify-content: space-around;

  @media only screen and (min-width: 1024px) {
    height: 70px;
    padding: 5px;
  }
`
