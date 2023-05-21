import '../styles/globals.css'
import { AuthProviderWrapper } from '../contexts/auth.context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProviderWrapper>
      <Component {...pageProps} />
    </AuthProviderWrapper>

  )
}

export default MyApp
