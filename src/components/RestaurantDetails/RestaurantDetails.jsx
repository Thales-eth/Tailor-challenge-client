import styles from './RestaurantDetails.module.css'

const RestaurantDetails = ({ restaurant }) => {
    const { neighborhood, address, cuisine_type, name } = restaurant

    return (
        <div className={styles.restaurantDetails}>
            <p className={styles.restaurantName}>{name}</p>
            <p className={styles.neighborhood}>{neighborhood}</p>
            <p>📍 Address: {address}</p>
            <p>🍕 Cuisine: {cuisine_type}</p>
        </div>
    )
}

export default RestaurantDetails