import productApi from "@/services/product.js"
import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
    product: null,
    meta: {}
  }),
  actions: {
    fetchProductList(page,sort="-created_at",filter=null) {
      productApi.index(page,sort,filter)
        .then(response => {
          this.products = response.data.data
          this.meta = response.data.meta
        })
    }
  }
})
