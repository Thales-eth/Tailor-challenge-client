import IsPrivate from "@/components/IsPrivate/IsPrivate"
import restaurantsService from "@/services/restaurants.service"
import Image from "next/image"
import Link from "next/link"

const restaurantsPage = ({ restaurants }) => {
    return (
        <div>
            <p>Los restaurantes:</p>
            {
                restaurants.map(({ _id, name, image }) => {
                    return (
                        <Link key={_id} href={`/restaurants/single/${_id}`}>
                            <div>
                                <p>{name}</p>
                                <Image src={image} width={200} height={200} alt="restaurantPicture" />
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export async function getStaticProps() {
    try {
        const restaurants = await restaurantsService.getRestaurants().then(({ data }) => data)
        console.log("LOS RESTAURANTS =>", restaurants)
        return {
            props: { restaurants }
        }
    }
    catch (error) {
        console.log(error)
        return {
            props: { restaurants: [] }
        }
    }
}

export default restaurantsPage