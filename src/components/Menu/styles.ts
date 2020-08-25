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
    right: 5vw;
  }
`
export const List = styled.ul`
  background: #ccc;
  height: 100%;
  padding: 0 25px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;

  @media only screen and (min-width: 1024px) {
    background: transparent;
    flex-direction: row;
    padding: 0;
  }
`
export const Item = styled.li`
  align-items: center;
  border: 1px solid #056839;
  display: flex;
  height: 70px;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    border: none;
    margin-left: 5vw;
    padding: 0 15px;
    height: 40px;
    border: transparent solid 1px;
    transition: 0.2s all;
    cursor: pointer;
    color: #47311b;

    &:hover {
      border: white solid 1px;
      color: #fff;
    }
  }
}
`
export const A = styled.a`
  align-items: center;
  position: relative;
`
export const H1 = styled.h1`
  color: inherit;
  text-align: center;
  white-space: nowrap;
  font-weight: 300;
`
