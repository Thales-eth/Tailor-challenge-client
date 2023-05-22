import restaurantsService from "@/services/restaurants.service"
import Map from "@/components/Map/Map"
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard"
import OperatingHours from "@/components/OperatingHours/OperatingHours"
import Reviews from "@/components/Reviews/Reviews"
import RestaurantDetails from "@/components/RestaurantDetails/RestaurantDetails"

const restaurantDetailsPage = ({ restaurantDetails }) => {
    const { location: { coordinates }, operating_hours, reviews } = restaurantDetails

    return (
        <div>
            <RestaurantDetails restaurant={restaurantDetails} />
            <hr />
            <RestaurantCard restaurant={restaurantDetails} />
            <OperatingHours operating_hours={operating_hours} />
            <Map centerCoordinates={coordinates} hasMultipleRestaurants={false} singleRestaurant={restaurantDetails} />
            <Reviews reviews={reviews} />

        </div>
    )
}

export async function getStaticPaths() {
    const restaurants = await restaurantsService.getRestaurants().then(({ data }) => data)
    const restaurantsIds = restaurants.map(({ _id }) => _id)
    const paths = restaurantsIds.map(id => {
        return ({
            params: { id }
        })
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params: { id } } = context

    try {
        const restaurantDetails = await restaurantsService.getSingleRestaurant(id).then(({ data }) => data)
        return {
            props: { restaurantDetails }
        }
    }
    catch (error) {
        console.log(error)
        return {
            props: { restaurantDetails: {} }
        }
    }
}

export default restaurantDetailsPage