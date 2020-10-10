import styled from 'styled-components'

export const Svg = styled.svg`
  padding: 0;
  width: 20px;
  height: 100%;

  @media only screen and (min-width: 1024px) {
    height: 100%;
    width: 30px;
    transition: 0.2s all;
    cursor: default;
  }
`
