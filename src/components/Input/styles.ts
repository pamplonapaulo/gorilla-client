import styled, { keyframes } from 'styled-components'

const blink = keyframes`
 0% { background: #D9D9D9; }
 25% { background: #fff; }
 50% { background: #D9D9D9; }
 75% { background: #fff; }
 100% { background: #D9D9D9; }
`

export const HiddenInput = styled.input`
  display: none;
`

export const Container = styled.div`
  display: flex;
  transform: scale(${(props) => props.theme.size});
  transform-origin: left;

  @media only screen and (min-width: 1024px) {
    align-items: center;
    margin-right: 15px;
  }
`

export const Btn = styled.button`
  background: wheat;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 0;
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  width: 50px;
  height: 50px;

  &:hover {
    background: #e8c48e;
  }

  &:active {
    background: #c09060;
    color: #fff;
  }
`

export const FakeInput = styled.div`
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
  animation-name: ${(props) => (props.theme.quantity > 0 ? blink : 'none')};
  text-align: center;
  background: white;
  border: none;
  border-radius: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  padding: 0.7em 1em;
  font-weight: 500;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -ms-letter-spacing: 1px;
  letter-spacing: 1px;
  text-transform: uppercase;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  height: 50px;
  align-items: center;
  display: flex;
  padding: 0;
  width: calc(50vw - 115px);

  @media only screen and (min-width: 1024px) {
    width: 140px;
    width: ${(props) => (props.theme.isCartPage ? '80px' : '140px')};
  }
`

export const P = styled.p`
  display: table-cell;
  font-size: 1.5rem;
  vertical-align: middle;
  width: 100%;
`
