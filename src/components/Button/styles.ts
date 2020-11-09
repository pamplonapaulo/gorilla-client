import styled, { keyframes } from 'styled-components'

const blinkLines = keyframes`
 0% {
   background: #FACB37;
   border-color: #47311B;
   color: #47311B;
  }
 25% {
   background: #EF8321;
   border-color: #fff;
   color: #fff;
  }
 50% {
  background: #FACB37;
  border-color: #47311B;
  color: #47311B;
 }
 75% {
  background: #EF8321;
  border-color: #fff;
  color: #fff;
  }
 100% {
  background: #FACB37;
  border-color: #47311B;
  color: #47311B;
 }
`

export const Btn = styled.button`
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
  animation-name: ${(props) => (props.theme.isBlinking ? blinkLines : 'none')};
  background: transparent;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 100;
  text-transform: uppercase;
  height: 50px;
  position: relative;
  display: inline-block;
  padding: 12px 27px;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  border: 2px solid;
  border-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
  transition: ease-out 0.1s;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  justify-content: space-around;
  padding: 12px 18px;

  @media only screen and (min-width: 1024px) {
    width: 140px;
  }

  &:hover {
    animation: pulse 1s ease-out 0.4s;
    color: ${(props) => props.theme.secondaryColor};

    &:after {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      visibility: visible;
      transition: width 0.05s ease 0.1s, height 0.05s ease 0.15s,
        visibility 0s 0.1s;
      transition: width 0.05s ease 0.1s, height 0.05s ease 0.15s,
        visibility 0s 0.1s;
    }

    &:before {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      visibility: visible;
      transition: width 0.05s ease 0.1s, height 0.05s ease 0.15s,
        visibility 0s 0.1s;
      transition: width 0.05s ease, height 0.05s ease 0.05s;
    }
  }
  &:after {
    position: absolute;
    content: '';
    width: 0%;
    height: 0%;
    visibility: hidden;
    bottom: -2px;
    right: -2px;
    border-left: 2px solid ${(props) => props.theme.secondaryColor};
    border-bottom: 2px solid ${(props) => props.theme.secondaryColor};
    transition: width 0.05s ease 0.05s, height 0.05s ease, visibility 0s 0.1s;
  }

  &:before {
    position: absolute;
    content: '';
    width: 0%;
    height: 0%;
    visibility: hidden;
    top: -2px;
    left: -2px;
    border-top: 2px solid ${(props) => props.theme.secondaryColor};
    border-right: 2px solid ${(props) => props.theme.secondaryColor};
    transition: width 0.05s ease 0.15s, height 0.05s ease 0.1s,
      visibility 0s 0.2s;
  }
`
