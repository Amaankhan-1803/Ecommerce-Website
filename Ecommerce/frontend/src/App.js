import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import ShopCatg from './Pages/ShopCatg.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shopcatg' element={<ShopCatg />} />
          <Route path='/fashion' element={<ShopCatg category="fashion" />} />
          <Route path='/decor' element={<ShopCatg category="decor" />} />
          <Route path='/kitchen' element={<ShopCatg category="kitchen" />} />
          <Route path='/sports' element={<ShopCatg category="sports" />} />
          <Route path='/cleaning' element={<ShopCatg category="cleaning" />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
