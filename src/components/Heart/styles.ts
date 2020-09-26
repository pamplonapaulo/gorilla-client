import styled from 'styled-components'

export const Svg = styled.svg`
  padding: 0;
  width: 30px;
  margin-right: 5px;

  @media only screen and (min-width: 1024px) {
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 1));
    height: 100%;
    display: table-cell;
    vertical-align: middle;
  }
`
