import styled from 'styled-components'

type Props = {
  bottom: string
  top: string
  bottomMobile: string
  topMobile: string
}

export const Error = styled.h1<{
  bottom: string
  top: string
  bottomMobile: string
  topMobile: string
}>`
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  bottom: ${(p) => p.bottomMobile};
  box-shadow: 0 0 0 2px inset #ff0000;
  color: #fff;
  display: flex;
  font-size: 10px;
  font-weight: 100;
  justify-content: center;
  height: auto;
  letter-spacing: 3px;
  line-height: 1.5;
  margin-top: 7.5px;
  padding: 5px 0;
  position: absolute;
  text-align: center;
  text-shadow: 1px 1px 1px #000;
  // width: calc(100% - 30px);
  width: calc(100% - 38px);
  top: ${(p) => p.topMobile};

  @media only screen and (min-width: 1024px) {
    bottom: ${(p) => p.bottom};
    font-size: 1.5rem;
    height: 75px;
    margin-left: -25px;
    padding: 5px 15px;
    transform: translateY(50%);
    top: ${(p) => p.top};
    width: calc(20vw - 10px);
  }
`
