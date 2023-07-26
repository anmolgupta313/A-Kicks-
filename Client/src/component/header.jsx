import { Link } from "react-router-dom";
import Auth from "../utils/auth";
export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/signUp">Sign Up</Link>
        </li>
        <li>
          <Link to="/logIn">LogIn</Link>
        </li>
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
