import IsPrivate from "@/components/IsPrivate/IsPrivate"

const createRestaurantPage = () => {

    return (
        <div>CREATE RESTAURANT</div>
    )
}

const authCreateRestaurantPage = () => {
    return (
        <IsPrivate Component={createRestaurantPage} />
    )
}

export default authCreateRestaurantPage