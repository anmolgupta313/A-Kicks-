const router= require('express').Router();

const {Products, Cart, Brands}= require('../../models')

router.get('/', async(req,res)=>{

try{
    const getProduct= await Products.findAll({include:[{model:Brands},{model:Cart}]})
    res.status(400).json(getProduct);

}catch(err){
    res.status(500).json(err);
}
});


router.get('/:id',async(req,res)=>{
    try{
const getProductById= await Products.findByPk(req.params.id,{include:[{model:Brands}]})

if(!getProductById){
    res.status(404).json({message:"Invalid Id"})
}res.status(200).json(getProductById);
    }catch(err){
        res.status(500).json(err)
    }
})

router.put("/:id",async(req,res)=>{
    try{
const updateProductById= await Products.update(req.body,{
    where:{id:req.params.id}
})
if(!updateProductById){
    res.status(404).json({message:"Invalid Id"})}
res.status(200).json(updateProductById)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports= router;