const { Products } = require("../models");

// const prod1= require('../Images/aj1unc.jpg')
// const prod2= require('../Images/mocha.jpg')
// const prod3= require('../Images/travisfrag.jpg')
const productsData = [
  {
    productName: "Air Jordan 1 High UNC",
    image: "../Images/aj1unc.jpg",
    price: 500,
    size: "4",
    brands_id: 1,
    cart_id: 1,
  },
  {
    productName: "Air Jordan 1 High Travis Scott Mocha",
    image: "./Images/mocha.jpg",
    price: 2200,
    size: "4",
    brands_id: 1,
    cart_id: 1,
  },
  {
    productName: "Air Jordan 1 High Travis Scott Fragments",
    image: "../Images/travisfrag.jpg",
    price: 2500,
    size: "4",
    brands_id: 1,
  },
];

const seedProducts = () => {
  return Products.bulkCreate(productsData);
};

module.exports = seedProducts;
