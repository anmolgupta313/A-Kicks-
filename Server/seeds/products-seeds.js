const { Products } = require("../models");

// const prod1= require('../Images/aj1unc.jpg')
// const prod2= require('../Images/mocha.jpg')
// const prod3= require('../Images/travisfrag.jpg')
const productsData = [
  {
    productName: "Air Jordan 1 High UNC",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/358111/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id:1
    
  },
  {
    productName: "Air Jordan 1 High Travis Scott Mocha",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/806920/1.jpg",
    price: 2200,
    size: "11",
    brands_id: 1,
    category_id:3
   
  },
  {
    productName: "Air Jordan 1 High Travis Scott Fragments",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/272696/1.jpg",
    price: 2500,
    size: "9",
    brands_id: 1,
    category_id:3
  },
];

const seedProducts = () => {
  return Products.bulkCreate(productsData);
};

module.exports = seedProducts;
