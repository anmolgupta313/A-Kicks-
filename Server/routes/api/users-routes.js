const router = require('express').Router()


const {Cart, Users}= require('../../models')


router.get('/',async(req,res)=>{
    try{
const getUsers= await Users.findAll({include:[{model:Cart}]})

res.status(200).json(getUsers)
    }catch(err){
        res.status(500).json(err)
    }
})


router.post('/', async(req,res)=>{
    try{
const postUser = await Users.create({
   userName:req.body.userName,
    password:req.body.password
})
debugger
const userCart = await Cart.create({
    users_id:postUser.dataValues.id
})
console.log(postUser.dataValues,"datavalues");
res.status(200).json({
    id: postUser.dataValues.id,
    userName: postUser.dataValues.userName,
    cartId: userCart.dataValues.id
    })
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports= router;