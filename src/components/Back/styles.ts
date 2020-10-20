import styled from 'styled-components'

export const Svg = styled.svg`
  cursor: pointer;
  padding: 0;
  width: 30px;
  transition: ease 0.2s transform;

  &:hover {
    transform: scale(1.2);
  }
`
