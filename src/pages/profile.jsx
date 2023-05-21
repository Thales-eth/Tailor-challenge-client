import { useContext } from "react"
import { AuthContext } from "@/contexts/auth.context"
import Image from "next/image"

const profilePage = () => {
    const { user } = useContext(AuthContext)
    // HACE LA LLAMADA DE FAVORITE RESTAURANTS AQUÍ!!!!

    return (
        <div>
            <p>Hey! {user?.username}</p>
            <Image width={200} height={200} src={user?.avatar} alt="profilePic" />
            <p>Favorite Restaurants</p>
            {/* {
                user?.favoriteRestaurants.map(restaurant => {
                    <p>{restaurant?.name}</p>
                })
            } */}
        </div>
    )
}

export default profilePage