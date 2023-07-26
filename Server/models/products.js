const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Products extends Model {}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    quantity:{
      type:DataTypes.INTEGER,
      allowNull:true
    }
    ,
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "cart",
        key: "id",
      },
    },
    brands_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "brands",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "products",
  }
);

module.exports = Products;
