import { useRouter } from "next/router"

const restaurantEditPage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>EDICIÓN RESTAURANTE {id}</div>
    )
}

export default restaurantEditPage