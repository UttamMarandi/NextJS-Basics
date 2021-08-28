import '../styles/globals.css'
import Layout from "../components/layout/Layout"

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
    
}

export default MyApp

//wrap the header module i.e Layout module around Comoponent to make it render consistently in all pages
//whenever some component needs to be used on all pages use _app js
