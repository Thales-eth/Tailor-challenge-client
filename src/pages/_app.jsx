import '@/styles/reset.css'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { AuthProviderWrapper } from '@/contexts/auth.context'
import { RestaurantWrapper } from '@/contexts/restaurant.context'
import { ErrorWrapper } from '@/contexts/error.context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProviderWrapper>
      <RestaurantWrapper>
        <ErrorWrapper>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ErrorWrapper>
      </RestaurantWrapper>
    </AuthProviderWrapper>

  )
}

export default MyApp
