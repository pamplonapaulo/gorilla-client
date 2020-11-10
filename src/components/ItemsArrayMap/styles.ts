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

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  width: 70%;
`

export const Info = styled.div`
  flex-direction: column;
`

export const Text = styled.h1`
  font-weight: 200;
`

export const DeleteBtn = styled.div`
  cursor: pointer;
  flex-direction: column;
  height: fit-content;
  transform-origin: center;
  transition: 0.2s ease all;

  &:hover {
    transform: scale(1.2);
  }
`
