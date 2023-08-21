const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Category extends Model {}

Category.init(    
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        categoryName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // // cart_id: {
        // //   type: DataTypes.INTEGER,
        // //   allowNull: true,
        // //   references: {
        // //     model: "cart",
        // //     key: "id",
        // //   },
        // },
        // brands_id: {
        //   type: DataTypes.INTEGER,
        //   allowNull: true,
        //   references: {
        //     model: "brands",
        //     key: "id",
        //   },
        // },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "category",
      }
    );
    
    module.exports = Category;  