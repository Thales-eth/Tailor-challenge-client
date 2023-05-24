import CreateForm from "@/components/CreateForm/CreateForm"
import IsPrivate from "@/components/IsPrivate/IsPrivate"
import Errors from "@/components/Errors/Errors"
import Loader from "@/components/Loader/Loader"
import restaurantsService from "@/services/restaurants.service"
import Geocode from "react-geocode"
import { ErrorContext } from "@/contexts/error.context"
import { getCloudinaryLink } from "@/utils/getCloudinaryLink"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"

const restaurantEditPage = () => {
    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
    const [restaurantData, setRestaurantData] = useState({ name: "", neighborhood: "", address: "", location: { type: "Point", coordinates: [] }, image: "", cuisine_type: "", operating_hours: {}, reviews: [] })
    const [showLoading, setShowLoading] = useState(false)
    const [location, setLocation] = useState("")
    const { errors, setErrors } = useContext(ErrorContext)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        loadRestaurant()

        return () => {
            setErrors([])
        }
    }, [])

    useEffect(() => {
        getGeocodedLocation()
    }, [restaurantData])

    function getGeocodedLocation() {
        if (restaurantData.location.coordinates.length === 2) {
            Geocode.fromLatLng(...restaurantData.location.coordinates).then(
                (response) => {
                    const address = response.results[0].formatted_address
                    setLocation(address)
                },
                (error) => {
                    console.error(error)
                }
            )
        }
    }

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
            router.push(`/restaurants`)
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
                <h1 className="authHeader">Edit Restaurant</h1>
                <CreateForm restaurantData={restaurantData} setRestaurantData={setRestaurantData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} location={location} />
                {
                    errors.length !== 0
                    &&
                    <Errors errors={errors} />
                }
            </div>
    )
}

const authRestaurantEditPage = () => {
    return (
        <IsPrivate Component={restaurantEditPage} />
    )
}

export default authRestaurantEditPage