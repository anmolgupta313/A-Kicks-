import React from "react";
import useFetch from "../hook/fetch";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Home.css";
import { useState, useEffect } from "react";
import heroImage from "../logo/yoku.jpg";
import "./newsingle.css";

import Palamino from "../logo/Palamino.jpg";

export default function Home() {
  const [products, setProducts] = useState([]);


  const jordanOne = products.filter((air) => {
    return air.productName.includes("AIR JORDAN 1");
  });

  const yeezy = products.filter((yeezy) => {
    return yeezy.productName.includes("YEEZY");
  });


  const [newProducts, setNewProducts] = useState([]);
  // const [yeezyProducts, setYeezyProducts] = useState([]);
  // const [airJordanOne, setAirJordanOne] = useState([]);
  // const [yeezy, setYeezy] = useState([]);
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

    fetchDataAirJordan();
  }, []);

  async function fetchDataAirJordan() {
    try {
      const getProducts = await fetch(
        "http://localhost:3001/api/category/parent/1",
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const res = await getProducts.json();
      //  console.log(res)

      setNewProducts(res[0].products);
      // console.log(newProducts, "airjordan1");

      // const jordanOne = res[0].products.filter((air) => {
      //   return air.productName.includes("AIR JORDAN 1");
      // });

      // const jEight = jordanOne.slice("", 8);
      // // console.log(jordanOne,"kj")
      // setAirJordanOne(jEight);

      // setYeezyProducts(res[2].products);
      // const yeezy = res[2].products.filter((yeezy) => {
      //   return yeezy.productName.includes("YEEZY");
      // });

      // // console.log(yeezyProducts,"yya")
      // const yeezyEight = yeezy.slice("", 8);
      // // console.log(jordanOne,"kj")
      // setYeezy(yeezyEight);

      // setNewProducts(res);
    } catch (err) {
      console.log(err, "err");
    }
  }

  const result = products.slice(0, 8);

  const newReleaseCard = result.map((newrelease) => {
    return (
      <Link
        to={`/single/${newrelease.id}`}
        className="relared-sneakers-card-div"
      >
        {" "}
        <div>
          <div className="related-sneakers-img-div">
            <img src={newrelease.image} />
          </div>
          <div className="related-sneakers-title">
            <p>{newrelease.productName}</p>
          </div>
        </div>
      </Link>
    );
  });

  const newReleaseCardJordanOne = jordanOne.slice(0,8).map((newrelease) => {
    return (
      <Link
        to={`/single/${newrelease.id}`}
        className="relared-sneakers-card-div"
      >
        {" "}
        <div>
          <div className="related-sneakers-img-div">
            <img src={newrelease.image} />
          </div>
          <div className="related-sneakers-title">
            <p>{newrelease.productName}</p>
          </div>
        </div>
      </Link>
    );
  });

  const newReleaseCardYeezy = yeezy.slice(0,8).map((newrelease) => {
    return (
      <Link
        to={`/single/${newrelease.id}`}
        className="relared-sneakers-card-div"
      >
        {" "}
        <div>
          <div className="related-sneakers-img-div">
            <img src={newrelease.image} />
          </div>
          <div className="related-sneakers-title">
            <p>{newrelease.productName}</p>
          </div>
        </div>
      </Link>
    );
  });

  console.log(result, "result");
  return (
    <div className="App">
      <div className="main-div-hero-section">
        <div className="sub-div-hero-section">
          <img src={Palamino} alt="logo" />
        </div>
        <div className="heading-div">
          <h1>
            AIR JORDAN 1 RETRO <br /> HIGH OG 'PALOMINO'
          </h1>
          <a href="http://localhost:3000/single/12">
            <p>Shop Now</p>
          </a>
        </div>
      </div>
      <div className="related-sneakers-main-div">
        <div className="related-sneakers-div">
          <div className="heading">
            {" "}
            <h2>NEW RELEASES</h2>
          </div>
          <div className="related-sneakers-sub-div">{newReleaseCard}</div>
          <div className="btn-main-page-releated">
            <button>SHOP NEW RELEASES</button>
          </div>
        </div>
      </div>

      <div className="related-sneakers-main-div">
        <div className="related-sneakers-div">
          <div className="heading">
            {" "}
            <h2>YEEZY</h2>
          </div>
          <div className="related-sneakers-sub-div">{newReleaseCardYeezy}</div>
          <div className="btn-main-page-releated">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="related-sneakers-main-div">
        <div className="related-sneakers-div">
          <div className="heading">
            {" "}
            <h2>AIR JORDAN 1S</h2>
          </div>
          <div className="related-sneakers-sub-div">
            {newReleaseCardJordanOne}
          </div>
          <div className="btn-main-page-releated">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
