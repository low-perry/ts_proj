import { APIError } from "./types/APIError"
import { CartItem } from "./types/Cart"
import { Product } from "./types/Product"

export const getError = (error: APIError): string => {
    if (error.response && error.response.data.message) {
        return error.response.data.message
    }
    return error.message
}
export const convertProductToCartItem = (product: Product) : CartItem => {
    const cartItem: CartItem = {
        _id: product._id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        quantity: 1
    }
    return cartItem;
}