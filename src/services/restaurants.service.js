import InitAxios from "./init.service"

class RestaurantService extends InitAxios {
    constructor() {
        super("restaurants")
    }

    getRestaurants() {
        return this.api.get("/list")
    }

    getSingleRestaurant(id) {
        return this.api.get(`/getOne/${id}`)
    }

    createOneRestaurant(body, id) {
        return this.api.post(`/create/${id}`, body)

    }
    editSingleRestaurant(id, body) {
        return this.api.put(`/edit/${id}`, body)
    }

    deleteRestaurant(id, user_id) {
        return this.api.delete(`/delete/${id}/${user_id}`)
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new RestaurantService()
        }
        return this.instance
    }
}

export default RestaurantService.getInstance()