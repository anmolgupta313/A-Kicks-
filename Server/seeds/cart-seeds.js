const { Cart } = require("../models")

const cartData=[{

    users_id:1
   
    // products_id:1
}]

const seedsCart= ()=>{
    return Cart.bulkCreate(cartData)
};

module.exports= seedsCart;