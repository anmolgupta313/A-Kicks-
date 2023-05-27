
const [Model, DataTypes]=  require('sequelize')

const sequelize= require('../config/connection')

class Products extends Model{}

Products.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    productName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isDecimal:true
        }
    },
    size:{
        type:DataTypes.ARRAY,
        allowNull:false
    },
    cart_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"cart",
            key:id
        }
    },
    brands_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"brands",
            key:"id"
        }
    }
},
{
    sequelize,
    timestamps:false,
    freezeTableName:true,
    underscored:true,
    modelName:"products"
})


module.exports= Products;