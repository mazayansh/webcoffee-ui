import cartApi from "@/services/cart.js"
import { defineStore } from 'pinia'
import { useUserStore } from "@/stores/user.js"

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
      const userStore = useUserStore()
      cartApi.getShippingInfo()
        .then(response => {
          if (Object.keys(response.data.data).length !== 0 && response.data.data.constructor === Object) {
            this.shippingInformation = response.data.data
          } else if (userStore.user) {
            const user = userStore.user.customer
            this.shippingInformation.email = user.email
            this.shippingInformation.first_name = user.first_name
            this.shippingInformation.last_name = user.last_name
            this.shippingInformation.phone = user.phone
            this.shippingInformation.address = user.address
            this.shippingInformation.state = user.state
            this.shippingInformation.postcode = user.postcode
          }
        })
    }
  }
})
