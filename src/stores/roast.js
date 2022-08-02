import roastApi from "@/services/roast.js"
import { defineStore } from 'pinia'

export const useRoastStore = defineStore({
  id: 'roast',
  state: () => ({
    roasts: []
  }),
  actions: {
    fetchRoastList() {
      roastApi.index()
        .then(response => {
          this.roasts = response.data.data
        })
    }
  }
})
