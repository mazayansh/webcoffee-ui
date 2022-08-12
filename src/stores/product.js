import productApi from "@/services/product.js"
import { defineStore } from 'pinia'
import { useIndexStore } from "@/stores/index.js"

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    searchKeyword: '',
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
    fetchProductList(page,sort="-created_at",filter=null,search=null) {
      const index = useIndexStore()
      return productApi.index(page,sort,filter,search)
              .then(response => {
                index.hideProductsLoading()
                this.products = response.data.data
                this.meta = response.data.meta
                this.searchKeyword = search
              })
              .catch(error => {
                index.hideProductsLoading()
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
