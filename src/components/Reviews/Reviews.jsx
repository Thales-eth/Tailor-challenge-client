import styles from './Reviews.module.css'
import Image from "next/image"
import { ANONYMOUS_USER_AVATAR } from "@/consts"
import { getRating } from "@/utils/getRating"

const Reviews = ({ reviews }) => {
    return (
        <>
            <p className={styles.reviewsHeader}>Reviews</p>
            <div className={styles.reviews}>
                {
                    reviews.map(({ _id, name, date, comments, rating }) => {
                        return (
                            <div className={styles.reviewCard} key={_id}>
                                <Image className={styles.anonymousAvatar} src={ANONYMOUS_USER_AVATAR} width={50} height={50} alt="anonymousUser" />
                                <p className={styles.username}>{name}</p>
                                <p>{new Date(date).toDateString()}</p>
                                <p>{comments}</p>
                                <p>{getRating(rating)}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Reviews