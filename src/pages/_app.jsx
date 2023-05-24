import '@/styles/reset.css'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import GoogleMapsLoader from '@/components/GoogleMapsLoader/GoogleMapsLoader'
import { AuthProviderWrapper } from '@/contexts/auth.context'
import { RestaurantWrapper } from '@/contexts/restaurant.context'
import { ErrorWrapper } from '@/contexts/error.context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProviderWrapper>
      <RestaurantWrapper>
        <ErrorWrapper>
          <GoogleMapsLoader>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </GoogleMapsLoader>
        </ErrorWrapper>
      </RestaurantWrapper>
    </AuthProviderWrapper>
  )
}

export default MyApp
