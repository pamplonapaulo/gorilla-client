import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: -200px;
  background: #2da650;
  height: 200px;

  @media only screen and (min-width: 1024px) {
    bottom: 0;
    background: transparent;
    height: 200px;
    padding: 4rem 5vw 0;
    position: fixed;
  }
`

export const Instagram = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    position: absolute;
    right: 5vw;
  }
`

export const A = styled.a`
  align-items: center;
  color: #000f08;
  display: flex;
  margin-top: 5px;
  text-decoration: none;

  @media only screen and (min-width: 1024px) {
    transition: 0.2s transform;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const P = styled.p`
  align-items: center;
  font-size: 2.5rem;
  color: #ef8321;
  text-shadow: 1px 1px 1px #000;
`

export const Copy = styled.div`
  padding-bottom: 30px;
  text-align: center;
  @media only screen and (min-width: 1024px) {
    bottom: 25px;
    padding-bottom: 0px;
    position: absolute;
  }
`

export const PCopy = styled.div`
  color: #ef8321;
  font-size: 1.5rem;
  margin-top: 3rem;
  text-shadow: 1px 1px 1px #000;
`
