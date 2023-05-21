import IsPrivate from "@/components/IsPrivate/IsPrivate"

const restaurantsPage = () => {
    return (
        <div>RESTAURANTES</div>
    )
}

const authRestaurantPage = () => {
    return (
        <IsPrivate Component={restaurantsPage} />
    )
}

export default authRestaurantPage