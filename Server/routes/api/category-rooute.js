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

module.exports= router