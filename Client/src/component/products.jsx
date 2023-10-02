import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleProduct from "./singleProduct";
import "./products.css";

import Sidebar from "./sidebar";
export default function Products() {
  const [value, setValue] = useState(null);
  // const [array,setArray]= useState([])
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [priceProducts, setPriceProducts] = useState([]);
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
        setNewProducts(res);
        setPriceProducts(res);
      } catch (err) {
        console.log(err, "err");
      }
    }
    fetchData();
  }, []);
  console.log(products, "Prod");
  return (
    <div className="main">
      <Sidebar
        products={products}
        value={value}
        setValue={setValue}
        setProducts={setProducts}
        setNewProducts={setNewProducts}
        newProducts={newProducts}
        priceProducts={priceProducts}
      />

      <div className="main-products-div">
        {products.map((prod) => {
          return <SingleProduct products={prod} />;
        })}
      </div>
    </div>
  );
}
