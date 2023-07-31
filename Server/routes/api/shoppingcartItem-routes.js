const router= require('express').Router();


const {Users,Cart,Products,ShoppingCart}= require('../../models');

router.post('/', async(req,res)=>{
    try{
        const postShoppingCartItem= await ShoppingCart.create(req.body)

        res.status(200).json(postShoppingCartItem)

    }catch(err){
        res.status(500).json(err)
    }
})


router.get('/', async(req,res)=>{
    try{
const getShoppingCartItem= await ShoppingCart.findAll({include:[{model:Products},{model:Cart}]})

res.status(200).json(getShoppingCartItem)
    }catch(err){
        res.status(500).json(err)
    }
})


router.get('/cartt/:id',async(req,res)=>{
    try{
const getCart= await ShoppingCart.findAll({where:{cart_id:req.params.id},include:[{model:Products},{model:Cart}]})

res.status(200).json(getCart);
    }catch(err){
        res.status(500).json(err)
    }
})


router.get('/:id', async(req,res)=>{
    try{
const getShoppingCartItemById= await ShoppingCart.findByPk(req.params.id,{include:[{model:Products},{model:Cart}]})

if(!getShoppingCartItemById){
    res.status(404).json({message:"invalid Id"})
}else{
    res.status(200).json(getShoppingCartItemById)
}
    }catch(err){
        res.status(500).json(err)
    }
})


router.put('/:id', async(req,res)=>{
    try{
const updateShoppingCartItem = await ShoppingCart.update(req.body,{
    where:{id:req.params.id}})

    if(!updateShoppingCartItem){
        res.status(404).json({message:"invalid id"})
    }else{
        res.status(200).json(updateShoppingCartItem)
    }
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
const delitem= await ShoppingCart.destroy({where:{id:req.params.id}})

if(!delitem){
    res.status(404).json({message:"Invalid Id"})
}else{
    res.status(200).json(delitem)
}
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports= router;