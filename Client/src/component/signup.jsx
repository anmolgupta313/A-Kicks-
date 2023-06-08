import React, { useState } from "react";
import { useEffect } from "react";

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase";

export default function Signup(){

    const [userData, setUserData] =useState([])
    const [userId, setUserId]= useState(0)
    const [formData, setformData] = useState({"email":"", "password": ""})
useEffect(()=>{
  // debugger
  console.log(userData,"Duggal Sab the Great!!")
},[userData])
    function onChange(e){
return setformData((prev)=>{
    return {...prev,
    [e.target.name]:e.target.value }
})
    }

    async function userCartApi(e){


        e.preventDefault();

        // const user= {
        //   userName:"AnmolGA",
        //   password:"Lomna@321"
        // } 
      
        // const asas= user.userName
    
        const postUser=  await fetch("http://localhost:3001/api/user",{
          method:"POST",
          body:JSON.stringify({
            userName:formData.email,
            password:formData.password
        }),
        headers:{"Content-type":"application/json"}
        })
        // console.log(await postUser.json(),"addedUser")
      // debugger
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
      
      //  console.log(res)
      
      //  debugger
       setUserData(res)
    
        console.log(userData,"DataUser")
      
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
        <form action="" onSubmit={userCartApi}>
            <input onChange={onChange} type="email" name="email" id="email" value={formData.email} />
            <input onChange={onChange} type="password" name="password" id="password"  value={formData.password} />
            <button type="submit">SignUp</button>
        </form>
    </div>)
}