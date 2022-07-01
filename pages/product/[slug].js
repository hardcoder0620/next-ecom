import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/product-slug.module.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Slug() {
    const router = useRouter();
    const {slug}=router.query
  return (
    <div>
      <Navbar/>
      <div className={`${styles.productLayoutMain}`}>
        <div className="container">

            <div className="row">
              <div className="col-md-4">
                <div className="img-div">
                  <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTh5KBG_omygwVHc502Mfg01sWXkXAsP3Mc-6_gK0aSVv3ZH-37droW28EKgb_53O3UpjjDeR0I4KRSx0K7gruNBSS-r-VWQq6__a9kiU2P0tJc39koaY9fvA&usqp=CAc" className='w-100' alt="" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="productDescMain">
                  <h2 className="name">product name : {slug} </h2>
                  <p className="proDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quas tempora minus ex corporis incidunt sed totam exercitationem blanditiis, culpa a, saepe sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nulla?</p>
                  <div className="color">
                    Color: <div className='red bg-primary p-2 rounded d-inline-block ms-2'></div><div className='red bg-danger p-2 rounded d-inline-block ms-2'></div><div className='red bg-success p-2 rounded d-inline-block ms-2'></div>
                  </div>
                  <div className="size">
                    size: <select className='ms-2 mt-3 px-2' name="rth" id="srth">
                      <option  value="M">M</option>
                      <option value="L">L</option>
                      <option value="S">S</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <hr />
                  <div className="prize fw-bold fs-4 text-success">
                    $643749/-
                  </div>
                  <div className="addToCartBtn">
                    <button className="btn btn-primary btn-sm m-3 ms-0">Add to cart</button>
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
