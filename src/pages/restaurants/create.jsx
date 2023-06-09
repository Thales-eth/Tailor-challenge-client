import CreateForm from "@/components/CreateForm/CreateForm"
import IsPrivate from "@/components/IsPrivate/IsPrivate"
import Loader from "@/components/Loader/Loader"
import restaurantsService from "@/services/restaurants.service"
import Errors from "@/components/Errors/Errors"
import { AuthContext } from "@/contexts/auth.context"
import { getCloudinaryLink } from "@/utils/getCloudinaryLink"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { ErrorContext } from "@/contexts/error.context"
import authService from "@/services/auth.service"

const createRestaurantPage = () => {
    const [restaurantData, setRestaurantData] = useState({
        name: "", neighborhood: "", address: "", location: { type: "Point", coordinates: [] }, image: "", cuisine_type: "", reviews: []
    })
    const [showLoading, setShowLoading] = useState(false)
    const { user, authenticateUser } = useContext(AuthContext)
    const { errors, setErrors } = useContext(ErrorContext)
    const router = useRouter()

    useEffect(() => {
        return () => {
            setErrors([])
        }
    }, [])

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
            await authenticateUser()
            router.push("/restaurants")
        }
        catch (error) {
            setShowLoading(false)
            const { err } = error.response.data
            setErrors(err)
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
                {
                    errors.length !== 0
                    &&
                    <Errors errors={errors} />
                }
            </div>
    )
}

const authCreateRestaurantPage = () => {
    return (
        <IsPrivate Component={createRestaurantPage} />
    )
}

export default authCreateRestaurantPage