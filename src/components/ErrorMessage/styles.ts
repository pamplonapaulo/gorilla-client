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
  // bottom: 20vh;
  bottom: ${(p) => p.bottomMobile};
  box-shadow: 0 0 0 2px inset #ff0000;
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  font-weight: 100;
  justify-content: center;
  letter-spacing: 5px;
  line-height: 1.5;
  padding: 5px 15px;
  position: absolute;
  text-align: center;
  text-shadow: 1px 1px 1px #000;
  width: calc(100% - 20px);
  top: ${(p) => p.topMobile};
  transform: translateY(10px);
  height: auto;

  @media only screen and (min-width: 1024px) {
    // bottom: unset;
    bottom: ${(p) => p.bottom};
    height: 75px;
    transform: translateY(50%);
    width: calc(100% - 60px);
    // top: 0;
    top: ${(p) => p.top};
  }
`
