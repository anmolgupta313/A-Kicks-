import React, { useState, useContext } from "react";
import Auth from "../utils/auth"
import "./signup.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase";

export default function Login({token, setToken}){
  const navigate= useNavigate();
    const [userData, setUserData] =useState([])
  
    const [formData, setformData] = useState({"email":"", "password": ""})

useEffect(()=>{
  // debugger
  console.log(userData,"Anmol!!")

},[userData])
    function onChange(e){
return setformData((prev)=>{
    return {...prev,
    [e.target.name]:e.target.value }
})
    }

    async function loginApi(e){

        e.preventDefault();
       
        const postUser=  await fetch("http://localhost:3001/api/user/login",{
          method:"POST",
          body:JSON.stringify({
            userName:formData.email,
            password:formData.password
        }),
        headers:{"Content-type":"application/json"}
        })
        // console.log(await postUser.json(),"addedUser")
      // debugger
      const reslogin= await postUser.json()

      setUserData(reslogin)

      // console.log(userData,"LoginData")
        // calling auth login function which is setting token in localstorage
       Auth.login(reslogin.token)
// setting cart id into local storage
       localStorage.setItem("cartId",reslogin.cartId)

       
//Getting token from the local storage and then setting it into a state variable 
       const getToken= localStorage.getItem('id_token')

       setToken(getToken)
      navigate('/products')
        if(postUser.ok){
          console.log("perfect");
      }else{
          alert(postUser.statusText);
      }
      
      }

      // firebase Login 
    // function signUp(e){
    //     e.preventDefault();
    //     createUserWithEmailAndPassword(auth,formData.email,formData.password)
    //     .then((userCredentials)=>{
    //         // console.log(userCredentials)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
    // console.log(formData)


    return(<div className="form-main-div">
      <div><h1>Log <mark className="mark">In</mark></h1></div>
        <form action="" onSubmit={loginApi}>
            <input onChange={onChange} type="text" name="email" id="email" value={formData.email} />
            <input onChange={onChange} type="password" name="password" id="password"  value={formData.password} />
            <button type="submit">LogIn</button>
        </form>
    </div>)
}