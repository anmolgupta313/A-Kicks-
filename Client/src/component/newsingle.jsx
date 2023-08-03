import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../component/newsingle.css"
export default function Single() {
  const [singleProducts, setSingleProducts] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const getProducts = await fetch(
          `http://localhost:3001/api/products/${productId}`,
          {
            method: "GET",
            headers: { "Content-type": "application/json" },
          }
        );
        const res = await getProducts.json();
        console.log(res, "ress");

        setSingleProducts(res);
      } catch (err) {
        console.log(err, "err");
      }
    }
    fetchData();
  }, []);

  console.log(productId, "idodd");
  return (
    <div className="single-product-main-div">
      <div className="single-product-img-div">
        <img src={singleProducts.image}></img>
      </div>
      <div className="single-product-details-div">
        <div className="single-product-title-dv">
          <h1>{singleProducts.productName}</h1>
        </div>
        <div className="single-product-size-div">
          <div className="size-p-div"><p>Select Size</p></div>
          <div className="size-option-div"><p>{singleProducts.size}</p></div>
        </div>
        <div className="add-to-cart-div"><button>CAD {singleProducts.price}</button></div>
        <div className="product-description-div">
          <h3>About This Product</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}
