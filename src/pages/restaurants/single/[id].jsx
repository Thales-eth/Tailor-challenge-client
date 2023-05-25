import styles from '../../../styles/pages/RestaurantDetails.module.css'
import restaurantsService from "@/services/restaurants.service"
import Map from "@/components/Map/Map"
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard"
import OperatingHours from "@/components/OperatingHours/OperatingHours"
import Reviews from "@/components/Reviews/Reviews"
import RestaurantDetails from "@/components/RestaurantDetails/RestaurantDetails"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const restaurantDetailsPage = () => {

    const [restaurantDetails, setRestaurantDetails] = useState({ location: { coordinates: [] }, operating_hours: { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" }, reviews: [] })
    const { location: { coordinates }, operating_hours, reviews } = restaurantDetails

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        loadSingleRestaurant()
    }, [])

    async function loadSingleRestaurant() {
        const singleRestaurant = await restaurantsService.getSingleRestaurant(id).then(({ data }) => data)
        setRestaurantDetails(singleRestaurant)
    }

    return (
        <div>
            <div className={styles.restaurantInfo}>
                <div className={styles.restaurantTrivia}>
                    <RestaurantDetails restaurant={restaurantDetails} />
                    <OperatingHours operating_hours={operating_hours} />
                </div>
                <RestaurantCard restaurant={restaurantDetails} />
            </div>

            {
                coordinates.length !== 0
                &&
                <Map centerCoordinates={coordinates} hasMultipleRestaurants={false} singleRestaurant={restaurantDetails} />
            }
            {
                reviews.length !== 0 ?
                    <Reviews reviews={reviews} />
                    :
                    <>
                        <h2 className={styles.reviewsHeader}>Reviews</h2>
                        <p className={styles.noReviews}>So sorry, this restaurant has no reviews...</p>
                    </>
            }

        </div>
    )
}

// export async function getServerSideProps(context) {
//     const { params: { id } } = context

//     try {
//         const restaurantDetails = await restaurantsService.getSingleRestaurant(id).then(({ data }) => data)
//         return {
//             props: { restaurantDetails }
//         }
//     }
//     catch (error) {
//         console.log(error)
//         return {
//             props: { restaurantDetails: {} }
//         }
//     }
// }

export default restaurantDetailsPage