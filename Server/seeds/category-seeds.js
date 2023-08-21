const { Category } = require("../models");

const categoryData = [
  {
    categoryName: "Sneakers",
  },
  { categoryName: "Jordan High" },
  { categoryName: "Travis Scott" },
];


const seedCategory = () => {
    return Category.bulkCreate(categoryData);
  };
  
  module.exports = seedCategory;
  