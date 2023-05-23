import CreateForm from "@/components/CreateForm/CreateForm"
import IsPrivate from "@/components/IsPrivate/IsPrivate"
import Loader from "@/components/Loader/Loader"
import restaurantsService from "@/services/restaurants.service"
import { getCloudinaryLink } from "@/utils/getCloudinaryLink"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const restaurantEditPage = () => {
    const [restaurantData, setRestaurantData] = useState({ name: "", neighborhood: "", address: "", location: { type: "Point", coordinates: [] }, image: "", cuisine_type: "", operating_hours: {}, reviews: [] })
    const [showLoading, setShowLoading] = useState(false)

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        loadRestaurant()
    }, [])

    async function loadRestaurant() {
        const singleRestaurant = await restaurantsService.getSingleRestaurant(id).then(({ data }) => data)
        setRestaurantData(singleRestaurant)
    }

    function handleInputChange(e) {
        const { name, value } = e.target
        setRestaurantData({ ...restaurantData, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setShowLoading(true)

        try {
            const cloudinaryLink = await getCloudinaryLink(restaurantData.image)
            await restaurantsService.editSingleRestaurant(id, { ...restaurantData, image: cloudinaryLink })
            router.push(`/restaurants/single/${id}`)
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
                <h1 className="authHeader">Edit Restaurant</h1>
                <CreateForm restaurantData={restaurantData} setRestaurantData={setRestaurantData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </div>
    )
}

const authRestaurantEditPage = () => {
    return (
        <IsPrivate Component={restaurantEditPage} />
    )
}

export default authRestaurantEditPage