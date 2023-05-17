import product from "../product.js";
import { getSelectData } from '../../utils/index.js'
const findAll = async({limit, page, select}) =>{
    const skip = (page - 1) * limit
    const products = await product.find()
    .skip(skip)
    .limit(limit)
    .select(getSelectData(select))
    .lean()

    return products
}

const checkoutProductByServer = async(products) => {
    return await Promise.all(products.map(async product => {
        const foundProduct = await product.findOne(product.productId)
        if(foundProduct){
            return {
                price: foundProduct.price,
                quantity: product.quantity,
                product: product.productId
            }
        }
    }))
}

export {findAll, checkoutProductByServer}