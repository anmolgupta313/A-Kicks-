import { useEffect, useState } from "react"
import SingleCart from "./singlecart";
export default function Cart(){
    const [cart,setCart]=useState([])
    useEffect(() => {
        const cartId= localStorage.getItem('cartId')
        async function fetchData() {
          try {

           
            const getCart = await fetch(`http://localhost:3001/api/cart/${cartId}`, {
              method: "GET",
              headers: { "Content-type": "application/json" },
            });
            const res = await getCart.json();
            //  console.log(res)
    
            setCart(res.products);
       
          } catch (err) {
            console.log(err, "err");
          }
        }
        fetchData();

      }, []);

      console.log(cart,"cart")

  
    return(
<div className="cart-main-div">{cart.map((api)=>{
  return<SingleCart cart={api} />
})}</div> 
    )
}