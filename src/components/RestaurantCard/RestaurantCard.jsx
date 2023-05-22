import styles from './RestaurantCard.module.css'
import Image from "next/image"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { RestaurantContext } from "@/contexts/restaurant.context"
import { useContext } from "react"
import Link from 'next/link'
import { AuthContext } from '@/contexts/auth.context'

const RestaurantCard = ({ restaurant }) => {
    const { dislikedRestaurants, handleLike, handleDislike } = useContext(RestaurantContext)
    const { user } = useContext(AuthContext)

    return (
        <Link key={restaurant._id} href={`/restaurants/single/${restaurant._id}`}>
            <div className={styles.restaurantCard} style={{ backgroundImage: `url(${restaurant.image})` }}>
                <p className={styles.restaurantName}>{restaurant.name}</p>
                {
                    dislikedRestaurants.has(restaurant._id) || !user?.favoriteRestaurants.includes(restaurant._id)
                        ?
                        <AiOutlineHeart className={styles.likeBtn} color='white' size={30} style={{ cursor: "pointer" }} onClick={(e) => handleLike(e, restaurant._id)} />
                        :
                        user?.favoriteRestaurants.includes(restaurant._id)
                        &&
                        <AiFillHeart className={styles.likeBtn} color='red' size={30} style={{ cursor: "pointer" }} onClick={(e) => handleDislike(e, restaurant._id)} />
                }
            </div>
        </Link>
    )
}

export default RestaurantCard