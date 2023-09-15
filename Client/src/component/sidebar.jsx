import { useState,useEffect } from "react";
import "./sidebar.css";
export default function Sidebar({products, value,setValue, setProducts,newProducts, priceProducts}) {

  const[priceValue,setPriceValue]= useState(null)
useEffect(()=>{
categoryChange(value)
// priceFilter(priceValue)

},[value])
  function handlechangeValue(e) {
    setValue(e.target.value);
    }

    function handlePriceValue(e){
setPriceValue(e.target.value)
    }

    console.log(priceValue,"v")
    function categoryChange(value){
        const filterCategory=
        newProducts.filter((category)=>{

           return   category.category.categoryName.includes(value) 
            })
  // console.log(filterCategory, "catt")

 return setProducts(filterCategory)
    }


//     function priceFilter(priceValue){
//       const priceFilterArray= priceProducts.filter((value)=>{
//         if(priceValue >= value.price ){
// return value.price<=priceValue 
//         }
//       })
// console.log(priceFilterArray,"pricefilterarray")
//      setProducts(priceFilterArray)
//     }


  

// console.log(products,"array")

  return (
    <div className="sidebar-main-div">
      <div className="category-main-div">
        <div className="category-heading">
          <p>Category</p>
        </div>
        <div className="category-radio-div">
          <label>
            All
            <input
              name="category"
              type="radio"
              onChange={handlechangeValue}
            
              value="Sneakers"
            />
          </label>
         
          <label>
            Air Jordan 
            <input
              type="radio"
              name="category"
              onChange={handlechangeValue}
              value="Jordan"
            />
          </label>
          <label>
            Yeezy
            <input
              type="radio"
              name="category"
              onChange={handlechangeValue}
              value="Yeezy"
            />
          </label>
          <label>
            Adidas
            <input
              name="category"
              type="radio"
              onChange={handlechangeValue}
              value="Adidas"
            />
          </label>
          <label>
            New Balance
            <input
              name="category"
              type="radio"
              onChange={handlechangeValue}
              value="New Balance"
            />
          </label>
        </div>
      </div>

      <div className="category-main-div">
        <div className="category-heading">
          <p>Price</p>
        </div>
        <div className="category-radio-div">
          <label>
            $0 - $200
            <input
              name="category"
              type="radio"
              onChange={handlePriceValue}
            
              value="200"
            />
          </label>
          <label>
          $200 - $400
            <input
              name="category"
              type="radio"
              onChange={handlePriceValue}
              value="400"
            />
          </label>
          <label>
          $400 - $600
            <input
              type="radio"
              name="category"
              onChange={handlePriceValue}
              value="600"
            />
          </label>
          <label>
          $600 - $2000
            <input
              type="radio"
              name="category"
              onChange={handlePriceValue}
              value="2500"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
