// import React, { createContext } from "react";
// import { useJsApiLoader } from "@react-google-maps/api";
// const GoogleMapsContext = createContext();

// const libraries = ["places"]

// const GoogleMapsProviderWrapper = ({ children }) => {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//         libraries,
//     })

//     console.log("que pachaaa", isLoaded)

//     return (
//         <GoogleMapsContext.Provider value={{ isLoaded }}>
//             {children}
//         </GoogleMapsContext.Provider>
//     );
// };

// export { GoogleMapsProviderWrapper, GoogleMapsContext }