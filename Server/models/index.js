const Brands = require("./brands");
const Cart = require("./cart");
const Users = require("./user");
const Products = require("./products");
const ShoppingCart = require("./shoppingcartitems");
const shippingAddress= require('./address')
// const { HasMany } = require("sequelize");
const Category = require("./category");

Users.hasOne(Cart, {
  foreignKey: "users_id",
  onDelete: "CASCADE",
});

Cart.belongsTo(Users, {
  foreignKey: "users_id",
});

Category.hasMany(Products, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Products.belongsTo(Category, {
  foreignKey: "category_id",
});

Users.hasMany(shippingAddress,{
  foreignKey:"users_id",
  onDelete:"CASCADE"
})

shippingAddress.belongsTo(Users,{
  foreignKey:"users_id"
})

Products.hasMany(ShoppingCart, {
  foreignKey: "products_id",
  onDelete: "CASCADE",
});

ShoppingCart.belongsTo(Products, {
  foreignKey: "products_id",
});

Cart.hasMany(ShoppingCart, {
  foreignKey: "cart_id",
  onDelete: "CASCADE",
});

ShoppingCart.belongsTo(Cart, {
  foreignKey: "cart_id",
});

Brands.hasMany(Products, {
  foreignKey: "brands_id",
  onDelete: "CASCADE",
});

Products.belongsTo(Brands, {
  foreignKey: "brands_id",
});

module.exports = {
  Brands,
  Products,
  Cart,
  Users,
  ShoppingCart,
  shippingAddress,
  Category
};
