import Banner from '../Components/Banner'
import Header from '../Components/Header'
import ProductList from '../Components/ProductList'

const Restaurant = () => (
  <>
    <Header size="small" />
    <Banner />
    <ProductList type="cardProducts" />
  </>
)

export default Restaurant
