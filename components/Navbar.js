import React from 'react'
import styles from '../styles/index.module.css'
import Link from 'next/link'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {AiOutlineCloseSquare} from 'react-icons/ai'

export default function Navbar() {
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
                            <HiOutlineShoppingCart className={`${styles.shopIcon}`}/>
                       </div>
                    </div>
                </div>
            </nav>
            <div className={`${styles.cartMain}`}>
                    <div id={`${styles.closeDivId}`} className='text-end fs-3'><AiOutlineCloseSquare className='m-3'/></div>
                    <h2>Cart section</h2>
                    <ol>
                        <li>first item(3)</li>
                        <li>second item(5)</li>
                    </ol>
            </div>

        </div>
    )
}
