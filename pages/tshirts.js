import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/tshirts.module.css'


export default function Tshirts() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.tshirtsMain}`}>
        <div className="container">
          <div className={`${styles.shirtContainer} row mt-5`}>
            <div className="col-md-3">
              <Link href={"/product/dynamic tshirt page"}>
              <div class="card shadow">
                <img src="/tshirtImages/tshirt1.jfif" class="card-img-top" alt="tshirt img" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </Link>
            </div>


            <div className="col-md-3">
              <Link href={"/product/dynamic tshirt page"}>
              <div class="card shadow">
                <img src="/tshirtImages/tshirt1.jfif" class="card-img-top" alt="tshirt img" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </Link>
            </div>


            <div className="col-md-3">
              <Link href={"/product/dynamic tshirt page"}>
              <div class="card shadow">
                <img src="/tshirtImages/tshirt1.jfif" class="card-img-top" alt="tshirt img" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </Link>
            </div>

            <div className="col-md-3">
              <Link href={"/product/dynamic tshirt page"}>
                <div class="card shadow">
                  <img src="/tshirtImages/tshirt1.jfif" class="card-img-top" alt="tshirt img" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-3">
              <Link href={"/product/dynamic tshirt page"}>
              <div class="card shadow">
                <img src="/tshirtImages/tshirt1.jfif" class="card-img-top" alt="tshirt img" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </Link>
            </div>

            
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
