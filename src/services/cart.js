import api from "./api.js"

export default {
	addToCart(form) {
        return api.post("/cart/cart-items", form)
    },
    indexCartItem() {
        return api.get("/cart")
    },
    updateCartItem(cartItemId, form) {
        return api.put(`/cart/cart-items/${cartItemId}`, form)
    },
    removeCartItem(cartItemId) {
        return api.delete(`/cart/cart-items/${cartItemId}`)
    },
    saveShippingAddress(form) {
        return api.post("/cart/checkout", form)
    },
    getShippingInfo() {
        return api.get("cart/shipping-info")
    },
    getShippingMethod() {
        return api.get("cart/shipping-method")
    },
    submitSelectedShippingMethod(form) {
        return api.post("cart/shipping", form)
    }
}
