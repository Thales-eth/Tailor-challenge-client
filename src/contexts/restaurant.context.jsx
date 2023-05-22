import usersService from "@/services/users.service"
import { createContext, useState } from "react"
const RestaurantContext = createContext()

const RestaurantWrapper = ({ children }) => {
    const [dislikedRestaurants, setDislikedRestaurants] = useState(new Set())
    /*
    I decided to use a set to track disliked Restaurants. Because the size of the examples we're playing with is so small,
    it probably would have been better to use an array instead. But as size increases, sets/hash maps become way more efficient since operations are O(1)
    while iterating through the whole array to check if an id is included would take O(n) 
    */
    async function handleDislike(e, id) {
        e.preventDefault()
        try {
            await usersService.dislikeRestaurant(id)
            setDislikedRestaurants(previousSet => new Set([...previousSet, id]))
        }
        catch (error) {
            console.log(error)
        }
    }

    async function handleLike(e, id) {
        e.preventDefault()
        try {
            await usersService.likeRestaurant(id)
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