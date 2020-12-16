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
    transform: ${(props) =>
      props.theme.isVisible ? 'translateY(0)' : 'translateY(-120%)'};
    transition: all 0.2s;
    width: 385px;
    z-index: 1;
  }
`
