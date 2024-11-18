import Product from '../Product'
import { ContainerList } from './styles'

export type PropsCard = {
  type: 'cardProducts' | 'cardRestaurant'
}

const ProductList = ({ type }: PropsCard) => {
  return (
    <>
      <ContainerList type={type}>
        <div className="container">
          <Product type={type} />
          <Product type={type} />
          <Product type={type} />
          <Product type={type} />
          <Product type={type} />
          <Product type={type} />
        </div>
      </ContainerList>
    </>
  )
}

export default ProductList
