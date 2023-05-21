import axios from "axios"

class InitAxios {
    constructor(path) {
        this.api = axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${path}`
        })

        this.api.interceptors.request.use(config => {
            const authToken = localStorage.getItem("authToken")

            if (authToken) {
                config.headers = { Authorization: `Bearer ${authToken}` }
            }

            return config
        })
    }
}

export default InitAxios