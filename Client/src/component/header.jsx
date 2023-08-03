import { Link } from "react-router-dom";
import akicks from"../logo/akicks.png"
import "./header.css"
import Auth from "../utils/auth";
export default function Header() {
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
    </div>
  );
}
