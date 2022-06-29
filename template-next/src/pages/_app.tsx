import '../styles/globals.css'
import MainContainer from '../components/MainContainer'
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainContainer>
         <Component {...pageProps} />
      </MainContainer>
    </>
  )
}

export default MyApp
