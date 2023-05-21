import { useContext, useEffect, useState } from "react"
import { AuthContext } from "@/contexts/auth.context"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import Image from "next/image"
import IsPrivate from "@/components/IsPrivate/IsPrivate"
import usersService from "@/services/users.service"

const profilePage = () => {
    const { user } = useContext(AuthContext)
    const [favoriteRestaurants, setFavoriteRestaurants] = useState([])
    /*
    I decided to use a set to track disliked Restaurants. Because the size of the examples we're playing with is so small,
    it probably would have been better to use an array instead. But as size increases, sets/hash maps become way more efficient since operations are O(1)
    while iterating through the whole array to check if an id is included would take O(n) 
    */
    const [dislikedRestaurants, setDislikedRestaurants] = useState(new Set())

    useEffect(() => {
        loadFavoriteRestaurants()
    }, [])

    async function loadFavoriteRestaurants() {
        try {
            const favoriteRestaurants = await usersService.getFavoriteRestaurants().then(({ data }) => data)
            console.log("LOS RESTAURANTS ==>", favoriteRestaurants)
            setFavoriteRestaurants(favoriteRestaurants)
        }
        catch (error) {
            console.log(error)
        }
    }

    async function handleDislike(id) {
        try {
            await usersService.dislikeRestaurant(id)
            setDislikedRestaurants(previousSet => new Set([...previousSet, id]))
        }
        catch (error) {
            console.log(error)
        }
    }

    async function handleLike(id) {
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
        <div>
            <p>Hey! {user.username}</p>
            <Image width={200} height={200} src={user.avatar} alt="profilePic" />
            <p>Favorite Restaurants:</p>
            {
                favoriteRestaurants.map(restaurant => {
                    return (
                        <div key={restaurant._id}>
                            <p>{restaurant.name}</p>
                            <Image src={restaurant.image} height={200} width={200} alt="restaurantPic" />
                            {
                                dislikedRestaurants.has(restaurant._id)
                                    ?
                                    <AiOutlineHeart style={{ cursor: "pointer" }} onClick={() => handleLike(restaurant._id)} />
                                    :
                                    <AiFillHeart style={{ cursor: "pointer" }} onClick={() => handleDislike(restaurant._id)} />
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

const authProfilePage = () => {
    return (
        <IsPrivate Component={profilePage} />
    )
}

export default authProfilePage