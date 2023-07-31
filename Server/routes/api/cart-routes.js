const router= require('express').Router();

const {Users,Cart,Products,ShoppingCart}= require('../../models');

router.get('/',async(req,res)=>{
    try{
const getCart= await Cart.findAll({include:[{model:Products},{model:Users}]})

res.status(200).json(getCart);
    }catch(err){
        res.status(500).json(err)
    }
})


router.get('/:id', async(req,res)=>{
    try{
const getCartById= await Cart.findByPk(req.params.id,{include:[{model:ShoppingCart}]})

if(!getCartById){
    res.status(404).json({message:"Invalid Id"})
}else{
    res.status(200).json(getCartById)
}
    }catch(err){
        res.status(500).json(err)
    }
})





router.put('/:id',async(req,res)=>{
    try{
const getCartById= Cart.findByPk(req.body,{include:[{model:Users}]})

if(!getCartById){
    res.status(404).json({message:"Invalid Id"})
} res.status(200).json(getCartById)
    }catch(err){
        res.status(500).json(err)
    }
})

// router.put('/:id',async(req,res)=>{
//     try{
// const getCartById= Cart.update(req.body,{where:{
//     id:req.params.id
// }})
//  res.status(200).json(getCartById)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })s

router.put('/:id', async (req, res) => {try{

    const putCategory= await Cart.update(req.body,{
      where:{id: req.params.id}});
  
    res.status(200).json(putCategory);}
    catch (err){
      res.status(500).json(err)
    }
    // update a category by its `id` value
  });

// router.delete(':/id',async(req,res)=>{
//     try{
// const DelCartProductsById= await 
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

module.exports= router;