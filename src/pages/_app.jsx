import '@/styles/reset.css'
import '@/styles/globals.css'
import { AuthProviderWrapper } from '@/contexts/auth.context'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { RestaurantWrapper } from '@/contexts/restaurant.context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProviderWrapper>
      <RestaurantWrapper>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </RestaurantWrapper>
    </AuthProviderWrapper>

  )
}

export default MyApp
