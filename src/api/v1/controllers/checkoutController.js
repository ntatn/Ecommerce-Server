import checkoutService from "../services/checkout.service.js"
import {SuccessResponse} from "../middlewares/success.response.js"

class CheckoutController {
    checkoutReview= async (req, res, next) => {
        new SuccessResponse({
            message: 'Create a new Cart',
            metadata: await checkoutService.checkoutReview(req.body)
        }).send(res)
    }

    
}

export default new CheckoutController