import React from "react";

export default function SingleProduct(props) {
  console.log(props, "Props");
  console.log(props.products.productName, "ProductName");

  function click(e){
    // const userId= localStorage.getItem("userId")
    // const cartId=localStorage.getItem("cartId")
    // const prodyctId=props.products.id
const buttonValue= e.target.value
//     if(prodyctId==buttonValue){
// console.log("wgf")
//     }else{
//       console.log(prodyctId)
//     }
    const cartId= localStorage.getItem('cartId')

    // console.log(cartId,"cartttt")

const updateProduct=   fetch(`http://localhost:3001/api/products/${buttonValue}`,{
          method:"PUT",
          body:JSON.stringify({
            cart_id:cartId,
           
        }),
        headers:{"Content-type":"application/json"}
        })

      if(updateProduct){
        console.log("perfect");
    }else{
        console.log("not working");
    }

  }



  return (
    <div className="main-single-product-div">
      <div className="product-img-div">
        <img src={props.products.image}></img>
      </div>
      <div className="product-name-div">
        <p>{props.products.productName}</p>
      </div>
      <div className="product-price-div">
        <p>${props.products.price}</p>
      </div>
      <button onClick={click} className="single product-btn" value={props.products.id}>Add To Cart</button>
    </div>
  );
}
