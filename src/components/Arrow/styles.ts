import styled from 'styled-components'

export const Svg = styled.svg`
  cursor: pointer;
  padding: 0;
  width: 30px;
  transform: rotate(${(props) => props.theme.direction}deg);
  transition: ease 0.2s transform;

  &:hover {
    transform: rotate(${(props) => props.theme.direction}deg) scale(1.2);
  }
`
