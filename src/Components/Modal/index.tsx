import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { closeModal } from '../../store/reducer/cart'

import close from '../../Assets/img/close.png'

import {
  ButtonModal,
  CloseButton,
  Infos,
  ModalContainer,
  ModalProduct,
  Overlay
} from './styles'

const Modal = () => {
  const dispatch = useDispatch()
  const { modalRestaurant } = useSelector(
    (state: RootReducer) => state.cartReducer
  )

  if (modalRestaurant != null) {
    return (
      <ModalContainer className={modalRestaurant != null ? 'isOpen' : ''}>
        <ModalProduct>
          <CloseButton onClick={() => dispatch(closeModal())}>
            <img src={close} alt="Botão de fechar" />
          </CloseButton>
          <img src={modalRestaurant.image} alt={modalRestaurant.name} />
          <Infos>
            <h4>{modalRestaurant.name}</h4>
            <p>{modalRestaurant.description}</p>
            <span>{modalRestaurant.recommendation}</span>
            <ButtonModal>
              Adicionar ao carrinho - <span>R$ {modalRestaurant.price}</span>
            </ButtonModal>
          </Infos>
        </ModalProduct>
        <Overlay onClick={() => dispatch(closeModal())} />
      </ModalContainer>
    )
  }
  return <p>Carregando</p>
}

export default Modal
