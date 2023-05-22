import { AiFillStar } from 'react-icons/ai'

export function getRating(rating) {
    rating = Math.round(rating)

    const stars = Array.from({ length: rating }, (_e, index) => {
        return <AiFillStar size={24} color='#e4e418' key={index} />
    })

    return stars
}