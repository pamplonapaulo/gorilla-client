import styled from 'styled-components'

export const Btn = styled.button`
  background: transparent;
  color: ${(props) => props.color};
  font-weight: 100;
  text-transform: uppercase;
  height: 50px;
  position: relative;
  display: inline-block;
  padding: 12px 27px;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  border: 2px solid;
  border-color: ${(props) => props.color};
  cursor: pointer;
  transition: ease-out 0.1s;
  width: 140px;

  @media only screen and (min-width: 1024px) {
    width: 140px;
  }

  &:hover {
    animation: pulse 1s ease-out 0.4s;
    color: #222222;

    &:after {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      visibility: visible;
      transition: width 0.05s ease 0.1s, height 0.05s ease 0.15s,
        visibility 0s 0.1s;
      transition: width 0.05s ease 0.1s, height 0.05s ease 0.15s,
        visibility 0s 0.1s;
    }

    &:before {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      visibility: visible;
      transition: width 0.05s ease 0.1s, height 0.05s ease 0.15s,
        visibility 0s 0.1s;
      transition: width 0.05s ease, height 0.05s ease 0.05s;
    }
  }
  &:after {
    position: absolute;
    content: '';
    width: 0%;
    height: 0%;
    visibility: hidden;
    bottom: -2px;
    right: -2px;
    border-left: 2px solid #222222;
    border-bottom: 2px solid #222222;
    transition: width 0.05s ease 0.05s, height 0.05s ease, visibility 0s 0.1s;
  }

  &:before {
    position: absolute;
    content: '';
    width: 0%;
    height: 0%;
    visibility: hidden;
    top: -2px;
    left: -2px;
    border-top: 2px solid #222222;
    border-right: 2px solid #222222;
    transition: width 0.05s ease 0.15s, height 0.05s ease 0.1s,
      visibility 0s 0.2s;
  }
`
