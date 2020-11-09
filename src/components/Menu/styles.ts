import styled from 'styled-components'

export const SideBar = styled.div`
  margin-top: 70px;
  background: black;
  display: flex;
  height: calc(100vh - 70px);
  position: absolute;
  width: 100%;
  transform: translateX(-100vw);
  transition: 0.2s transform;

  &.active {
    transform: translateX(0);
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
    background: transparent;
    transform: translateX(0px);
    height: 70px;
    width: unset;
  }
`

export const D = styled.div`
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: unset;
  }
`
export const List = styled.ul`
  background: #facb37;
  height: 100%;
  padding: 0 25px 50px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;

  @media only screen and (min-width: 1024px) {
    background: transparent;
    flex-direction: row;
    margin-left: 5vw;
    padding: 0;
  }
`
export const Item = styled.li`
  align-items: center;
  border: 1px solid #2DA650;
  display: flex;
  height: 70px;
  justify-content: center;
  width: 100%;
  color: #2da650;

  &.active {
    border: #EF8321 solid 1px;
    color: #EF8321;
  }

  @media only screen and (min-width: 1024px) {
    border: none;
    margin-left: 1vw;
    padding: 0 15px;
    height: 40px;
    border: transparent solid 1px;
    cursor: pointer;
    color: #47311b;

    &&:nth-of-type(1) {
      margin-left: 3rem;
    }

    &:hover {
      border: #EF8321 solid 1px;
      color: #EF8321;
    }

    &.active {
      color: #FACB37;
      border-image: linear-gradient( to right,yellow,rgba(0,0,0,0) ) 0 0 1 0%;
      border-top: transparent;
    }
  }
}
`

export const H1 = styled.h1`
  text-align: center;
  white-space: nowrap;
  font-weight: 300;
`

export const A = styled.a`
  text-decoration: none;
`
