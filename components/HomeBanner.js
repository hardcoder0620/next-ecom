import React from 'react'
import styles from '../styles/index.module.css'


export default function HomeBanner() {
  return (
    <div className={`${styles.homeBannerComponent}`}>
      <img className={`${styles.homeBanner} w-100 img-fluid `} src="/images/homeBanner.webp" alt="home banne image" />
    </div>
  )
}
