import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
  width: 100px;
  z-index: 9;
  padding: 5px 20px;

  @media only screen and (min-width: 1024px) {
    cursor: pointer;
    transition: 0.2s all;
    height: 70px;
    width: auto;
    padding: 5px;

    &:hover {
      transform: scale(0.85);
    }
  }
`

export const Svg = styled.svg`
  padding: 0;
  height: 60px;

  @media only screen and (min-width: 1024px) {
    height: 60px;
    width: auto;
  }
`
