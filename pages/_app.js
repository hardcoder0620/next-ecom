import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      {/* bootsrap css  */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"/>
    
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload">
      {/* bootstrap js  */}
 </Script>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
