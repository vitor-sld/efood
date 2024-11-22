import Header from '../Components/Header'
import ProductList from '../Components/ProductList'
import { useGetFeaturedRestaurantQuery } from '../services/api'

const Home = () => {
  const { data } = useGetFeaturedRestaurantQuery()
  console.log(data)

  return (
    <>
      <Header size="big" />
      <ProductList restaurant={data} />
    </>
  )
}

export default Home
