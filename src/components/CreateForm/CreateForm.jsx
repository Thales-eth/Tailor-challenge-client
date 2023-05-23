import FileInput from "../FileInput/FileInput"
import { useContext, useEffect, useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
// import { GoogleMapsContext } from "@/contexts/googlemaps.context";

const CreateForm = ({ handleInputChange, handleSubmit, restaurantData, setRestaurantData }) => {
    const { name, neighborhood, address, cuisine_type, operating_hours } = restaurantData
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [autoCompleteFunction, setAutoCompleteFunction] = useState(null)
    // const { isLoaded } = useContext(GoogleMapsContext)

    async function handleFileUpload(e) {
        const image = e.target.files[0]
        const uploadData = new FormData()
        uploadData.append("imageUrl", image)
        setRestaurantData({ ...restaurantData, image: uploadData })
    }

    function handlePlaceSelect() {
        if (autoCompleteFunction) {
            const place = autoCompleteFunction.getPlace()
            setSelectedPlace(place)
            const { lat, lng } = place.geometry.location
            setRestaurantData({
                ...restaurantData,
                location: { type: "Point", coordinates: [lat(), lng()] },
            })
        }
    }

    useEffect(() => {
        console.log("LA RESTAURANT DATITA ==>", restaurantData)
    }, [restaurantData])

    return (
        <form className="authForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name"></label>
                <input autoFocus name='name' value={name} onChange={handleInputChange} id='name' type="text" placeholder='Name' />
            </div>

            <div>
                <label htmlFor="neighborhood"></label>
                <input name='neighborhood' value={neighborhood} onChange={handleInputChange} id='neighborhood' type="text" placeholder='Neighborhood' />
            </div>

            <div>
                <label htmlFor="address"></label>
                <input name='address' value={address} autoComplete='username' onChange={handleInputChange} id='address' type="text" placeholder='Address' />
            </div>

            <div>
                <label htmlFor="location"></label>
                <Autocomplete
                    onLoad={autocomplete => {
                        autocomplete.setOptions({
                            types: ["geocode"]
                        })
                        setAutoCompleteFunction(autocomplete)
                    }}
                    onPlaceChanged={handlePlaceSelect}
                >
                    <input name='location' autoComplete='off' id='location' type="text" placeholder='Location' />
                </Autocomplete>
            </div>

            <FileInput handleFileUpload={handleFileUpload} msg={"Upload Image"} />

            <div>
                <label htmlFor="cuisine_type"></label>
                <input name='cuisine_type' value={cuisine_type} autoComplete='username' onChange={handleInputChange} id='cuisine_type' type="text" placeholder='Cuisine type' />
            </div>

            {/* PENSAR FORMATO */}
            <div>
                <label htmlFor="operating_hours"></label>
                <input name='operating_hours' value={""} autoComplete='username' onChange={handleInputChange} id='operating_hours' type="text" placeholder='Operating Hours' />
            </div>

            <button className='submitButton' type='submit'>Submit</button>

        </form>
    )
}

export default CreateForm