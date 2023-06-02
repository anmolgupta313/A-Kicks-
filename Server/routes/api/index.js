const router = require('express').Router();

const productsRoutes= require('./products-routes')

const cartRoutes= require('./cart-routes')

const userRoutes= require('./users-routes')


router.use('/products',productsRoutes)
router.use('/cart',cartRoutes)
router.use('/user',userRoutes)


module.exports= router;