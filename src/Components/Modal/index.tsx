import {
  ButtonModal,
  Infos,
  ModalContainer,
  ModalProduct,
  Overlay
} from './styles'

import salmao from '../../Assets/img/sushi.png'

const Modal = () => (
  <ModalContainer>
    <ModalProduct>
      <img src={salmao} alt="" />
      <Infos>
        <h4>Pizza Marguerita</h4>
        <p>
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião.
        </p>
        <span>Serve: de 2 a 3 pessoas</span>
        <ButtonModal>
          Adicionar ao carrinho - <span>R$ 60,90</span>
        </ButtonModal>
      </Infos>
    </ModalProduct>
    <Overlay />
  </ModalContainer>
)

export default Modal
