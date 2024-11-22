import Product from '../Product'
import RestaurantCard from '../Restaurants'
import { ContainerList } from './styles'

export type PropsCard = {
  restaurant?: Restaurant[]
  menu?: Menu[]
}

const ProductList = ({ restaurant, menu }: PropsCard) => {
  console.log(restaurant)

  if (menu) {
    return (
      <>
        <ContainerList>
          <div className="container">
            {menu.map((item) => (
              <Product
                key={item.id}
                image={item.foto}
                name={item.nome}
                recommendation={item.porcao}
                price={item.preco}
                description={item.descricao}
                id={item.id}
              />
            ))}
          </div>
        </ContainerList>
      </>
    )
  }
  if (restaurant) {
    return (
      <>
        <ContainerList className={menu ? 'menu' : ''}>
          <div className="container">
            {restaurant.map((item) => (
              <RestaurantCard
                key={item.id}
                image={item.capa}
                name={item.titulo}
                rate={item.avaliacao}
                description={item.descricao}
                id={item.id}
                highlight={item.destacado}
                RestaurantsType={item.tipo}
              />
            ))}
          </div>
        </ContainerList>
      </>
    )
  }
  return <p>Carregando</p>
}

export default ProductList
