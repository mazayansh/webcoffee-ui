import api from "./api.js"

export default {
	addToCart(form) {
        return api.post("/cart/cart-items", form)
    }
}
