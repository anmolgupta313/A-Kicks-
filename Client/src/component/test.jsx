import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export default function Test(){
    const [userData,setUserData]=useState([])
    // const [userId,setUserId]= useState(0)

    // useEffect(()=>{


    //     async function aop(){
    //         const getUser=  await fetch("http://localhost:3001/api/user",{
    //             method:"GET",
    //             headers:{'Content-type':'application/json'}
    //           })
    //          const res=  await getUser.json()
            
    //          console.log(res)
            
    //         setUserData(res)
    //          console.log(userData,"User")
            
    //     }
        
    //     //  const cartt = userData.map((h)=>{
    //     //   console.log(h.userName)
    //     //   h.userName = asas? setUserId(h.id):""
    //     //  })
        
        
    //     //  function ff(){
    //     //   return cartt
    //     //  }
        
    //     //  ff()
        
    // //      console.log(userId,"UserID")

    // return aop
    // },[])
    return(<div>Abc</div>)
}