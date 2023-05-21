import InitAxios from "./init.service";

class AuthService extends InitAxios {
    constructor() {
        super('auth')
    }

    getLoggedUser() {
        return this.api.get("/getLoggedUser")
    }

    signup(body) {
        return this.api.post("/signup", body)
    }

    login(body) {
        return this.api.post("/login", body)
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new AuthService()
        }

        return this.instance
    }
}

export default AuthService.getInstance()