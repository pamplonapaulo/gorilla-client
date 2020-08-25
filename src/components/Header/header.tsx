import * as S from './styles'
import Hamburguer from 'components/Hamburguer'
import Menu from 'components/Menu'
import Logotype from 'components/Logotype'

const Header = () => (
  <S.TopBar>
    <Logotype />
    <Hamburguer />
    <Menu />
  </S.TopBar>
)

export default Header
