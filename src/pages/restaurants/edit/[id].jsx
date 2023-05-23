import CreateForm from "@/components/CreateForm/CreateForm"
import IsPrivate from "@/components/IsPrivate/IsPrivate"
import { useRouter } from "next/router"

const restaurantEditPage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1>Edit Restaurant</h1>
            <CreateForm />
        </div>
    )
}

const authRestaurantEditPage = () => {
    return (
        <IsPrivate Component={restaurantEditPage} />
    )
}

export default authRestaurantEditPage