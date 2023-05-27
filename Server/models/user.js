const { Model, DataTypes } = require('sequelize');

const sequelize= require('../config/connection.js');

class Users extends Model{}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        userName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[6]
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[8]
            }
        }
    },
   { sequelize,
    timestamps:false,
    freezeTableName:true,
    modelName: "users"}
)

module.exports= Users