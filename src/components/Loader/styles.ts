import styled, { keyframes } from 'styled-components'

const colors = keyframes`
  100%,
  0% {
    stroke: #47311B;
  }
  40% {
    stroke: #2DA650;
  }
  66% {
    stroke: #EF8321;
  }
  80%,
  90% {
    stroke: #FACB37;
  }
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`

type Props = {
  isHidden: boolean
}

export const Overlay = styled.div<{ isHidden: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: ${(p) => (p.isHidden ? '0' : '1')};
  display: ${(p) => (p.isHidden ? 'none' : 'block')};
`

export const Wrapper = styled.div<{ isHidden: boolean }>`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0 auto;
  height: 100%;
  opacity: ${(p) => (p.isHidden ? '0' : '1')};
  display: ${(p) => (p.isHidden ? 'none' : 'table')};
`

export const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100px;
  display: table-cell;
  vertical-align: middle;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

export const Svg = styled.svg`
  animation: ${rotate} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`

export const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite,
    ${colors} 1s ease-in-out infinite;
  stroke-linecap: round;
`
