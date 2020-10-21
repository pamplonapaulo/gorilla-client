import Hamburguer from 'components/Hamburguer'
import UserSection from 'components/UserSection'
import Menu from 'components/Menu'
import Logotype from 'components/Logotype'

import * as S from './styles'

const Header = () => (
  <S.TopBar>
    <Logotype />
    <S.Wrapper>
      <UserSection />
      <Hamburguer />
    </S.Wrapper>
    <Menu />
  </S.TopBar>
)

export default Header
