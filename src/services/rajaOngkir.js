let baseUrl = `${import.meta.env.VITE_PROXY_SERVER}/${import.meta.env.VITE_RAJAONGKIR_API_URL}`
const headers = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    key: import.meta.env.VITE_RAJAONGKIR_API_KEY
                }

export default {
	getCityList() {
        return fetch(`${baseUrl}/city`, {
                method: 'get',
                headers: headers
            }).then((response) => {
                return response.json()
                    .then(data => {
                        return data.rajaongkir.results
                    })
            })
    }
}
