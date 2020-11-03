import styled from 'styled-components'
import React, { useState } from 'react'

type Props = {
  parentCallback: (total: number) => void
  scale: string
  value: number
}

const Input = ({ parentCallback, scale, value }: Props) => {
  const [quantity, setQuantity] = useState(value)

  function changeQuantity(value: string) {
    if (value === '-' && quantity > 0) {
      parentCallback(quantity - 1)
      setQuantity(quantity - 1)
    } else if (value === '+') {
      parentCallback(quantity + 1)
      setQuantity(quantity + 1)
    }
  }

  return (
    <>
      <Container theme={{ size: scale }}>
        <Btn onClick={() => changeQuantity('-')}>{'-'}</Btn>
        <FakeInput>
          <P>{quantity}</P>
        </FakeInput>
        <Btn onClick={() => changeQuantity('+')}>{'+'}</Btn>
        <HiddenInput defaultValue={quantity} type="number" min="0" />
      </Container>
    </>
  )
}

const HiddenInput = styled.input`
  display: none;
`

const Container = styled.div`
  display: flex;
  transform: scale(${(props) => props.theme.size});
  transform-origin: left;

  @media only screen and (min-width: 1024px) {
    margin-right: 15px;
  }
`
const Btn = styled.button`
  background: wheat;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 0.7em 1em;
  font-size: 1.2rem;
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

const FakeInput = styled.div`
  text-align: center;
  background: white;
  border: none;
  border-radius: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  padding: 0.7em 1em;
  font-size: 1.2rem;
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
  }
`

const P = styled.p`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
`

export default Input
