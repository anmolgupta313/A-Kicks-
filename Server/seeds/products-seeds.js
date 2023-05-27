
const {Products}=  require('../models')

const productsData=[{
    productName:"Air Jordan 1 High UNC",
    image:"",
    price:500,
    size:"4"
},
{
    productName:"Air Jordan 1 High Travis Scott Mocha",
    image:"",
    price:2200,
    size:"4"
},
{
    productName:"Air Jordan 1 High Travis Scott Fragments",
    image:"",
    price:2500,
    size:"4"
}]

const seedProducts= ()=>{
return Products.bulkCreate(productsData)
}

module.exports= seedProducts;