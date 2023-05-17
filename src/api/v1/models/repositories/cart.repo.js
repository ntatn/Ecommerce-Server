
import cart from '../cart.js'

const findCartById = async (cartId)  => {
    return cart.findOne({_id: cartId, cart_state: 'active'}).lean()
}

export default findCartById