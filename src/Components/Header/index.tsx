import { Link } from 'react-router-dom'
import logo from '../../Assets/img/logo.png'
import { Container, HeaderContainer, MenuResponsive } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { toggleCart } from '../../store/reducer/cart'

export type Props = {
  size: 'big' | 'small'
}

const Header = ({ size }: Props) => {
  const { cartList } = useSelector((state: RootReducer) => state.cartReducer)
  const dispatch = useDispatch()

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
            <span onClick={() => dispatch(toggleCart())}>
              {' '}
              {cartList.length} - produto(s) no carrinho
            </span>
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
