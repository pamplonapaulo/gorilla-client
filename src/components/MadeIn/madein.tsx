import * as S from './styles'

const MadeIn = ({
  nikitiStampTop = 'MADE IN',
  nikitiStampBottom = 'NIKITI CITY'
}) => (
  <S.Container>
    <S.Stamp>{nikitiStampTop}</S.Stamp>
    <S.Stamp>{nikitiStampBottom}</S.Stamp>
  </S.Container>
)

export default MadeIn
