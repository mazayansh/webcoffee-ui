import cartApi from "@/services/cart.js"
import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartItems: [],
    shippingInformation: {
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        address: '',
        city: '',
        city_code: '',
        state: '',
        postcode: '',
        shipping_method: '',
        shipping_cost: 0
    }
  }),
  actions: {
    fetchCartItemList() {
      return cartApi.indexCartItem()
              .then(response => {
                this.cartItems = response.data.data
              })
    },
    fetchShippingInfo() {
      cartApi.getShippingInfo()
        .then(response => {
          if (Object.keys(response.data.data).length !== 0 && response.data.data.constructor === Object) {
            this.shippingInformation = response.data.data
          }
        })
    }
  }
})
