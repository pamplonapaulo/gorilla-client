import * as S from './styles'
import Instagram from 'components/Instagram'

const Footer = ({ address = 'gorillapack' }) => (
  <S.Wrapper>
    <S.Instagram>
      <S.P>{'Vem com o Gorilla!'}</S.P>

      <S.A
        target="_blank"
        rel="noreferrer"
        href={`https://www.instagram.com/${address}/`}
      >
        <Instagram />
        <S.P>{`@${address}`}</S.P>
      </S.A>
    </S.Instagram>

    <S.Copy>
      <S.PCopy>{'© 2020 Todos os direitos reservados'}</S.PCopy>
    </S.Copy>
  </S.Wrapper>
)

export default Footer
