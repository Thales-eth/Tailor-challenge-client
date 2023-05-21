import restaurantsService from "@/services/restaurants.service"
import Image from "next/image"

const restaurantDetailsPage = ({ restaurantDetails }) => {
    const { name, neighborhood, address, location, image, cuisine_type, operating_hours, reviews } = restaurantDetails
    console.log("WHO R U =>", restaurantDetails)

    return (
        <div>
            <p>{name}</p>
            <p>{neighborhood}</p>
            <p>{address}</p>
            <p>{cuisine_type}</p>
            <Image height={200} width={200} src={image} alt="singleRestaurantPicture" />
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