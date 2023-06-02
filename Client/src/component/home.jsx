import React from "react";

import logo from './logo.svg';
import '../App.css';
import  { useState } from 'react';

export default function Home(){

      const [userData, setUserData] =useState([])
const [userId, setUserId]= useState(0)

async function userCartApi(){

    const user= {
      userName:"AnmolGA",
      password:"Lomna@321"
    } 
  
    // const asas= user.userName

    const postUser=  await fetch("http://localhost:3001/api/user",{
      method:"POST",
      body:JSON.stringify({
        userName:user.userName,
        password:user.password
    }),
    headers:{"Content-type":"application/json"}
    })
  
    if(postUser.ok){
      console.log("perfect");
  }else{
      alert(postUser.statusText);
  }
  
    const getUser=  await fetch("http://localhost:3001/api/user",{
      method:"GET",
      headers:{'Content-type':'application/json'}
    })
   const res= await getUser.json()
  
   console.log(res)
  
    // setUserData(res)

    // console.log(userData,"DataUser")
  
//    const cartt = await userData.map((h)=>{
//     console.log(h.userName,"Multi UserName")
//    return  h.userName = user.userName? setUserId(h.id):""
//    })
  
  
//    function ff(){
//     return cartt
//    }
  
//    ff()
  
//    console.log(userId,"UserID")
  
  }
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <button onClick={userCartApi}>Logggin</button>
        </div>
      );
}