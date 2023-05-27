const {Brands} = require('../models')

const brandsData=[{
    brandName: "Jordan"
},
{
    brandName:"Puma"
},
{
    brandName:"Adidas"
},
{
    brandName:"New Balanace"
},{
    brandName:"Reebook"
},
{
    brandName:"Yeezy"
},
{
    brandName:"Nike"
},]

const seedBrands= ()=>{
    return Brands.bulkCreate(brandsData)
}

module.exports= seedBrands