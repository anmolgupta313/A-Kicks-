const router = require('express').Router()


const {Cart,Products, Users}= require('../../models')

const bcrypt= require('bcrypt');

const {createTokens,validateToken}= require('../../JWT/jwt')
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
        const hash= await bcrypt.hash(req.body.password,10)
const postUser = await Users.create({
   userName:req.body.userName,
    password:hash
})
// debugger
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

router.post('/login', async(req,res)=>{
    try{

        // const {userName,password}= req.body
        const loginUser= await Users.findOne({where:{userName:req.body.userName},include:[{model:Cart}]})

        if(!loginUser){
            res.status(400).json({err:"Wrong Email"})
        }
            
            const dbPassword= loginUser.password

            bcrypt.compare(req.body.password,dbPassword).then((match)=>{
                if(!match){
                    res.status(400).json({message:"Wrong Password"})
                }else{
                    const accessToken= createTokens(loginUser)

                    res.cookie('access-token',accessToken,{
                        maxAge:60*60*24*30*1000
                    })
                    // console.log(loginUser.dataValues.userName,"dloginatavalues");
                    res.status(200).json( {
                        userName:loginUser.dataValues.userName,
                        cartId:loginUser.cart.id,
                        token:accessToken
                    })}
                 
                   
            })

       
    } catch(err){
        res.status(500).json(err)
    }

})


router.get('/profie',validateToken,(req,res)=>{
    res.json({message:"ammlol"})
})
     

module.exports= router;