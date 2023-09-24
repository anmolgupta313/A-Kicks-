const { Category } = require("../models");

const categoryData = [
  {
    categoryName: "Sneakers",
  },
  { categoryName: "Jordan" ,
parentCategory_id:"1"},
  { categoryName: "Travis Scott",
parentCategory_id:"1",
firstSubCategory_id:"2" },
{
  categoryName: "Air Jordan 1",
  parentCategory_id:"2"
},
{
  categoryName: "Air Jordan 3",
  parentCategory_id:"2"
},
{
  categoryName: "Air Jordan 4",
  parentCategory_id:"2"
},
{
  categoryName: "Air Jordan 5",
  parentCategory_id:"2"
},
{
  categoryName: "Yeezy",
  parentCategory_id:"1"
},
{
  categoryName: "Adidas",
  parentCategory_id:"1"
},
{
  categoryName: "New Balance",
  parentCategory_id:"1"
},
{
  categoryName: "Sneakers",
},
];


const seedCategory = () => {
    return Category.bulkCreate(categoryData);
  };
  
  module.exports = seedCategory;
  