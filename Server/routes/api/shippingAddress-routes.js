const router= require('express').Router();

const {Products, Cart, Brands,shippingAddress}= require('../../models')


router.post('/', async(req,res)=>{
    try{
const postAddress= await shippingAddress.create(req.body
//     {
//     email:req.body.email,
//     firstName:req.body.firstName,
//     lastName:req.body.lastName,
//     country:req.body.country,
//     state:req.body.state,
//     city:req.body.city,
//     postal:req.body.postal,
//     shippingAddress:req.body.shippingAddress,
//     users_id:req.body.users_id

// }
)


res.status(200).json(postAddress)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports=router