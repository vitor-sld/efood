import sushi from '../../Assets/img/sushi.png'
import star from '../../Assets/img/estrela.png'
import {
  Card,
  ImageProduct,
  ProductContainer,
  TagRow,
  TitleRate
} from './styles'
import { Link } from 'react-router-dom'
import Tag from '../Tag'

export type PropsProduct = {
  image: string
  name: string
  rate: number
  description: string
  id: number
  highlight: boolean
  RestaurantsType: string
}

const RestaurantCard = ({
  id,
  image,
  name,
  rate,
  description,
  highlight,
  RestaurantsType
}: PropsProduct) => {
  return (
    <Link to={`/restaurantes/${id}`} style={{ textDecoration: 'none' }}>
      <ProductContainer>
        <ImageProduct src={image} alt="" />
        <Card>
          <TagRow>
            {highlight && <Tag text="Destaque" />}
            <Tag text={RestaurantsType} />
          </TagRow>

          <TitleRate>
            <h3>{name}</h3>
            <span>
              {rate} <img src={star} alt="nota do restaurante" />
            </span>
          </TitleRate>
          <p>{description}</p>
          <button>Saiba mais</button>
        </Card>
      </ProductContainer>
    </Link>
  )
}

export default RestaurantCard
