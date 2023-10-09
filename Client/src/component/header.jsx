import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import akicks from "../logo/akicks.png";
import "./header.css";
import Auth from "../utils/auth";
import hamburger from"../logo/hamburger.png"
import X from"../logo/x.png"
// import { use } from "../../../Server/routes/api/products-routes";
export default function Header({ token, windowDimenssion,detectSize }) {
  const [inputValue, SetInputValue] = useState("");
  const [searchResultValue, setSearchResultValue] = useState([]);
  const [menuToggle,setMenuToggel]= useState(false)
//   const [windowDimenssion, detectW]= useState({
//     minWidth:window.innerWidth
//   })

//   const detectSize=()=>{
//     detectW({
//       minWidth:window.innerWidth
//     })
// }
  useEffect(() => {
    window.addEventListener("resize",detectSize)

 
    fetchData(inputValue);

    return()=>{
      window.removeEventListener("resize",detectSize)
    }
  }, [inputValue,windowDimenssion.minWidth]);

  function inputChange(e) {
    SetInputValue(e.target.value);

    console.log(inputValue, "Value");
  }

  // search result fetch api call
  async function fetchData(value) {
    try {
      const getProducts = await fetch(`http://localhost:3001/api/products/`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      const res = await getProducts.json();
      //  console.log(res,"Daatta")

      const r = await res.filter((resd) => {
        return value && resd.productName.toLowerCase().includes(value);
      });

      setSearchResultValue(r);
      console.log(searchResultValue, "rrrr");

      // setProducts(res);
    } catch (err) {
      console.log(err, "err");
    }
  }

  function mToggel(){
    setMenuToggel((prev)=>{
      return !prev
    })

    console.log(menuToggle,"t")
  }


  // till here

  // Mapping over search result value to display the search result
  const searchDisplay = searchResultValue.map((result) => {
    return (
      <div className="search-result-div">
        <Link to={`/single/${result.id}`} className="search-result-div">
          <div className="search-result-img-div">
            <img src={result.image}></img>
          </div>
          <div className="search-result-p-div">
            <p>{result.productName}</p>
          </div>
        </Link>
      </div>
    );
  });

  // till here
  return (
    <div className="nav-main-div">
      <div className="logo-div">
        <img src={akicks}></img>
      </div>

      {windowDimenssion.minWidth> 786 ?(
      <div className="main-nav-bar-links-div">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {token ? (
            ""
          ) : (
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
          )}

          {token ? (
            ""
          ) : (
            <li>
              <Link to="/logIn">LogIn</Link>
            </li>
          )}
          {token ? (
            <li>
              <Link to="/products">Products</Link>
            </li>
          ) : (
            ""
          )}
          {token ? (
            <li onClick={Auth.logout}>
              <Link to="/logIn">Logout</Link>
            </li>
          ) : (
            ""
          )}
          {token ? (
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className="search-div">
          <input
            placeholder="Search Sneakers"
            onChange={inputChange}
            type="text"
            value={inputValue}
          ></input>
        </div>

        <div className="search-result-main-div">{searchDisplay} </div>
      </div>):(menuToggle==false ? (<div onClick={mToggel}><img className="hamburger-img" src={hamburger} alt="" />
      </div>):(  <div className="main-nav-bar-links-div">
        <div onClick={mToggel} className="x-div-main" ><img className="closing-toggle-x" src={X} alt="" /></div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {token ? (
            ""
          ) : (
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
          )}

          {token ? (
            ""
          ) : (
            <li>
              <Link to="/logIn">LogIn</Link>
            </li>
          )}
          {token ? (
            <li>
              <Link to="/products">Products</Link>
            </li>
          ) : (
            ""
          )}
          {token ? (
            <li onClick={Auth.logout}>
              <Link to="/logIn">Logout</Link>
            </li>
          ) : (
            ""
          )}
          {token ? (
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className="search-div">
          <input
            placeholder="Search Sneakers"
            onChange={inputChange}
            type="text"
            value={inputValue}
          ></input>
        </div>

        <div className="search-result-main-div">{searchDisplay} </div>
      </div>))}
    </div>
  );
}
