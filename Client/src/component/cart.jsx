import { useEffect, useState } from "react"
export default function Cart(){
    const [cart,setCart]=useState("")
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
    
            setCart(res);
          } catch (err) {
            console.log(err, "err");
          }
        }
        fetchData();

      }, []);
    return(
<div>{cart.products[0].id}</div>
    )
}