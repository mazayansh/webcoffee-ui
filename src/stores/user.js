import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {
      id: '',
      name: '',
      access_token: ''
    }
  })
})
