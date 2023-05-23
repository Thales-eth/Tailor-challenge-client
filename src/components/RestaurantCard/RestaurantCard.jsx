import styles from './RestaurantCard.module.css'
import Link from 'next/link'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { RiDislikeFill } from "react-icons/ri"
import { RestaurantContext } from "@/contexts/restaurant.context"
import { useContext, useState } from "react"
import { AuthContext } from '@/contexts/auth.context'

const RestaurantCard = ({ restaurant }) => {
    const { dislikedRestaurants, handleLike, handleDislike } = useContext(RestaurantContext)
    const { user } = useContext(AuthContext)
    const [showAuthorizationMsg, setshowAuthorizationMsg] = useState(false)

    function handleUnauthorizedLike(e) {
        e.preventDefault()
        setshowAuthorizationMsg(true)
    }

    return (
        <Link key={restaurant._id} href={`/restaurants/single/${restaurant._id}`}>
            <div className={styles.restaurantCard} style={{ backgroundImage: `url(${restaurant.image})` }}>
                {
                    !showAuthorizationMsg && <p className={styles.restaurantName}>{restaurant.name}</p>
                }
                {
                    !user
                        ?
                        <RiDislikeFill className={styles.likeBtn} color='white' size={30} onClick={handleUnauthorizedLike} />
                        :
                        dislikedRestaurants.has(restaurant._id) || !user?.favoriteRestaurants.includes(restaurant._id)
                            ?
                            <AiOutlineHeart className={styles.likeBtn} color='red' size={30} style={{ cursor: "pointer" }} onClick={(e) => handleLike(e, restaurant._id)} />
                            :
                            user?.favoriteRestaurants.includes(restaurant._id)
                            &&
                            <AiFillHeart className={styles.likeBtn} color='red' size={30} style={{ cursor: "pointer" }} onClick={(e) => handleDislike(e, restaurant._id)} />
                }
                {
                    showAuthorizationMsg
                    &&
                    <Link className={styles.loginFirstMsg} href={"/login"}>Login First!</Link>
                }
            </div>
        </Link>
    )
}

export default RestaurantCard