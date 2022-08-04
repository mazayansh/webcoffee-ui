import cartApi from "@/services/cart.js"
import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartItems: []
  }),
  actions: {
    fetchCartItemList() {
      cartApi.indexCartItem()
        .then(response => {
          this.cartItems = response.data.data
        })
    }
  }
})
