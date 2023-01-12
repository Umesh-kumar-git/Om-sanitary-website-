import Navbar from "./nav section/Navbar";
import { BrowserRouter ,Route, Routes  } from "react-router-dom";
import Home from "./home section/Home";
import About from "./about page/About";
import Products from "./Products/Products";
import Footer from "./footer/Footer";
function App() {
  return (
      <>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sanitary" element={<Products/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>

      </>
       
      )
    
}

export default App;
