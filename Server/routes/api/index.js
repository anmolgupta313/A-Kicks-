const router = require('express').Router();

const productsRoutes= require('./products-routes')

const cartRoutes= require('./cart-routes')

const userRoutes= require('./users-routes')

const shoppingcartItemRoutes= require('./shoppingcartItem-routes')


router.use('/products',productsRoutes)
router.use('/cart',cartRoutes)
router.use('/user',userRoutes)
router.use('/shoppingcartitem', shoppingcartItemRoutes)


module.exports= router;