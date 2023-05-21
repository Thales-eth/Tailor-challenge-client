import IsPrivate from "@/components/IsPrivate/IsPrivate"
import restaurantsService from "@/services/restaurants.service"

const restaurantsPage = ({ restaurants }) => {
    return (
        <div>
            <p>Los restaurantes:</p>
            {
                restaurants.map(({ _id, name, }) => {
                    return (
                        <p key={restaurant._id}>{restaurant.name}</p>
                    )
                })
            }
        </div>
    )
}

export async function getStaticProps() {
    try {
        const restaurants = await restaurantsService.getRestaurants().then(({ data }) => data)
        console.log("LOS RESTAURANTS =>", restaurants)
        return {
            props: { restaurants }
        }
    }
    catch (error) {
        console.log(error)
        return {
            props: { restaurants: [] }
        }
    }
}

export default restaurantsPage