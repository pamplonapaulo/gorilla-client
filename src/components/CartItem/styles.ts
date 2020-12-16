import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  padding: 10px 0px;
  margin: 5px auto;
  border-bottom: 1px solid darkgray;
`

export const Thumb = styled.div`
  width: 25%;
  height: 100%;
`

export const ImgWrap = styled(Image)`
  width: 75px;
`

export const Details = styled.div<{
  isCartPage?: boolean
}>`
  display: flex;
  flex-direction: ${(p) => (p.isCartPage ? 'row' : 'column')};
  height: ${(p) => (p.isCartPage ? 'auto' : '100px')};

  justify-content: space-between;
  width: ${(p) => (p.isCartPage ? '90%' : '70%')};
`

export const Info = styled.div<{
  isCartPage?: boolean
}>`
  align-items: ${(p) => (p.isCartPage ? 'center' : 'end')};
  display: ${(p) => (p.isCartPage ? 'flex' : 'block')};
  flex-direction: ${(p) => (p.isCartPage ? 'row' : 'column')};
  justify-content: ${(p) => (p.isCartPage ? 'space-around' : 'unset')};
  width: ${(p) => (p.isCartPage ? '500px' : '100%')};
`

export const Text = styled.h1`
  font-weight: 200;
`

export const DeleteBtn = styled.div<{
  isCartPage?: boolean
}>`
  align-self: ${(p) => (p.isCartPage ? 'center' : 'end')};
  margin: ${(p) => (p.isCartPage ? 'auto' : '0')};
  cursor: pointer;
  flex-direction: column;
  height: fit-content;
  transform-origin: center;
  transition: 0.2s ease all;

  &:hover {
    transform: scale(1.2);
  }
`
