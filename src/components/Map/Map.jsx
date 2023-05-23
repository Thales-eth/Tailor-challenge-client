import MapStyles from './MapStyles.json'
import { memo, useCallback, useContext, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useRouter } from 'next/router';
const libraries = ["places"]

const Map = ({ restaurants, centerCoordinates, hasMultipleRestaurants, singleRestaurant }) => {

    const router = useRouter()
    const { _id: restaurantId, name: singleRestaurantName, location: { coordinates: singleRestaurantCoordinates } = {} } = singleRestaurant ?? {}
    const containerStyle = {
        width: '1000px',
        height: '600px',
        borderRadius: "30px",
        margin: "100px auto"
    };

    const center = {
        lat: centerCoordinates[0],
        lng: centerCoordinates[1]
    };

    const [_map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        map.setZoom(10)
        map.setCenter(center);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback() {
        setMap(null)
    }, [])

    return (
        <GoogleMap
            options={{ styles: MapStyles }}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {
                hasMultipleRestaurants
                    ?
                    restaurants.map(({ _id, name, location: { coordinates } }) => {
                        return (
                            <Marker
                                key={_id}
                                title={name}
                                position={{ lat: coordinates[0], lng: coordinates[1] }}
                                onClick={() => router.push(`/restaurants/single/${_id}`)}
                            />
                        )
                    })
                    :
                    <Marker
                        key={restaurantId}
                        title={singleRestaurantName}
                        position={{ lat: singleRestaurantCoordinates[0], lng: singleRestaurantCoordinates[1] }}
                    />
            }
        </GoogleMap>
    )
}

export default memo(Map)
