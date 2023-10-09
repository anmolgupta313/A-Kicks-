

import {React, createContext, useState, useEffect} from "react";
import Header from "./component/header";
// import Test from './component/test';
import Home from "./component/home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Products from "./component/products";

import Signup from "./component/signup";
import Login from "./component/login"
import Cart from "./component/cart";
import Single from "./component/newsingle";
import Checkout from "./component/checkout";
import "./component/products.css"
import Footer from "./component/footer";
import auth from "./utils/auth";
// import react
// import { use } from '../../Server/routes';

function App() {
  const [token,setToken] = useState()

const [windowDimenssion, detectW]= useState({
    minWidth:window.innerWidth
  })

  const detectSize=()=>{
    detectW({
      minWidth:window.innerWidth
    })}

  useEffect(()=>{
    const getToken= auth.loggedIn()

    setToken(getToken)
  },[token])
return(
<BrowserRouter>
<Header token={token} windowDimenssion={windowDimenssion} detectSize={detectSize} />

<div >
  <Routes>
  <Route path="/" Component={Home} />
  <Route path="/products"element={<Products windowDimenssion={windowDimenssion} detectSize={detectSize} />} />
  <Route path="/signUp" Component={Signup} />
  <Route path="/cart" Component={Cart} />
  <Route path="/logIn" element={<Login token={token} setToken={setToken}/>} />
  <Route path="/single/:productId" Component={Single} />
  <Route path="/checkout" Component={Checkout} />
  </Routes>
</div>
<Footer />
</BrowserRouter>)


}

export default App;
