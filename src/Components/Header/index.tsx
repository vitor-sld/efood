import { Link } from 'react-router-dom'
import logo from '../../Assets/img/logo.png'
import { Container, HeaderContainer, MenuResponsive } from './styles'

export type Props = {
  size: 'big' | 'small'
}

const Header = ({ size }: Props) => {
  return (
    <>
      <HeaderContainer size={size}>
        <Container className="container">
          <MenuResponsive size={size}>
            <Link to="/" className="link">
              Restaurantes
            </Link>
            <h1>
              <img src={logo} alt="Efood" />
            </h1>
            <span> 0 - produto(s) no carrinho</span>
          </MenuResponsive>
          <h5 className={size == 'big' ? 'is-visible' : ''}>
            Viva experiências gastronômicas
            <br /> no conforto da sua casa
          </h5>
        </Container>
      </HeaderContainer>
    </>
  )
}

export default Header
