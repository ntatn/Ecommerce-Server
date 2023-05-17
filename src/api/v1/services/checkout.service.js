import findCartById from "../models/repositories/cart.repo.js"
import { BadRequestError } from '../middlewares/error.response.js'
import { checkoutProductByServer } from "../models/repositories/product.repo.js"

class CheckoutService {

    static async checkoutReview({cartId, userId, shop_order_ids}){
        const foundCart = await findCartById(cartId)
        if(!foundCart) throw new BadRequestError('Cart do not exist')

        const checkoutOrder = {
            totalPrice: 0,
            feeShip: 0,
            totalDiscount: 0,
            totalCheckout: 0
        }, shop_order_ids_new = []

        for(let i = 0; i < shop_order_ids.length; i++) {
            const {userId, shop_discount = [], item_products = []} = shop_order_ids[i]

            const checkoutProductServer = await checkoutProductByServer(item_products)
            if(!checkoutProductServer) throw new BadRequestError()

            const checkoutPrice = checkoutProductServer.reduce((acc, product) => {
                return acc + (product.quantity * product.price)
            }, 0)

            checkoutOrder.totalCheckout =+ checkoutPrice
        }

        return {
            shop_order_ids,
            shop_order_ids_new,
            checkoutOrder
        }
    }
}

export default CheckoutService