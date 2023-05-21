import { useRouter } from "next/router"

const restaurantDetailsPage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>VISTA DE DETALLE RESTAURANTE: {id}</div>
    )
}

export default restaurantDetailsPage