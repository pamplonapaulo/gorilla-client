import styled, { keyframes } from 'styled-components'

const show = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

export const BagPopUp = styled.div`
  @media only screen and (min-width: 1024px) {
    align-items: center;
    align-self: center;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-name: ${show};
    background: lightgray;
    box-shadow: 0px 1px 8px #000;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    margin: 70px 5vw 0 75vw;
    padding-bottom: 10px;
    position: absolute;
    top: 0;
    transition: opacity 0.2s;
    width: 385px;
    z-index: 1;
  }
`

export const Title = styled.h1`
  border-bottom: 1px solid darkgray;
  color: #47311b;
  padding: 15px;
  text-align: center;
  width: 100%;
`

export const ProductsWrap = styled.section`
  width: 100%;
`

export const Footer = styled.div`
  color: blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
`

export const FooterText = styled.h6`
  color: #47311b;
  font-size: 1.5rem;
  margin: 10px 0;
  width: calc(95% / 2);

  &&:nth-of-type(2) {
    text-align: right;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`
