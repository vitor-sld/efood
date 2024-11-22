import { useDispatch } from 'react-redux'
import {
  ButtonInfos,
  Card,
  ImageProduct,
  ProductContainer,
  TextContainer
} from './styles'
import { addModal } from '../../store/reducer/cart'

const Product = ({
  image,
  name,
  recommendation,
  price,
  description,
  id
}: PropsProduct) => {
  const dispatch = useDispatch()

  const sendModal = () => {
    dispatch(addModal({ image, name, recommendation, price, description, id }))
  }

  return (
    <>
      <ProductContainer>
        <Card className="colored">
          <ImageProduct className="product" src={image} alt="" />
          <TextContainer>
            <h3>{name}</h3>
            <p>{description}</p>
          </TextContainer>

          <ButtonInfos onClick={sendModal}>Saiba mais</ButtonInfos>
        </Card>
      </ProductContainer>
    </>
  )
}

export default Product
