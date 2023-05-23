import { useEffect, useState } from 'react';

const GoogleMapsLoader = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const loadGoogleMaps = () => {
            const script = document.createElement('script')
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=setLoadedApi`
            script.async = true

            document.body.appendChild(script)
        }

        if (typeof window !== 'undefined') {
            if (window.isGoogleMapsLoaded) {
                setIsLoaded(true)
            } else {
                window.setLoadedApi = () => {
                    window.isGoogleMapsLoaded = true
                    setIsLoaded(true)
                }

                loadGoogleMaps()
            }
        }
    }, [])

    return isLoaded ? children : null
};

export default GoogleMapsLoader
