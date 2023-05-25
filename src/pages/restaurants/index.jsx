import styles from '../../styles/pages/RestaurantsPage.module.css'
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard"
import { getRestaurants } from "@/lib/api"
import { useEffect, useState } from 'react'

const restaurantsPage = () => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        loadRestaurants()
    }, [])

    async function loadRestaurants() {
        const restaurantsList = await getRestaurants()
        setRestaurants(restaurantsList)
    }

    return (
        <div>
            <p className={styles.restaurantsHeader}>Available Restaurants:</p>
            <div className={styles.restaurantsGrid}>
                {
                    restaurants.map(restaurant => {
                        return (
                            <RestaurantCard key={restaurant._id} restaurant={restaurant} setRestaurants={setRestaurants} />
                        )
                    })
                }
            </div>
        </div>
    )
}

// The previous version of this code used "getServerSideProps" to access Restaurants' Information
// However, when deploying the app, this became a huge source of problems, so I switched to using useEffect.

// export async function getServerSideProps() {
//     try {
//         const restaurants = await getRestaurants()
//         return {
//             props: { restaurants }
//         }
//     }
//     catch (error) {
//         console.log(error)
//         return {
//             props: { restaurants: [] }
//         }
//     }
// }

export default restaurantsPage