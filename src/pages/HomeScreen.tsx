
import Blog from './Blog'
import Collections from './Collections'
import Hero from './Hero'
import MidCards from './MidCards'
import Product from './Product'

const HomeScreen = () => {
  return (
    <div>
        <Hero/>
        <MidCards/>
        <Product/>
        <Collections/>
        <Blog/>
    </div>
  )
}

export default HomeScreen