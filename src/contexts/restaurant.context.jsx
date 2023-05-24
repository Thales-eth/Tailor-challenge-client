import usersService from "@/services/users.service"
import { createContext, useContext, useState } from "react"
import { AuthContext } from "./auth.context"

const RestaurantContext = createContext()

const RestaurantWrapper = ({ children }) => {
    const [dislikedRestaurants, setDislikedRestaurants] = useState(new Set())
    const { setUser } = useContext(AuthContext)
    /*
    I decided to use a set to track disliked Restaurants. Because the size of the examples we're playing with is so small,
    it probably would have been better to use an array instead. But as size increases, sets/hash maps become way more efficient since operations are O(1)
    while iterating through the whole array to check if an id is included would take O(n) 
    */
    async function handleDislike(e, id) {
        e.preventDefault()
        try {
            const updatedUser = await usersService.dislikeRestaurant(id).then(({ data }) => data)
            setUser(updatedUser)
            setDislikedRestaurants(previousSet => new Set([...previousSet, id]))
        }
        catch (error) {
            console.log(error)
        }
    }

    async function handleLike(e, id) {
        e.preventDefault()
        try {
            const updatedUser = await usersService.likeRestaurant(id).then(({ data }) => data)
            setUser(updatedUser)
            setDislikedRestaurants(previousSet => {
                const newSet = new Set(previousSet)
                newSet.delete(id)
                return newSet
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <RestaurantContext.Provider value={{ dislikedRestaurants, handleLike, handleDislike }}>
            {children}
        </RestaurantContext.Provider>
    )
}

export { RestaurantWrapper, RestaurantContext }