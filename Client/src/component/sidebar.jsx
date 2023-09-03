import { useState,useEffect } from "react";

export default function Sidebar({products, value,setValue, setProducts,newProducts}) {
useEffect(()=>{
categoryChange(value)
},[value])
  function handlechangeValue(e) {
    setValue(e.target.value);
    }

    function categoryChange(value){
        const filterCategory=
        newProducts.filter((category)=>{

           return   category.category.categoryName.includes(value)
            })
  // console.log(filterCategory, "catt")

 return setProducts(filterCategory)
    }

  

console.log(products,"array")

  console.log(value, "value");
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
            Sneakers
            <input
              name="category"
              type="radio"
              onChange={handlechangeValue}
              value="Sneakers"
            />
          </label>
          <label>
            Jordan High
            <input
              type="radio"
              name="category"
              onChange={handlechangeValue}
              value="Jordan High"
            />
          </label>
          <label>
            Travis Scott
            <input
              type="radio"
              name="category"
              onChange={handlechangeValue}
              value="Travis Scott"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
