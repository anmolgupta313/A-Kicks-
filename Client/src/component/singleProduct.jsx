import React from "react";

export default function SingleProduct(props) {
  console.log(props, "Props");
  console.log(props.products.productName, "ProductName");
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
      <button className="single product-btn">Add To Cart</button>
    </div>
  );
}
