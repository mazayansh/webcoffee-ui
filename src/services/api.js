import axios from "axios"
import { useUserStore } from "@/stores/user.js"

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

apiClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${useUserStore().user.access_token}`
    return config
})

export default apiClient