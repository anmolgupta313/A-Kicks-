import React from "react";

import logo from './logo.svg';
import './Home.css';
import  { useState } from 'react';
import heroImage from"../logo/yoku.jpg"

import Palamino from"../logo/Palamino.jpg"

export default function Home(){

 
    return (
        <div className="App">
        <div className="main-div-hero-section">
          <div className="sub-div-hero-section">
            <img src={Palamino} alt="logo" />
            </div>
           <div className="heading-div">
            <h1>AIR JORDAN 1 RETRO <br /> HIGH OG 'PALOMINO'
</h1>
<a href="http://localhost:3000/single/12"><p>Shop Now</p></a>
           </div>
           
            </div>
        </div>
      );
}