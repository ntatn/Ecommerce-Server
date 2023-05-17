import express from 'express'
import access from './access/index.js'
import product from './product/index.js'
import checkout from './checkout/index.js'
import cart from './cart/index.js'
const router = express.Router()



router.use('/api/v1', access)
router.use('/api/v1/product', product)
router.use('/api/v1/checkout', checkout)
router.use('/api/v1/cart', cart)
export default router