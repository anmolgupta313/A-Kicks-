const router = require('express').Router();

const productsRoutes= require('./products-routes')

const cartRoutes= require('./cart-routes')

const userRoutes= require('./users-routes')

const shoppingcartItemRoutes= require('./shoppingcartItem-routes')

const shippingAddress= require('./shippingAddress-routes')

const category= require('./category-rooute')


router.use('/products',productsRoutes)
router.use('/cart',cartRoutes)
router.use('/user',userRoutes)
router.use('/shoppingcartitem', shoppingcartItemRoutes)
router.use('/shippingAddress',shippingAddress)
router.use('/category', category)


module.exports= router;