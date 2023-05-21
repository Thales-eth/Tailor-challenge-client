import InitAxios from "./init.service"

class UserService extends InitAxios {
    constructor() {
        super("users")

        this.api.interceptors.request.use(config => {
            const authToken = localStorage.getItem("authToken")

            if (authToken) {
                config.headers = { Authorization: `Bearer ${authToken}` }
            }

            return config
        })
    }

    getFavoriteRestaurants() {
        return this.api.get("/getFavoriteRestaurants")
    }

    likeRestaurant(restaurant_id) {
        return this.api.put(`/likeRestaurant/${restaurant_id}`)
    }

    dislikeRestaurant(restaurant_id) {
        return this.api.put(`/dislikeRestaurant/${restaurant_id}`)
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserService()
        }
        return this.instance
    }
}

export default UserService.getInstance()