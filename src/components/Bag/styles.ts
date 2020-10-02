import styled from 'styled-components'

export const Svg = styled.svg`
  padding: 0;
  width: 20px;

  @media only screen and (min-width: 1024px) {
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 1));
    height: 100%;
    width: 30px;
    transition: 0.2s all;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`
