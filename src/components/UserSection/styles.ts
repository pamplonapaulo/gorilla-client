import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
  z-index: 9;
  padding: 5px;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  width: 90px;

  @media only screen and (min-width: 1024px) {
    width: 125px;
    height: 70px;
    padding: 5px;
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

export const OnBag = styled.h1`
  align-items: center;
  background: #facb37;
  border-radius: 50%;
  bottom: 0;
  color: red;
  cursor: default;
  display: flex;
  font-size: 11px;
  font-weight: 700;
  height: 22.5px;
  justify-content: center;
  padding: 3px;
  position: absolute;
  transform: translate(calc(-100% + 40px), -25%);
  white-space: nowrap;
  width: 22.5px;
`

export const BtnWrapper = styled.div`
  display: flex;
`
