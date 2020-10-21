import styled from 'styled-components'

export const TopBar = styled.header`
  background: #2da650;
  height: 70px;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 9;
  box-shadow: 0px 1px 8px #000;

  @media only screen and (min-width: 1024px) {
    padding: 0 5vw;
  }
`

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`
