import React,{useState} from 'react'
import styles from '../styles/index.module.css'
import Link from 'next/link'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {AiOutlineCloseSquare,AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

export default function Navbar() {
    const [cartToggler,setCartToggler]=useState(false);
    function showCartToggler(){
        setCartToggler(!cartToggler);
    }
    return (
        <div className={styles.navbarComponent}>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">
                    <div className="navbar-brand" > <Link href={"/"}>CodesWear</Link> </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div className={`${styles.navLink} nav-link`} aria-current="page"> <Link  href={"/tshirts"}>Tshirts</Link> </div>
                            </li>
                            <li className="nav-item">
                            <div className={`${styles.navLink} nav-link`} aria-current="page"> <Link  href={"/hoodies"}>Hoodies</Link> </div>
                            </li>
                          
                            <li className="nav-item">
                            <div className={`${styles.navLink} nav-link`} aria-current="page"> <Link  href={"/mugs"}>Mugs</Link> </div>
                            </li>
                        </ul>
                       <div className="cartDiv">
                           
                             <HiOutlineShoppingCart onClick={showCartToggler} className={`${styles.shopIcon}`}/>
                            
                       </div>
                    </div>
                </div>
            </nav>
            <div className={`${styles.cartMain} ${ cartToggler?  styles.showCart: ""}`}>
                    <div id={`${styles.closeDivId}`} className='text-end fs-3'><AiOutlineCloseSquare onClick={showCartToggler} className='m-3'/></div>
                    <h2>Cart section</h2>
                    <ol style={{userSelect: "none"}}>
                        <li className='fs-5'>first item  <span className='mx-2 fw-bold float-end '> <AiOutlineMinus style={{cursor:"pointer"}} /> <span className="mx-2"><span>4</span> </span> <AiOutlinePlus  style={{cursor:"pointer"}}/> </span></li>
                        <li className='fs-5'>second item  <span className='mx-2 fw-bold float-end '> <AiOutlineMinus  style={{cursor:"pointer"}}/> <span className="mx-2"> <span>2</span></span> <AiOutlinePlus  style={{cursor:"pointer"}}/> </span></li>
                    </ol>
                    <div className="d-flex  justify-content-center mt-4 ">

                    <button className="btn btn-primary ms-2">checkout</button>
                    <button className="btn btn-dark ms-2">clear checkout</button>
                    </div>
            </div>

        </div>
    )
}
