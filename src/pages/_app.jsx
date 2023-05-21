import '@/styles/reset.css'
import '@/styles/globals.css'
import { AuthProviderWrapper } from '@/contexts/auth.context'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProviderWrapper>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AuthProviderWrapper>

  )
}

export default MyApp
