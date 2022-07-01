import Head from 'next/head'
import Footer from '../components/Footer'
import HomeBanner from '../components/HomeBanner'
import Navbar from '../components/Navbar'
import styles from '../styles/index.module.css'





export default function Home() {
  return (
    <>
    <Navbar/>
    
    
    {/* <img className='img-fluid w-100' src="/images/homeBanner.webp" alt="" /> */}
    <HomeBanner/>
    <Footer />
    </>
  )
}
