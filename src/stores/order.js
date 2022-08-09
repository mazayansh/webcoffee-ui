import orderApi from "@/services/order.js"
import { defineStore } from 'pinia'

export const useOrderStore = defineStore({
  id: 'order',
  state: () => ({
    paymentDetails: {}
  }),
  actions: {
    fetchPaymentDetails() {
      console.log('fetch payment details start')
      orderApi.getOrderPayment()
        .then(response => {
          console.log('fetch payment details success')
          this.paymentDetails = response.data.data
        })
    }
  }
})
