import axios from "axios"

class InitAxios {
    constructor(path) {
        this.api = axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${path}`
        })

        /*
        I could include intercerptors' configuration here but the problem is I don't want every single one of my calls
        to get the token from local storage. In fact, I want to use Next's "getStaticProps" function, I wouldn't have access
        to local storage since that function is being called from a node.js environment
        */
    }
}

export default InitAxios