import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`

export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  color: #47311b;
  padding: 30px 0;
`

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  &::after {
    background: wheat;
    content: '\\2193';
    cursor: none;
    font-size: 2rem;
    transform: translate(0, -100%);
    pointer-events: none;
    height: 50px;
    width: 25px;
    align-self: flex-end;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  color: #47311b;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
`

export const Select = styled.select`
  appearance: none;
  display: flex;
  flex-direction: row;
  text-align: center;
  background: white;
  border: none;
  border-radius: 0;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.9);
  cursor: pointer;
  text-align: center;
  height: 50px;
  align-items: center;
  display: flex;
  padding: 0 1rem;
  padding-right: 25px;
`

export const Option = styled.option`
  display: flex;
  flex-direction: row;
  color: orange;
`
