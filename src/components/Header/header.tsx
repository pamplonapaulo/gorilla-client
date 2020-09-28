import Hamburguer from 'components/Hamburguer'
import UserSection from 'components/UserSection'
import Menu from 'components/Menu'
import Logotype from 'components/Logotype'

import * as S from './styles'

const Header = () => (
  <S.TopBar>
    <Logotype />
    <UserSection />
    <Hamburguer />
    <Menu />
  </S.TopBar>
)

export default Header
