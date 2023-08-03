import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleProduct from "./singleProduct";
import "./products.css"
export default function Products() {
  const [products, setProducts] = useState([]);
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
      } catch (err) {
        console.log(err, "err");
      }
    }
    fetchData();
  }, []);
  console.log(products, "Prod");
  return (
    <div className="main">
      <div className="main-products-div">
      {products.map((prod) => {
        return <SingleProduct products={prod} />;
      })}
    </div>
    </div>
  );
}
