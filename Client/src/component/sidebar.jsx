import { useState,useEffect } from "react";

export default function Sidebar({products, value,setValue, setProducts}) {

  function handlechangeValue(e) {
    setValue(e.target.value);
    }

    function categoryChange(value){
        const filterCategory=
        products.filter((category)=>{

           return  category.category.categoryName.includes(value)
        //     if(category.category.categoryName=== value){
        //   setArray(category)
        //     }
            })
  console.log(filterCategory, "catt")
    }

  

// console.log(array,"array")


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
              onClick={categoryChange(value)}
              value="All"
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
