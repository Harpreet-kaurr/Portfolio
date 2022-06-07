import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import styles from '../styles/Navbar.module.css'

 const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
            <div className={`${styles["navbar-container"]}`}>
                {/* <div className={`${styles["logo"]}`}>MUO</div>  */}
                <a className={`${styles["navbar-logo"]}`} href='/'><span>H</span>arpreet</a>  
                <ul className={`${styles["navbar-links"]}`}>
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" className={`${styles["hamburger"]}`}>&#9776;</label>
                    <div className={`${styles["menu"]}`}>
                        <li><Link smooth to="#hero">Home</Link></li>
                        <li><Link smooth to="#about">About</Link></li>
                        <li><Link smooth to="#skills">Skills</Link></li>
                        <li><Link smooth to="#resume">Resume</Link></li>
                        <li><Link smooth to="#projects">Projects</Link></li>
                        <li><Link smooth to="#contact">Contact</Link></li>
                    </div>
                </ul>  
            </div> 
        </nav>
    </div>
  )
}

export default Navbar;