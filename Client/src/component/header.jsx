import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/signUp">Sign Up</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
        </div>
    )
}