import api from "./api.js"

export default {
	index(page,sort,filter) {
        let uri = `/products?page=${page}&sort=${sort}`

        if (filter) {
            uri = `${uri}&filter=${filter}`
        }
        return api.get(uri)
    },
    getById(id) {
        return api.get(`/products/${id}`)
    }
}
