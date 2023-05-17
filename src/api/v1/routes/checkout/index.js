import express from 'express'
import checkoutController from '../../controllers/checkController.js'
import { asyncHandler } from '../../helpers/asyncHandler.js'
import { authentication } from '../../auth/authUtils.js'
const router = express.Router()
router.use(authentication)

router.post('/review', asyncHandler(checkoutController.checkoutReview))

export default router