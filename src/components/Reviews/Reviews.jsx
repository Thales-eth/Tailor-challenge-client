import { getRating } from "@/utils/getRating"

const Reviews = ({ reviews }) => {
    return (
        <div>
            {
                reviews.map(({ _id, name, date, comments, rating }) => {
                    return (
                        <div key={_id}>
                            <p>{name}</p>
                            <p>{new Date(date).toDateString()}</p>
                            <p>{comments}</p>
                            <p>{getRating(rating)}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Reviews