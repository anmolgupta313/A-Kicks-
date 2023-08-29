import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import akicks from"../logo/akicks.png"
import "./header.css"
import Auth from "../utils/auth";
// import { use } from "../../../Server/routes/api/products-routes";
export default function Header() {
  const [inputValue,SetInputValue]= useState("")
const [searchResultValue, setSearchResultValue]= useState([])
  useEffect(()=>{
    fetchData(inputValue);
  },[inputValue
  ])

  function inputChange(e){
    SetInputValue(e.target.value)

    console.log(inputValue,"Value")
  }

  // search result fetch api call
  async function fetchData(value) {
    try {
      const getProducts = await fetch(`http://localhost:3001/api/products/`, {
        method: "GET",
        headers: { "Content-type": "application/json"},
      });
      const res = await getProducts.json();
      //  console.log(res,"Daatta")

       const r=  await res.filter((resd)=>{
return value && resd.productName.toLowerCase().includes(value)

       })
     
setSearchResultValue(r)
console.log(searchResultValue,"rrrr")

      // setProducts(res);
    } catch (err) {
      console.log(err, "err");
    }
  }

// till here

// Mapping over search result value to display the search result
const searchDisplay= searchResultValue.map((result)=>{
return (  <div className="search-result-div">
  {/* <Link to={`/single/${result.id}`}></Link> */}
        <div className="search-result-img-div"><img src={result.image}></img></div>
        <div className="search-result-p-div"><p>{result.productName}</p></div>
       </div> )
})

// till here
  return (
    <div className="nav-main-div">
      <div className="logo-div"><img src={akicks}></img></div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {Auth.loggedIn() ? (""):(<li>
          <Link to="/signUp">Sign Up</Link>
        </li>
        )}

{Auth.loggedIn() ? (""):(
        <li>
          <Link to="/logIn">LogIn</Link>
        </li>)}
        {Auth.loggedIn() ? (
          <li>
            <Link to="/products">Products</Link>
          </li>
        ) : (
          ""
        )}
        {Auth.loggedIn() ? (
          <li onClick={Auth.logout}>
            <Link to="/logIn">Logout</Link>
          </li>
        ) : (
          ""
        )}
{Auth.loggedIn()? (  <li>
          <Link to="/cart">Cart</Link>
        </li>):("")}
      
      </ul>
      <div className="search-div"><input onChange={inputChange} type="text" value={inputValue}></input></div>

<div className="search-result-main-div">{searchDisplay} </div>
    
    </div>
  );
}
