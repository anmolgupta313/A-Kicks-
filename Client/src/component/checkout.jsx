// import { Link } from "react-router-dom";
import { CardElement,PaymentElement,useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
// import Stripe from "stripe";
import "../component/checkout.css"

// import {PaymentElement} from '@stripe/react-stripe-js';
export default function Checkout() {

// const elements= useElements()
// const stripe= useStripe()
    const [shippingAddress, setShippingAddress]= useState({"email":"",
"firstName":"",
"lastName":"",
"country":"",
"state":"",
"city":"",
"postal":"",
"shippingAddress":""
})

function inputChange(e){
    return setShippingAddress((prev)=>{
return{...prev,
[e.target.name]:e.target.value}
    })
}
// const {clientSecret} = fetch("api/cart/create-payment-intent",{
//   method:"POST",
//   headers:{
//     'Content-Type':'application/json'
//   },
//   body:JSON.stringify({
//     total:"2000",
//   })
// }).then(r=>r.json())


const userId= localStorage.getItem("userId")
async function  postCheckout(){
    const postCheckout=  await fetch("http://localhost:3001/api/shippingAddress",{
        method:"POST",
        body:JSON.stringify({
          email:shippingAddress.email,
          firstName:shippingAddress.firstName,
          lastName:shippingAddress.lastName,
          shippingAddress:shippingAddress.shippingAddress,
          country:shippingAddress.country,
          state:shippingAddress.state,
          city:shippingAddress.city,
          postal:shippingAddress.postal,
          users_id:userId
         

      }),
      headers:{"Content-type":"application/json"}
      })
      // console.log(await postUser.json(),"addedUser")
    // debugger
      if(postCheckout.ok){
        console.log("perfect");
    }else{
        alert(postCheckout.statusText);
    }
}

console.log(shippingAddress,"asaddess")
  return (
    <div className="main-div-checkout">
      <div>
        <h1>Checkout</h1>
      </div>

      <div className="main-div-form">
        <form onSubmit={postCheckout}>
          <div className="name-div">
            <label>
              Email Address<input name="email" type="email" onChange={inputChange} value={shippingAddress.email}></input>
            </label>
          </div>
          <div className="main-div-name">
            <div className="name-div">
              <label>
                First Name<input name="firstName" type="text" onChange={inputChange} value={shippingAddress.firstName}></input>
              </label>
            </div>
            <div className="name-div">
              <label>
                Last Name<input name="lastName" type="text" onChange={inputChange} value={shippingAddress.lastName}></input>
              </label>
            </div>
          </div>
          <div className="main-div-details-address">
            <div className="name-div">
              <label>
                Country<input type="text" name="country" defaultValue="Canada" onChange={inputChange} value={shippingAddress.country}></input>
              </label>
            </div>
            <div className="name-div">
           <label>State<select className="select"  name="state" onChange={inputChange} value={shippingAddress.shippingAddress}>
            <option>AB</option>
            <option>BC</option>
            <option>MB</option>
            <option>NB</option>
            <option>NL</option>
            <option>NT</option>
            <option>NS</option>
            <option>NU</option>
            <option>ON</option>
            <option>PE</option>
            <option>QC</option>
            <option>SK</option>
            <option>YT</option>
           </select></label>
          </div>
          <div className="name-div">
          <label>
                City<input name="city" type="text" onChange={inputChange} value={shippingAddress.city}></input>
              </label>
          </div>
          <div className="name-div">
          <label>
                Postal Code<input name="postal" type="text" onChange={inputChange} value={shippingAddress.postal}></input>
              </label>
          </div>
          </div>

          <div className="name-div">
            <label>Shipping Address<input type="text" name="shippingAddress" onChange={inputChange} value={shippingAddress.shippingAddress}></input></label>
          </div>
          {/* <PaymentElement /> */}
          <div className="div-btn"><button>Book Order</button></div>
          
        </form>
      </div>
    </div>
  );
}
