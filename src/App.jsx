import "../src/index.css"
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import AboutUs from "./Components/AboutUs"
import Menu from "./Components/Menu"
import Product from "./Components/Product"
import Review from "./Components/Review"
import Contact from "./Components/Contact"
import Blogs from "./Components/Blogs"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="bg-[#ffffff] w-full overflow-x-hidden">
      <NavBar />
      <br />
      <Home />
      <AboutUs />
      <Menu/>
      <Product />
      <Review />
      <Contact />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
