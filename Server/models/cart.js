const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    //    products_id:{
    //         type:DataTypes.INTEGER,
    //         allowNull:true,
    //         references:{
    //             model:"products",
    //             key:"id"
    //         }
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "cart",
  }
);

module.exports = Cart;
