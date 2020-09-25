import styled from 'styled-components'

const Input = () => (
  <>
    <Container>
      <Btn>{'-'}</Btn>
      <FakeInput>
        <P>{'2'}</P>
      </FakeInput>
      <Btn>{'+'}</Btn>
      {/* <S.Input defaultValue={'1'} type="number" min="0" /> */}
    </Container>
  </>
)

const Container = styled.div`
  margin-right: 15px;
  display: flex;
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
  width: 140px;
  height: 50px;
  align-items: center;
  display: flex;
  padding: 0;
`

const P = styled.p`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
`

export default Input
