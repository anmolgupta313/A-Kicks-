

import React from "react";
import Header from "./component/header";
// import Test from './component/test';
import Home from "./component/home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Products from "./component/products";

import Signup from "./component/signup";
import Login from "./component/login"
import Cart from "./component/cart";
import Single from "./component/newsingle";
import "./component/products.css"
// import react
// import { use } from '../../Server/routes';

function App() {
return(
<BrowserRouter>
<Header />

<div >
  <Routes>
  <Route path="/" Component={Home} />
  <Route path="/products" Component={Products} />
  <Route path="/signUp" Component={Signup} />
  <Route path="/cart" Component={Cart} />
  <Route path="/logIn" Component={Login} />
  <Route path="/single/:productId" Component={Single} />
  </Routes>
</div>
</BrowserRouter>)
}

export default App;
