import api from "./api.js"

export default {
	addToCart(form) {
        return api.post("/cart/cart-items", form)
    },
    indexCartItem() {
        return api.get("/cart")
    },
    updateCartItem(cartId, form) {
        return api.put(`/cart/cart-items/${cartId}`, form)
    },
    removeCartItem(cartId) {
        return api.delete(`/cart/cart-items/${cartId}`)
    }
}
