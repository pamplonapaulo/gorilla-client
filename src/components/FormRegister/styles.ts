import styled, { keyframes } from 'styled-components'

const show = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

type Props = {
  isValid: boolean
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

export const Overlay = styled.div`
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-name: ${show};
  background: rgba(0, 0, 0, 0.85);
  height: calc(100vh - 70px);
  margin: 70px 0 0;
  position: fixed;
  transition: opacity 0.2s;
  width: 100vw;
  z-index: 0;

  @media only screen and (min-width: 1024px) {
    transform: translateX(-5vw);
  }
`

export const SignUp = styled.div`
  align-items: center;
  align-self: center;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-name: ${show};
  background: #47311b;
  box-shadow: 0px 1px 8px #000;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
  justify-content: center;
  margin: 80px 2.5vw 0;
  padding: 10px;
  position: fixed;
  top: 0;
  transition: opacity 0.2s;
  width: 95vw;
  z-index: 1;

  @media only screen and (min-width: 1024px) {
    height: calc(100vh - 160px);
    margin: 40px 40vw 0;
    padding: 30px;
    width: 20vw;
  }
`

export const Form = styled.form`
  width: 100%;

  @media only screen and (min-width: 1024px) {
    padding-top: 5rem;
  }
`

export const Submit = styled.button`
  background: #2da650;
  color: #000f08;
`

export const Field = styled.fieldset`
  align-items: center;
  border: none;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media only screen and (min-width: 1024px) {
    padding: 10% 0;
  }
`

export const Legend = styled.legend`
  color: #facb37;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 5px;
  margin-bottom: 30px;

  @media only screen and (min-width: 1024px) {
    transform: translateY(-100%);
    margin: 0;
  }
`

export const Input = styled.input<{ isValid: boolean }>`
  padding: 5px;
  border: solid 1px transparent;
  margin: 0 12.5% 3rem;
  outline-color: white;
  outline-width: 1px;
  background: ${(p) =>
    p.isValid ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
  color: ${(p) => (p.isValid ? '#facb37' : '#FF0000')};
  padding-left: 10px;
  font-weight: 100;
  letter-spacing: 1.3px;
  font-size: 16px;
  font-family: sans-serif;
  transition: 0.2s all;
  margin: 0 0 2rem;
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
    color: ${(p) => (p.isValid ? 'rgb(117, 117, 117)' : '#FF0000')};
  }

  &:focus {
    color: #ef8321;
    border: solid 1px #facb37;

    &::-webkit-input-placeholder {
      color: transparent;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin: 0 0 3rem;
  }
`

export const Success = styled.h1`
  align-items: center;
  background: #47311b;
  color: #2da650;
  display: flex;
  text-align: left;
  font-size: 3rem;
  font-weight: 100;
  height: 100%;
  letter-spacing: 5px;
  line-height: 1.5;
  padding: 30px;
  position: absolute;
  width: 100%;
  text-align: center;
`

export const PasswordAlert = styled.h1<{ isValid: boolean }>`
  align-items: center;
  background: rgba(255, 255, 0, 1);
  border-radius: 15px;
  display: flex;
  font-size: 1rem;
  text-transform: uppercase;
  justify-content: center;
  letter-spacing: 5px;
  line-height: 1.5;
  padding: 9px 12px;
  text-align: center;
  z-index: 1;
  transition: 0.2s ease opacity;
  opacity: ${(p) => (p.isValid ? 1 : 0)};
  box-shadow: 0px 1px 8px #000;

  &::before {
    content: '';
    background: rgba(255, 255, 0, 1);
    height: 20px;
    width: 20px;
    transform: rotate(45deg) translate(-10px, -10px);
    position: absolute;
    z-index: -1;
  }

  @media only screen and (min-width: 1024px) {
    position: absolute;
    bottom: 25%;
  }
`
