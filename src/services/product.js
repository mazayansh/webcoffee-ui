import api from "./api.js"

export default {
	index(page,sort,filter,search) {
        let uri = `/products?page=${page}&sort=${sort}`

        if (filter) {
            uri = `${uri}&filter=${filter}`
        }

        if (search) {
            uri = `${uri}&search=${search}`
        }
        return api.get(uri)
    },
    getById(id) {
        return api.get(`/products/${id}`)
    }
}
