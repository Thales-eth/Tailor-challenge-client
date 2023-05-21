import IsPrivate from "@/components/IsPrivate/IsPrivate"
import { useRouter } from "next/router"

const restaurantDetailsPage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>VISTA DE DETALLE RESTAURANTE: {id}</div>
    )
}

const authRestaurantDetailsPage = () => {
    return (
        <IsPrivate Component={restaurantDetailsPage} />
    )
}

export default authRestaurantDetailsPage