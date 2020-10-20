import styled, { keyframes } from 'styled-components'

const show = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

type Props = {
  height: string
}

export const Container = styled.div`
  padding: 0;
  z-index: 9;
  padding: 5px;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  transform: translateX(70%);
  width: 90px;

  @media only screen and (min-width: 1024px) {
    transform: translateX(0%);
    width: 125px;
    height: 70px;
    padding: 5px;
  }
`

export const Overlay = styled.div<{
  height: string
}>`
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-name: ${show};
  background: rgba(0, 0, 0, 0.85);
  height: calc(${(p) => p.height} - 70px);
  margin: 70px 0 0;
  position: fixed;
  transition: opacity 0.2s;
  width: 100vw;
  z-index: 0;

  @media only screen and (min-width: 1024px) {
    transform: translateX(-5vw);
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

export const Form = styled.form`
  width: 100%;
  padding-top: 5rem;
`

export const Submit = styled.button`
  background: #2da650;
  color: #000f08;
`

export const Field = styled.fieldset`
  display: flex;
  flex-direction: rows;
  height: 100%;
  border: none;
  padding: 10% 0;
`

export const Legend = styled.legend`
  color: #facb37;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 5px;
  transform: translateY(-100%);
`

export const Input = styled.input`
  padding: 5px;
  border: solid 1px transparent;
  margin: 0 12.5% 3rem;
  outline-color: white;
  outline-width: 1px;
  background: rgba(255, 255, 255, 0.1);
  color: #facb37;
  padding-left: 10px;
  font-weight: 100;
  letter-spacing: 1.3px;
  font-size: 16px;
  font-family: sans-serif;
  transition: 0.2s all;
  margin: 0 0 3rem;
  width: 100%;
  letter-spacing: 1.3px;
  font-size: 16px;

  &::-webkit-input-placeholder {
    letter-spacing: 1.5px;
    font-weight: 400;
    font-size: 11px;
    text-transform: uppercase;
    transition: 0.2s all;
    letter-spacing: 5px;
  }

  &:focus {
    color: #ef8321;
    border: solid 1px #facb37;

    &::-webkit-input-placeholder {
      color: transparent;
    }
  }
`

export const Hello = styled.h1`
  position: absolute;
  font-size: 11px;
  bottom: 0;
  white-space: nowrap;
  font-weight: 300;
  color: rgb(250, 203, 55);
  background: rgba(45, 166, 80, 0.9);
  padding: 3px;
  border: 1px solid rgba(70, 49, 27, 0.5);
  transform: translate(calc(-100% + 40px), -25%);
  min-width: fit-content;
  cursor: default;
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
  margin: 80px 2.5vw 0;
  padding: 10px 10px 50px;
  position: fixed;
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
