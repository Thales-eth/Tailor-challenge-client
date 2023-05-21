import IsPrivate from "@/components/IsPrivate/IsPrivate"
import { useRouter } from "next/router"

const restaurantEditPage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>EDICIÓN RESTAURANTE {id}</div>
    )
}

const authRestaurantEditPage = () => {
    return (
        <IsPrivate Component={restaurantEditPage} />
    )
}

export default authRestaurantEditPage