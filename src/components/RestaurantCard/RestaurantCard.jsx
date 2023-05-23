import styles from './RestaurantCard.module.css'
import Link from 'next/link'
import { AiFillHeart, AiOutlineHeart, AiFillDelete, AiFillEdit } from "react-icons/ai"
import { RiDislikeFill } from "react-icons/ri"
import { RestaurantContext } from "@/contexts/restaurant.context"
import { useContext, useState } from "react"
import { AuthContext } from '@/contexts/auth.context'
import restaurantsService from '@/services/restaurants.service'
import { useRouter } from 'next/router'

const RestaurantCard = ({ restaurant }) => {
    const { dislikedRestaurants, handleLike, handleDislike } = useContext(RestaurantContext)
    const { user } = useContext(AuthContext)
    const [showAuthorizationMsg, setshowAuthorizationMsg] = useState(false)
    const router = useRouter()

    function handleUnauthorizedLike(e) {
        e.preventDefault()
        setshowAuthorizationMsg(true)
    }

    async function handleRestaurantDelete(e, id) {
        e.preventDefault()
        await restaurantsService.deleteRestaurant(id, user._id)
        router.push("/restaurants")
    }

    function handleEditNavigation(e) {
        e.preventDefault()
        router.push(`/restaurants/edit/${restaurant._id}`)
    }

    return (
        <Link key={restaurant._id} href={`/restaurants/single/${restaurant._id}`}>
            <div className={styles.restaurantCard} style={{ backgroundImage: `url(${restaurant.image})` }}>
                {
                    user?.createdRestaurants.includes(restaurant._id)
                    &&
                    <>
                        <AiFillDelete onClick={(e) => handleRestaurantDelete(e, restaurant._id)} className={styles.eraseBtn} size={30} color='#a0420b' />
                        <AiFillEdit onClick={handleEditNavigation} className={styles.editBtn} size={30} color='green' />
                    </>
                }
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
                    <p className={styles.loginFirstMsg} onClick={(e) => {
                        e.preventDefault()
                        router.push("/login")
                    }}>
                        Login First!
                    </p>
                }
            </div>
        </Link>
    )
}

export default RestaurantCard