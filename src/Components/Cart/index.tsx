import removeIcon from '../../Assets/img/removeCart.png'

import {
  Button,
  CartContainer,
  CartDiv,
  CartItem,
  CartText,
  InputGroup,
  Overlay,
  PriceContainer,
  Row,
  ThanksParagraph,
  TrashIcon
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  clear,
  purchaseSteps,
  removeCart,
  toggleCart
} from '../../store/reducer/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useState } from 'react'
import { usePurchaseMutation } from '../../services/api'
import { CloseButton } from '../Modal/styles'

const Cart = () => {
  const { cartList, isCartOpen, step } = useSelector(
    (state: RootReducer) => state.cartReducer
  )
  const dispatch = useDispatch()

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const totalPrice = () => {
    let initial = 0
    cartList.map((item) => (initial += item.price))
    return initial.toFixed(2)
  }
  const finishCart = () => {
    dispatch(toggleCart())
    dispatch(purchaseSteps({ step: 'cart' }))
    dispatch(clear())
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      cardExpiresMonth: '',
      cardExpiresYear: ''
    },

    onSubmit: async (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            city: values.city,
            zipCode: values.cep,
            number: Number(values.addressNumber),
            complement: values.complement,
            description: values.address
          }
        },
        products: cartList.map((item) => ({
          id: item.id,
          price: item.price
        })),
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardExpiresMonth),
              year: Number(values.cardExpiresYear)
            }
          }
        }
      })
      dispatch(purchaseSteps({ step: 'thankspage' }))
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('este campo é obrigatório'),
      address: Yup.string()
        .min(4, 'Digite o endereço completo')
        .required('este campo é obrigatório'),
      city: Yup.string()
        .min(3, 'Digite a sua cidade')
        .required('este campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'Digte um CEP válido')
        .required('este campo é obrigatório'),
      addressNumber: Yup.string().required(
        'este campo é obrigatório, digite SN para sem número'
      ),
      complement: Yup.string(),
      cardOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('este campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'Digite um cartão válido')
        .required('este campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Digite um CVC válido')
        .required('este campo é obrigatório'),
      cardExpiresMonth: Yup.string()
        .min(2, 'Digite o mês de vencimento do cartão')
        .max(2, 'Digite o mês de vencimento do cartão')
        .required('este campo é obrigatório'),
      cardExpiresYear: Yup.string()
        .min(2, 'Digite o ano de vencimento do cartão')
        .max(2, 'Digite o ano de vencimento do cartão')
        .required('este campo é obrigatório')
    })
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
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
  const checkAddress = () => {
    if (
      form.values.fullName.length > 3 &&
      form.values.address.length > 4 &&
      form.values.city.length > 2 &&
      form.values.cep.length > 7
    ) {
      dispatch(purchaseSteps({ step: 'card' }))
    } else {
      alert('Revise as informações')
    }
  }

  return (
    <>
      <CartContainer className={isCartOpen ? 'is-visible' : ''}>
        <Overlay onClick={() => dispatch(toggleCart())} />
        <CartDiv>
          <form onSubmit={form.handleSubmit}>
            {step == 'cart' && !isSuccess && (
              <div>
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
                <Button
                  onClick={() => dispatch(purchaseSteps({ step: 'address' }))}
                >
                  Continuar com a entrega
                </Button>
              </div>
            )}
            {step == 'address' && !isSuccess && (
              <div>
                <h6>Entrega</h6>
                <InputGroup>
                  <label htmlFor="fullname">Quem irá receber</label>
                  <input
                    type="text"
                    id="fullName"
                    value={form.values.fullName}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    value={form.values.address}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    value={form.values.city}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </InputGroup>
                <Row>
                  <InputGroup>
                    <label htmlFor="">CEP</label>
                    <InputMask
                      type="text"
                      id="cep"
                      name="cep"
                      value={form.values.cep}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={checkInputHasError('cep') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="addressNumber">Número</label>
                    <input
                      type="number"
                      id="addressNumber"
                      name="addressNumber"
                      value={form.values.addressNumber}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={
                        checkInputHasError('addressNumber') ? 'error' : ''
                      }
                    />
                  </InputGroup>
                </Row>
                <InputGroup>
                  <label htmlFor="">Complemento (opcional)</label>
                  <input type="text" />
                </InputGroup>
                <Button onClick={checkAddress}>
                  Continuar com o pagamento
                </Button>
                <Button
                  onClick={() => dispatch(purchaseSteps({ step: 'cart' }))}
                >
                  Voltar para o carrinho
                </Button>
              </div>
            )}
            {step == 'card' && (
              <div>
                <h6>Pagamento - Valor a pagar R${totalPrice()}</h6>
                <InputGroup>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardOwner"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                </InputGroup>
                <Row className="flex">
                  <InputGroup className="inputTwo">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      name="cardNumber"
                      type="text"
                      id="cardNumber"
                      value={form.values.cardNumber}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      type="text"
                      name="cardCode"
                      id="cardCode"
                      value={form.values.cardCode}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardExpiresMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      name="cardExpiresMonth"
                      id="cardExpiresMonth"
                      value={form.values.cardExpiresMonth}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={
                        checkInputHasError('cardExpiresMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardExpiresYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      name="cardExpiresYear"
                      id="cardExpiresYear"
                      value={form.values.cardExpiresYear}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                      className={
                        checkInputHasError('cardExpiresYear') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </InputGroup>
                </Row>
                <Button
                  type="submit"
                  onClick={() => form.handleSubmit}
                  title="Clique aqui para finalizar compra"
                  disabled={isLoading}
                >
                  {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                </Button>
                <Button
                  onClick={() => dispatch(purchaseSteps({ step: 'address' }))}
                >
                  Voltar para edição de endereço
                </Button>
              </div>
            )}
          </form>
          {isSuccess && data && step == 'thankspage' && (
            <div>
              <h6>Pedido realizado - {data.orderId}</h6>
              <ThanksParagraph>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </ThanksParagraph>
              <ThanksParagraph>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </ThanksParagraph>
              <ThanksParagraph>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </ThanksParagraph>
              <ThanksParagraph>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </ThanksParagraph>
              <Button onClick={() => finishCart()}>Concluir</Button>
            </div>
          )}
        </CartDiv>
      </CartContainer>
    </>
  )
}

export default Cart
