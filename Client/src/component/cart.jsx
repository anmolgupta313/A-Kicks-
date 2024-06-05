import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCart from "./singlecart";
export default function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartId = localStorage.getItem("cartId");
    async function fetchData() {
      try {
        const getCart = await fetch(
          `http://localhost:3001/api/shoppingcartitem/cartt/${cartId}`,
          {
            method: "GET",
            headers: { "Content-type": "application/json" },
          }
        );
        const res = await getCart.json();
        //  console.log(res)

        setCart(res);
      } catch (err) {
        console.log(err, "err");
      }
    }
    fetchData();
  }, []);

  console.log(cart, "cart");

  // Calculating Subtotal
  const subTotal = cart.reduce((accumulator, current) => {
    return accumulator + current.product.price * current.quantity;
  }, 0);

  function session() {

    console.log(cart[0].product,"cartProduct")
    fetch("http://localhost:3001/api/cart/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),

     
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location= url
        console.log(url);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="cart-main-div">
      <div>
        {cart.map((api) => {
          return <SingleCart cart={api} />;
        })}
      </div>
      <div className="subtotal">
        <div>
          <p>Subtotal: $ {subTotal}</p>
        </div>
        <div>
          <p>Gst 13%: $ {(subTotal * 13) / 100}</p>
        </div>
        <div>
          <p>Total: {subTotal + (subTotal * 13) / 100} </p>
        </div>
        <div className="checkout-div">
          <button onClick={session}>
            <Link to={"#"}>Proceed To Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
