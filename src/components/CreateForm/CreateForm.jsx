import FileInput from "../FileInput/FileInput"

const CreateForm = ({ handleInputChange, handleSubmit, restaurantData, setRestaurantData }) => {

    const { name, neighborhood, address, location, cuisine_type, operating_hours } = restaurantData

    async function handleFileUpload(e) {
        const image = e.target.files[0]
        const uploadData = new FormData()
        uploadData.append("imageUrl", image)
        setRestaurantData({ ...restaurantData, image: uploadData })
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

            {/* IMPLEMENTAR MAPS AUTOCOMPLETE */}
            <div>
                <label htmlFor="location"></label>
                <input name='location' value={""} autoComplete='username' onChange={handleInputChange} id='location' type="text" placeholder='Location' />
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