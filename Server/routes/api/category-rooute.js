const router= require('express').Router();

const {Products,Category}= require('../../models');


router.get('/', async(req,res)=>{
    try{
const findCategory= await Category.findAll({include:[{model:Products}]})

res.status(200).json(findCategory)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/parent/:id', async(req,res)=>{
    try{
const parentCategory= await Category.findAll({where:{parentCategory_id:req.params.id},include:[{model:Products}]})

res.status(200).json(parentCategory)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports= router