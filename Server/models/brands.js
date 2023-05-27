const { Model, DataTypes } = require('sequelize');

const sequelize= require('../config/connection')

 class Brands extends Model{}

 Brands.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    brandName:{
        type:DataTypes.STRING,
        allowNull:false
    }
 },
 {
    sequelize,
    timestamps:false,
    freezeTableName:true,
    underscored:true,
    modelName:"brands"
 })

 module.exports= Brands;