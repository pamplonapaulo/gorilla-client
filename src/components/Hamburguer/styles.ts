import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  height: 100%;
  width: 60px;
  display: flex;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`

export const Btn = styled.div`
  align-items: center;
  background: none;
  border: 0;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;
  display: flex;
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
  }
`

export const Span = styled.span`
  background: #056839;
  height: 3px;
  width: 30px;
  position: absolute;
  transition: .2s all;

  &::before {
    background: #056839;
    content: ' ';
    height: 3px;
    position: absolute;
    width: 30px;
    top: -9px;
    transition: .2s all;
  }

  &::after {
    background: #056839;
    bottom: -9px;
    content: ' ';
    height: 3px;
    position: absolute;
    width: 30px;
    transition: .2s all;
  }

  &.active {

    background: transparent;

    &::before {
      top: 0;
      transform: rotate(45deg);
    }

    &::after {
      bottom: 0;
      transform: rotate(-45deg);
    }
  }
}
`
