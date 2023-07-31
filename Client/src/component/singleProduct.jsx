import React from "react";
import { useState } from "react";
export default function SingleProduct(props) {
  const [selectValue, setSelectValue] = useState(0);
  console.log(props, "Props");
  console.log(props.products.productName, "ProductName");

  function click(e) {
    // const userId= localStorage.getItem("userId")
    // const cartId=localStorage.getItem("cartId")
    // const prodyctId=props.products.id
    const buttonValue = e.target.value;
    //     if(prodyctId==buttonValue){
    // console.log("wgf")
    //     }else{
    //       console.log(prodyctId)
    //     }
    const cartId = localStorage.getItem("cartId");

    // console.log(cartId,"cartttt")

  //   const updateProduct = fetch(
  //     `http://localhost:3001/api/products/${buttonValue}`,
  //     {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         cart_id: cartId,
  //         quantity: selectValue,
  //       }),
  //       headers: { "Content-type": "application/json" },
  //     }
  //   );

  //   if (updateProduct) {
  //     console.log("perfect");
  //   } else {
  //     console.log("not working");
  //   }
  // }


  const postShoppingCart = fetch(
    `http://localhost:3001/api/shoppingcartitem/`,
    {
      method: "POST",
      body: JSON.stringify({
        cart_id: cartId,
        products_id:buttonValue,
        quantity: selectValue,
      }),
      headers: { "Content-type": "application/json" },
    }
  );

  if (postShoppingCart) {
    console.log("perfect");
  } else {
    console.log("not working");
  }
}

  function onChange(e) {
    const quantityvalue = e.target.value;
    setSelectValue(quantityvalue);
    console.log(quantityvalue, "Quantityvalue");
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
      <div className="select-cart-div-main">
        <div>
          <select className="select" onChange={onChange}>
            {" "}
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="btn-div">
          <button
            disabled={!selectValue}
            onClick={click}
            className="single product-btn"
            value={props.products.id}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
