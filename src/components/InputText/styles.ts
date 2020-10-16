import styled from 'styled-components'

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

export const InputRed = styled.input`
  padding: 5px;
  border: solid 1px transparent;
  margin: 0 12.5% 3rem;
  outline-color: white;
  outline-width: 1px;
  background: rgba(255, 0, 0, 0.1);
  color: #ff0000;
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
    color: #ff0000;
    border: solid 1px #ff0000;

    &::-webkit-input-placeholder {
      color: transparent;
    }
  }
`
