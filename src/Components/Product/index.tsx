import sushi from '../../Assets/img/sushi.png'
import star from '../../Assets/img/estrela.png'
import {
  Card,
  ImageProduct,
  ProductContainer,
  TagsContainer,
  TitleRate
} from './styles'
import { PropsCard } from '../ProductList'

const Product = ({ type }: PropsCard) => {
  if (type == 'cardRestaurant') {
    return (
      <>
        <ProductContainer>
          <ImageProduct src={sushi} alt="" />
          <Card>
            <TagsContainer>
              <span>Destaque</span>
            </TagsContainer>
            <TitleRate>
              <h3>Hioki Sushi</h3>
              <span>
                4.9 <img src={star} alt="nota do restaurante" />
              </span>
            </TitleRate>
            <p>
              Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes
              irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
              garantida.Experimente o Japão sem sair do lar com nosso delivery!
            </p>
            <button>Saiba mais</button>
          </Card>
        </ProductContainer>
      </>
    )
  }
  return (
    <>
      <ProductContainer>
        <Card className="colored">
          <ImageProduct className="product" src={sushi} alt="" />
          <TitleRate>
            <h3>Hioki Sushi</h3>
          </TitleRate>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button>Saiba mais</button>
        </Card>
      </ProductContainer>
    </>
  )
}

export default Product
