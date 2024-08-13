import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Home from "./Pages/Home";
import Footer from "./Components/Footersection/Footer";
import ProductDetails from "./Pages/ProductDetails";
import'./App.css'
import { useState } from "react";
import{ToastContainer}from "react-toastify" ;
import 'react-toastify/dist/ReactToastify.css';
import Register from "./Pages/Register";
import About from "./Pages/About";


function App() {
  const [cartItem,setCartItems] = useState([])
  const[cartProducts, setCartProducts]= useState([])
  
  return (
    <div>
      <BrowserRouter>
      <div>
        <ToastContainer theme="colored" position="top-center" autoClose={1000} />
      <Navbar cartItem={cartItem} />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Collections" element={<ShopCategory category="Collections"/>}/>
        <Route path="/Plists" element={<Product/>}/>
        <Route path="/search" element={<Product/>}/>
        <Route path="/product/:id" element={<ProductDetails cartItem={cartItem} setCartItems={setCartItems}/>}/>
        <Route path="/cart" element={<Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />}/>
        <Route path="/" element={<LoginSignup/>}/>
        <Route path="/signUp" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
