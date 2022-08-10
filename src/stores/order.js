import orderApi from "@/services/order.js"
import { defineStore } from 'pinia'

export const useOrderStore = defineStore({
  id: 'order',
  state: () => ({
    paymentDetails: {}
  }),
  actions: {
    fetchPaymentDetails(orderId) {
      orderApi.getOrderPayment(orderId)
        .then(response => {
          this.paymentDetails = response.data.data
        })
    }
  }
})
