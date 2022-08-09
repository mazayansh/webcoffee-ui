import api from "./api.js"

export default {
	createOrder(form) {
        return api.post("/orders", form)
    },
    getOrderPayment(orderId) {
        return api.post(`/orders/${orderId}/payment`)
    }
}
