import React from "react";

import { Link } from "react-router-dom";
import logo from './logo.svg';
import './Home.css';
import  { useState,useEffect } from 'react';
import heroImage from"../logo/yoku.jpg"
import './newsingle.css';

import Palamino from"../logo/Palamino.jpg"

export default function Home(){
  const [products, setProducts] = useState([]);
  // const[newProducts, setNewProducts]=useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const getProducts = await fetch("http://localhost:3001/api/products", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        });
        const res = await getProducts.json();
        //  console.log(res)

        setProducts(res);
        // setNewProducts(res);
      } catch (err) {
        console.log(err, "err");
      }
    }
    fetchData();
  }, []);

  const result = products.slice(0, 8);

  const newReleaseCard= result.map((newrelease) => {
    return(
      <Link to={`/single/${newrelease.id}`} className="relared-sneakers-card-div">  <div>
        <div className="related-sneakers-img-div">
          <img src={newrelease.image} />
        </div>
        <div className="related-sneakers-title">
          <p>{newrelease.productName}</p>
        </div>
      </div></Link>
    )
  })

  console.log(result,"result")
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
<div className="related-sneakers-main-div">
            <div className="related-sneakers-div">
              <div className="heading"> <h2>NEW RELEASES</h2></div>
              <div className="related-sneakers-sub-div">
{newReleaseCard}
              </div>
              <div className="btn-main-page-releated"><button>SHOP NEW RELEASES</button></div>
            </div>
            </div>

            <div className="related-sneakers-main-div">
            <div className="related-sneakers-div">
              <div className="heading"> <h2>TOP SELLERS</h2></div>
              <div className="related-sneakers-sub-div">
{newReleaseCard}
              </div>
              <div className="btn-main-page-releated"><button>SHOP NEW RELEASES</button></div>
            </div>
            </div>
            <div className="related-sneakers-main-div">
            <div className="related-sneakers-div">
              <div className="heading"> <h2>AIR JORDAN 1S</h2></div>
              <div className="related-sneakers-sub-div">
{newReleaseCard}
              </div>
              <div className="btn-main-page-releated"><button>SHOP NEW RELEASES</button></div>
            </div>
            </div>
        </div>
      );
}