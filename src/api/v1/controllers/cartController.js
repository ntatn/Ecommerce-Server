import CartService from "../services/cart.service.js"
import {SuccessResponse} from "../middlewares/success.response.js"

class CartController {
    addToCart = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create a new Cart',
            metadata: await CartService.addToCart(req.body)
        }).send(res)
    }

    updateCart = async (req, res, next) => {
        new SuccessResponse({
            message: 'Update Cart Successfully',
            metadata: await CartService.addToCartV2(req.body)
        }).send(res)
    }

    deleteCart = async (req, res, next) => {
        new SuccessResponse({
            message: 'Delete Cart Successfully',
            metadata: await CartService.deleteUserCart(req.body)
        }).send(res)
    }

    listCart = async (req, res, next) => {
        new SuccessResponse({
            message: 'List cart',
            metadata: await CartService.listCart(req.query)
        }).send(res)
    }
}

export default new CartController