const router = require('express').Router();

const productsRoutes= require('./products-routes')

const cartRoutes= require('./cart-routes')


router.use('/products',productsRoutes)
router.use('/cart',cartRoutes)


module.exports= router;