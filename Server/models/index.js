const Brands = require("./brands");
const Cart = require("./cart");
const Users = require("./user");
const Products = require("./products");
const ShoppingCart = require("./shoppingcartitems");
const { HasMany } = require("sequelize");

Users.hasOne(Cart, {
  foreignKey: "users_id",
  onDelete: "CASCADE",
});

Cart.belongsTo(Users, {
  foreignKey: "users_id",
});

// Cart.hasMany(Products, {
//   foreignKey: "cart_id",
//   onDelete: "CASCADE",
// });

// Products.belongsTo(Cart, {
//   foreignKey: "cart_id",
// });

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
  ShoppingCart
};
