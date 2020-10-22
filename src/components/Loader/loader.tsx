import * as S from './styles'

type Props = {
  isHidden: boolean
}

const Loader = ({ isHidden }: Props) => (
  <S.Overlay isHidden={isHidden}>
    <S.Wrapper isHidden={isHidden}>
      <S.Loader>
        <S.Svg viewBox="25 25 50 50">
          <S.Circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="4"
            stroke-miterlimit="10"
          ></S.Circle>
        </S.Svg>
      </S.Loader>
    </S.Wrapper>
  </S.Overlay>
)

export default Loader
