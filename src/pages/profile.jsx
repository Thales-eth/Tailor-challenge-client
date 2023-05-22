import styles from '../styles/pages/ProfilePage.module.css'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "@/contexts/auth.context"
import Image from "next/image"
import IsPrivate from "@/components/IsPrivate/IsPrivate"
import usersService from "@/services/users.service"
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard"

const profilePage = () => {
    const { user } = useContext(AuthContext)
    const [favoriteRestaurants, setFavoriteRestaurants] = useState([])


    useEffect(() => {
        loadFavoriteRestaurants()
    }, [])

    async function loadFavoriteRestaurants() {
        try {
            const favoriteRestaurants = await usersService.getFavoriteRestaurants().then(({ data }) => data)
            setFavoriteRestaurants(favoriteRestaurants)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className={styles.welcome}>
                <p>Hey, {user.username}!</p>
                <Image className={styles.avatar} width={300} height={300} src={user.avatar} alt="profilePic" />
            </div>

            <section className={styles.favoriteRestaurants}>
                <p className={styles.sectionHeader}>Your favorite Restaurants:</p>
                <div className={styles.restaurants}>
                    {
                        favoriteRestaurants.map(restaurant => {
                            return (
                                <RestaurantCard key={restaurant._id} restaurant={restaurant} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

const authProfilePage = () => {
    return (
        <IsPrivate Component={profilePage} />
    )
}

export default authProfilePage