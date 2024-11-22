import { useParams } from 'react-router-dom'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import ProductList from '../Components/ProductList'
import { useGetRestaurantQuery } from '../services/api'

type RestaurantId = {
  id: string
}

const Restaurant = () => {
  const { id } = useParams() as RestaurantId
  const { data } = useGetRestaurantQuery(id)

  console.log(data)

  if (data) {
    return (
      <>
        <Header size="small" />
        <Banner imageLink={data.capa} type={data.tipo} title={data.titulo} />
        <ProductList menu={data.cardapio} />
      </>
    )
  }
  return (
    <>
      <Header size="small" /> <p>Carregando</p>
    </>
  )
}
export default Restaurant
