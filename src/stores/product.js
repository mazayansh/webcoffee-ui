import productApi from "@/services/product.js"
import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
    meta: {},
    product: {
      product_variants: []
    },
    grindSizeOptions: [
      {
        label: 'Superfine',
        value: 'superfine'
      },
      {
        label: 'Fine',
        value: 'fine'
      },
      {
        label: 'Medium Fine',
        value: 'medium fine'
      },
      {
        label: 'Medium',
        value: 'medium'
      },
      {
        label: 'Coarse',
        value: 'coarse'
      },
      {
        label: 'Extracoarse',
        value: 'extracoarse'
      }
    ]
  }),
  actions: {
    fetchProductList(page,sort="-created_at",filter=null) {
      productApi.index(page,sort,filter)
        .then(response => {
          this.products = response.data.data
          this.meta = response.data.meta
        })
    },
    fetchProductById(id) {
      productApi.getById(id)
        .then(response => {
          this.product = response.data.data
        })
    }
  }
})
