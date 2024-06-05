

import {React, createContext, useState, useEffect} from "react";
import Header from "./component/header";
// import Test from './component/test';
import Home from "./component/home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Products from "./component/products";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
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
  // const stripePromise = loadStripe('pk_test_51P6EolRupRBYPgi447oMA2mKjrK1CWj7RWydvALT5M7VqG6ZEYsJH2uXLKr7UTRm3zeSKlCV8pPiqf868BRBAsrr008AnAahoL');

const [windowDimenssion, detectW]= useState({
    minWidth:window.innerWidth
  })
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };
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
