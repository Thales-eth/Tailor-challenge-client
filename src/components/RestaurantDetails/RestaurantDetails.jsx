const RestaurantDetails = ({ restaurant }) => {
    const { neighborhood, address, cuisine_type } = restaurant

    return (
        <div>
            <p>{neighborhood}</p>
            <p>{address}</p>
            <p>{cuisine_type}</p>
        </div>
    )
}

export default RestaurantDetails