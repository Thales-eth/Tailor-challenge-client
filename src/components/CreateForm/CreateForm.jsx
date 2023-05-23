import FileInput from "../FileInput/FileInput"
import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

const CreateForm = ({ handleInputChange, handleSubmit, restaurantData, setRestaurantData }) => {
    const { name, neighborhood, address, cuisine_type, operating_hours } = restaurantData
    const [_selectedPlace, setSelectedPlace] = useState(null);
    const [autoCompleteFunction, setAutoCompleteFunction] = useState(null)

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

    function handleOperatingHoursChange(day, time) {
        setOperatingHours((prevOperatingHours) => ({
            ...prevOperatingHours,
            [day]: time,
        }));
    }

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

            <button className='submitButton' type='submit'>Submit</button>

        </form>
    )
}

export default CreateForm