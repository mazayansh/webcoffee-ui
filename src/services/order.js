import api from "./api.js"

export default {
	createOrder(form) {
        return api.post("/orders", form)
    }
}
