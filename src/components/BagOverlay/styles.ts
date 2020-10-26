import styled, { keyframes } from 'styled-components'

const show = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

type Props = {
  height: string
}

export const BagPopUp = styled.div`
  @media only screen and (min-width: 1024px) {
    align-items: center;
    align-self: center;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-name: ${show};
    background: #47311b;
    box-shadow: 0px 1px 8px #000;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 160px);
    justify-content: center;
    margin: 40px 5vw 0 75vw;
    padding: 30px;
    position: absolute;
    top: 0;
    transition: opacity 0.2s;
    width: 20vw;
    z-index: 1;
  }
`
