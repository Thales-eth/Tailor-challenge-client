import CreateForm from "@/components/CreateForm/CreateForm"
import IsPrivate from "@/components/IsPrivate/IsPrivate"
import Loader from "@/components/Loader/Loader"
import { AuthContext } from "@/contexts/auth.context"
import restaurantsService from "@/services/restaurants.service"
import { getCloudinaryLink } from "@/utils/getCloudinaryLink"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

const createRestaurantPage = () => {

    const [restaurantData, setRestaurantData] = useState({ name: "", neighborhood: "", address: "", location: { type: "Point", coordinates: [] }, image: "", cuisine_type: "", operating_hours: {}, reviews: [] })
    const [showLoading, setShowLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        console.log("EL RESTAURANTE A CREAR!! =>", restaurantData)
    }, [restaurantData])

    function handleInputChange(e) {
        const { name, value } = e.target
        setRestaurantData({ ...restaurantData, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setShowLoading(true)

        try {
            const cloudinaryLink = await getCloudinaryLink(restaurantData.image)
            await restaurantsService.createOneRestaurant({ ...restaurantData, image: cloudinaryLink }, user._id)
            router.push("/restaurants")
        }
        catch (error) {
            console.log("LOS ERRORES =>", error)
        }
    }

    return (
        showLoading
            ?
            <Loader />
            :
            <div className="authPage">
                <h1 className="authHeader">Create Restaurant</h1>
                <CreateForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} setRestaurantData={setRestaurantData} restaurantData={restaurantData} />
            </div>
    )
}

const authCreateRestaurantPage = () => {
    return (
        <IsPrivate Component={createRestaurantPage} />
    )
}

export default authCreateRestaurantPage