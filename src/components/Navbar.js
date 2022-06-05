import React from 'react'
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Resume</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Contact</a></li>
                    </div>
                </ul>  
            </div> 
        </nav>
    </div>
  )
}

export default Navbar;