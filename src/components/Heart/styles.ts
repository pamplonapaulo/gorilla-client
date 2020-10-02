import styled from 'styled-components'

export const Svg = styled.svg`
  padding: 0;
  width: 30px;
  height: 100%;
  margin: 0;

  @media only screen and (min-width: 1024px) {
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 1));
    float: right;
  }
`
