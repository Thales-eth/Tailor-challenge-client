import InitAxios from "./init.service"

class UserService extends InitAxios {
    constructor() {
        super("users")
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