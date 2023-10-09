import { useState, useEffect } from "react";
import "./sidebar.css";
import X from"../logo/x.png"
export default function Sidebar({
  products,
  value,
  setValue,
  setProducts,
  newProducts,
  priceProducts,
  windowDimenssion,
  detectSize,
}) {
  const [priceValue, setPriceValue] = useState(null);
  const [filterToggle,setFilterToggel]= useState(false)

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenssion.minWidth]);

  function handlechangeValue(e) {
    // setValue(e.target.value);
    categoryChange(e.target.value);
  }

  function handlePriceValue(e) {
    setPriceValue(e.target.value);
    priceFilter(e.target.value);
  }

  console.log(priceValue, "v");



  function filterToggel(){
    setFilterToggel((prev)=>{
      return !prev
    })

   
  }

  function categoryChange(value) {
    const filterCategory = newProducts.filter((category) => {
      return category.category.categoryName.includes(value);
    });
    // console.log(filterCategory, "catt")

    return setProducts(filterCategory);
  }

  async function priceFilter(priceValue) {
    const priceFilterArray = await priceProducts.filter((value) => {
      if (priceValue >= value.price) {
        return value.price <= priceValue;
      }
    });
    console.log(priceFilterArray, "pricefilterarray");

    if (
      priceValue == 200 ||
      priceValue == 400 ||
      priceValue == 600 ||
      priceValue == 2500
    ) {
      setProducts(priceFilterArray);
    }
  }

  console.log(products, "array");

  return (
    <div className="sidebar-main-div">
      {windowDimenssion.minWidth > 786 ?  (
        <div>
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
      ):( filterToggle==false? (
        <div><button onClick={filterToggel} className="filter-btn">Filter</button></div>):( <div className="sidebar-sub-div">
          <div className="x-div-toggel"><img onClick={filterToggel}src={X} alt="" /></div>
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
        </div>)
      ) }
    </div>
  );
}
