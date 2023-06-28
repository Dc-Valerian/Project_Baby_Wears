import Footer from '../blocks/Footer'
import Header from '../blocks/Header'
import {Outlet} from "react-router-dom"

const HomeLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default HomeLayout