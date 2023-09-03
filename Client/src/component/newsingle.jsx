import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../component/newsingle.css";
export default function Single() {
  const [singleProducts, setSingleProducts] = useState([]);
  const [ProductCategory, setProductCategory] = useState([]);
  const [selectValue, setSelectValue] = useState(0);
  const [categoryId, setCategoryId] = useState();
  // const[IdbuttonValue,setIdButtonValue]= useState("")
  const [buttonValue, setButtonValue] = useState("");
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
        setCategoryId(singleProducts.category_id);
      } catch (err) {
        console.log(err, "err");
      }
    }
    fetchData();

    console.log(ProductCategory,"category")

    fetchDataCategory(categoryId);
  }, [categoryId]);


  async function fetchDataCategory(categoryId) {
    try {
      const getProductsbyCategory = await fetch(
        `http://localhost:3001/api/products/category/${categoryId}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      const res = await getProductsbyCategory.json();
      // console.log(res, "ress");

      setProductCategory(res);
    } catch (err) {
      console.log(err, "err");
    }
  }

  // console.log(result,"result")

  const result = ProductCategory.slice(0, 5);
  console.log(result, "category");

  const relatedSneakersCard = result.map((snk) => {
    return (
      <div className="relared-sneakers-card-div">
        <div className="related-sneakers-img-div">
          <img src={snk.image} />
        </div>
        <div className="related-sneakers-title">
          <p>{snk.productName}</p>
        </div>
      </div>
    );
  });

  const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  shuffle(result);

  function clickSize(e) {
    setButtonValue(e.target.value);
    setSelectValue(1);
  }

  function click(e) {
    const idButtonValue = e.target.value;

    const cartId = localStorage.getItem("cartId");

    const postShoppingCart = fetch(
      `http://localhost:3001/api/shoppingcartitem/`,
      {
        method: "POST",
        body: JSON.stringify({
          cart_id: cartId,
          products_id: idButtonValue,
          size: buttonValue,
          quantity: selectValue,
        }),
        headers: { "Content-type": "application/json" },
      }
    );

    if (postShoppingCart) {
      console.log("perfect");
    } else {
      console.log("not working");
    }
  }

  console.log(productId, "idodd");

  return (
    <div className="single-product-main-div-one">
      <div className="single-product-main-div">
        <div className="single-product-img-div">
          <img src={singleProducts.image}></img>
        </div>
        <div className="single-product-details-div">
          <div className="sub-single-product-div">
            <div className="single-product-title-dv">
              <h1>{singleProducts.productName}</h1>
            </div>
            <div className="single-product-size-div">
              <div className="size-p-div">
                <p>Select Size</p>
              </div>
              <div className="sizeee">
                <div className="row 1">
                  <button className="size-btn" value="3.5" onClick={clickSize}>
                    3.5
                  </button>
                  <button className="size-btn" value="4" onClick={clickSize}>
                    4
                  </button>
                  <button className="size-btn" value="4.5" onClick={clickSize}>
                    4.5
                  </button>
                  <button className="size-btn" value="5" onClick={clickSize}>
                    5
                  </button>
                  <button className="size-btn" value="5.5" onClick={clickSize}>
                    5.5
                  </button>
                </div>
                <div className="row 1">
                  <button className="size-btn" value="6" onClick={clickSize}>
                    6
                  </button>
                  <button className="size-btn" value="6.5" onClick={clickSize}>
                    6.5
                  </button>
                  <button className="size-btn" value="7" onClick={clickSize}>
                    7
                  </button>
                  <button className="size-btn" value="7.5" onClick={clickSize}>
                    7.5
                  </button>
                  <button className="size-btn" value="8" onClick={clickSize}>
                    8
                  </button>
                </div>
                <div className="row 1">
                  <button className="size-btn" value="8.5" onClick={clickSize}>
                    8.5
                  </button>
                  <button className="size-btn" value="9" onClick={clickSize}>
                    9
                  </button>
                  <button className="size-btn" value="9.5" onClick={clickSize}>
                    9.5
                  </button>
                  <button className="size-btn" value="10" onClick={clickSize}>
                    10
                  </button>
                  <button className="size-btn" value="10.5" onClick={clickSize}>
                    10.5
                  </button>
                </div>
                <div className="row 1">
                  <button className="size-btn" value="11" onClick={clickSize}>
                    11
                  </button>
                  <button className="size-btn" value="11.5" onClick={clickSize}>
                    11.5
                  </button>
                  <button className="size-btn" value="12" onClick={clickSize}>
                    12
                  </button>
                  <button className="size-btn" value="12.5" onClick={clickSize}>
                    12.5
                  </button>
                  <button className="size-btn" value="13" onClick={clickSize}>
                    13
                  </button>
                </div>
              </div>
            </div>
            <div className="add-to-cart-div">
              <button onClick={click} value={singleProducts.id}>
                CAD {singleProducts.price}
              </button>
            </div>
            <div className="product-description-div">
              <h3>About This Product</h3>
              <p>{singleProducts.productDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="related-sneakers-main-div">
        <div className="related-sneakers-first-div">
            <h2>Rdelated Sneakers</h2>
            <div className="related-sneakers-sub-div">{relatedSneakersCard}</div></div>
      </div>
    </div>
  );
}
