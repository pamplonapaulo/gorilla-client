import styled from 'styled-components'

export const Svg = styled.svg`
  padding: 0;
  max-width: 250px;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 1));

  @media only screen and (min-width: 1024px) {
    max-width: 400px;
  }
`
