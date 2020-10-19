import * as S from './styles'
import Instagram from 'components/Instagram'

const Footer = ({ address = 'gorillapack' }) => (
  <S.Wrapper>
    <S.Instagram>
      <S.A
        target="_blank"
        rel="noreferrer"
        href={`https://www.instagram.com/${address}/`}
      >
        <Instagram color={'#47311b'} />
        <S.P>{`@${address}`}</S.P>
      </S.A>
    </S.Instagram>

    <S.Copy>
      <S.PCopy>{'Gorilla Pack © 2020 Todos os direitos reservados'}</S.PCopy>
    </S.Copy>
  </S.Wrapper>
)

export default Footer
