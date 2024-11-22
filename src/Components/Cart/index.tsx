import removeIcon from '../../Assets/img/removeCart.png'

import {
  Button,
  CartContainer,
  CartDiv,
  CartItem,
  CartText,
  Overlay,
  PriceContainer,
  TrashIcon
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { removeCart, toggleCart } from '../../store/reducer/cart'
import { ModalContainer } from '../Modal/styles'

const Cart = () => {
  const { cartList, isCartOpen } = useSelector(
    (state: RootReducer) => state.cartReducer
  )
  const dispatch = useDispatch()

  const totalPrice = () => {
    let initial = 0
    cartList.map((item) => (initial += item.price))
    return initial.toFixed(2)
  }

  if (cartList.length == 0) {
    return (
      <CartContainer className={isCartOpen ? 'is-visible' : ''}>
        <Overlay onClick={() => dispatch(toggleCart())} />
        <CartDiv>
          <p>Seu carrinho está vazio!</p>
        </CartDiv>
      </CartContainer>
    )
  }
  return (
    <>
      <CartContainer className={isCartOpen ? 'is-visible' : ''}>
        <Overlay onClick={() => dispatch(toggleCart())} />
        <CartDiv>
          {cartList.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt="" />
              <CartText>
                <h4>{item.name}</h4>
                <span>R$ {item.price.toFixed(2)}</span>
                <TrashIcon onClick={() => dispatch(removeCart(item))}>
                  <img
                    src={removeIcon}
                    alt="Clique aqui para remover o item do carrinho"
                  />
                </TrashIcon>
              </CartText>
            </CartItem>
          ))}
          <PriceContainer>
            <span>Valor total</span>
            <span>R${totalPrice()}</span>
          </PriceContainer>
          <Button>Continuar com a entrega</Button>
        </CartDiv>
      </CartContainer>
    </>
  )
}

export default Cart
