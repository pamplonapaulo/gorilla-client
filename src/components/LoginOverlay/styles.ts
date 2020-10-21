import styled, { keyframes } from 'styled-components'

const show = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

type Props = {
  height: string
}

export const Overlay = styled.div<{
  height: string
}>`
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-name: ${show};
  background: rgba(0, 0, 0, 0.85);
  height: ${(p) => p.height};
  height: 100%;
  position: absolute;
  top: 0;
  transition: opacity 0.2s;
  width: 100vw;
  z-index: 1;

  @media only screen and (min-width: 1024px) {
    height: 100%;
    position: fixed;
    top: 70px;
    transform: none;
    width: 100%;
  }
`

export const PopUp = styled.div<{
  height: string
}>`
  align-items: center;
  align-self: center;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-name: ${show};
  background: #47311b;
  box-shadow: 0px 1px 8px #000;
  display: flex;
  flex-direction: column;
  height: calc(${(p) => p.height} - 90px);
  justify-content: space-around;
  margin: 10px 2.5vw 0;
  // margin: 45px 2.5vw 0;
  padding: 10px 10px 50px;
  top: 0;
  transition: opacity 0.2s;
  width: 95vw;
  z-index: 1;

  @media only screen and (min-width: 1024px) {
    height: calc(100vh - 160px);
    justify-content: center;
    margin: 40px 40vw 0;
    padding: 30px;
    width: 20vw;
  }
`

export const Top = styled.div`
  height: 50%;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  @media only screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`

export const Bottom = styled.div`
  height: 35%;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
  }
`

export const H = styled.h1`
  color: #facb37;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 100;
  letter-spacing: 5px;
  white-space: nowrap;
  margin-bottom: 4rem;

  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`

export const HWrap = styled.h1`
  color: #facb37;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 5px;
  margin-bottom: 4rem;
  line-height: 3;
`
