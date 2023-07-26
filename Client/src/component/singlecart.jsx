import {React, useState} from "react";
import "./cart.css"
export default function SingleCart(props) {
    const [selectValue, setSelectValue] = useState(0);
    const cartId= localStorage.getItem('cartId')

    // console.log(cartId,"cartttt")

    function click(e){
const buttonValue= e.target.value
const updateProduct=   fetch(`http://localhost:3001/api/products/${buttonValue}`,{
          method:"PUT",
          body:JSON.stringify({
            cart_id:cartId,
            quantity:selectValue
           
        }),
        headers:{"Content-type":"application/json"}
        })

      if(updateProduct){
        // console.log("perfect");
    }else{
        console.log("not working");
    }
}

  function onChange(e) {
    const quantityvalue = e.target.value;
    setSelectValue(quantityvalue);
    // console.log(quantityvalue, "Quantityvalue");
  }

  return (
    <div className="single-cart-main-div">
      <div className="single-cart-sub-div">
        <img src={props.cart.image}></img>
      </div>
      <div className="single-cart-sub-div">
        <div>{props.cart.productName}</div>
        <div>{props.cart.size}</div>
      </div>
        <div className="single-cart-sub-div">
          <select className="select" onChange={onChange}>
            {" "}
            <option value="0">{props.cart.quantity}</option>
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
     <div className="single-cart-sub-div">
        <button
            // disabled={!selectValue}
            onClick={click}
            className="single product-btn"
            value={props.cart.id}
          >
            Update Cart
          </button></div>
    </div>
  );

}