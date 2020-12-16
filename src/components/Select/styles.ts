import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &::before {
    background: wheat;
    content: '\\2193';
    cursor: none;
    font-size: 2rem;
    transform: translate(0, 100%);
    pointer-events: none;
    height: 50px;
    width: 25px;
    align-self: flex-end;
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 9;
  }
`

export const Label = styled.label`
  background: #ef8321;
  display: flex;
  flex-direction: row;
  color: #47311b;
  font-size: 1.5em;
  height: 50px;
  align-items: center;
  margin: 0;
  z-index: 9;
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
  z-index: 2;
`

export const Option = styled.option`
  color: orange;
  display: flex;
  display: none;
  flex-direction: row;
`

export const StyledOptions = styled.div`
  width: 100%;
  height: auto;
  transform: translateY(-100%);
  transition: all 0.2s ease;
  transform: ${(props) =>
    props.theme.visible ? 'translateY(0%)' : '-translateY(-100%)'};
`

export const Opt = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  text-transform: uppercase;
  font-weight: 300;
  padding: 0 25px 0 1rem;
  font: 400 13.3333px Arial;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 1px #000000;
  background: rgba(255, 255, 255, 0.6);
`
