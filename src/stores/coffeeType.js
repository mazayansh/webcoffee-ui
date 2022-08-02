import coffeeTypeApi from "@/services/coffeeType.js"
import { defineStore } from 'pinia'

export const useCoffeeTypeStore = defineStore({
  id: 'coffeeType',
  state: () => ({
    coffeeTypes: []
  }),
  actions: {
    fetchCoffeeTypeList() {
      coffeeTypeApi.index()
        .then(response => {
          this.coffeeTypes = response.data.data
        })
    }
  }
})
