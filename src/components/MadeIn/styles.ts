import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  padding: 8px;
  z-index: 0;
  margin-top: 6rem;

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
  }
`

export const Stamp = styled.h1`
  @font-face {
    font-family: 'Bodedo';
    src: url('HVD_Bodedo.ttf');
  }

  font-size: 3.5rem;
  font-weight: 100;
  font-family: Bodedo, Roboto, sans-serif;
  text-shadow: 1px 1px 1px #000;

  @media only screen and (min-width: 1024px) {
    font-size: 4.5rem;
  }
`
