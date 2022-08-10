import api from "./api.js"

export default {
	createOrder(form) {
        return api.post("/orders", form)
    },
    getUserOrderHistory() {
        return api.get("/orders")
    },
    getOrderDetail(orderId) {
        return api.get(`/orders/${orderId}`)
    },
    getOrderPayment(orderId) {
        return api.get(`/orders/${orderId}/payment`)
    }
}
