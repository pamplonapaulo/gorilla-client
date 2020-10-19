import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  background: #2da650;
  height: 150px;

  padding-top: 3rem;

  @media only screen and (min-width: 1024px) {
    height: 200px;
    justify-content: center;
    padding: 4rem 5vw 0;
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
  font-size: 2rem;
  color: #47311b;

  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
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
  color: #47311b;
  font-size: 11px;
  margin-top: 3rem;

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;
    color: #47311b;
  }
`
