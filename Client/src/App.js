

import React from "react";
import Header from "./component/header";
// import Test from './component/test';
import Home from "./component/home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Test from "./component/test";
// import react
// import { use } from '../../Server/routes';

function App() {
return(
<BrowserRouter>
<Header />

<div>
  <Routes>
  <Route path="/" Component={Home} />
  <Route path="/test" Component={Test} />
  </Routes>
</div>
</BrowserRouter>)
}

export default App;
