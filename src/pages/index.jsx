import styles from "../styles/pages/HomePage.module.css"
import Map from "@/components/Map/Map"
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard"
import { MAP_CENTER_COORDINATES } from "@/consts"
import { getRestaurants } from "@/lib/api"
import { useEffect, useState } from "react"

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    loadRestaurants()
  }, [])

  async function loadRestaurants() {
    const restaurantsList = await getRestaurants()
    setRestaurants(restaurantsList)
  }

  const featuredRestaurants = restaurants.slice(0, 3)

  return (
    <div className={styles.homePage}>
      <h1>Featured Restaurants:</h1>
      <div className={styles.restaurants}>
        {
          featuredRestaurants.map(restaurant => {
            return (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            )
          })
        }
      </div>
      <h2>Restaurant locations:</h2>
      <p className={styles.markersInfo}>Click each marker to see more details!</p>
      <Map centerCoordinates={MAP_CENTER_COORDINATES}
        restaurants={restaurants}
        hasMultipleRestaurants={true}
      />
    </div>
  )
}

// export async function getServerSideProps() {
//   try {
//     const restaurants = await getRestaurants()
//     return {
//       props: { restaurants }
//     }
//   }
//   catch (error) {
//     console.log(error)
//     return {
//       props: { restaurants: [] }
//     }
//   }
// }

export default HomePage