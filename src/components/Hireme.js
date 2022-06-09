import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import styles from '../styles/HireMe.module.css'
const Hireme = () => {
  return (
    <div>
        <div className={`${styles["hire-wrapper"]}`}>
            <div className={`${styles["hire-overlay"]}`}></div>
            <div className={`${styles["hire-container"]}`}>
                <div className={`${styles["hire-row"]}`}>
                    <div className={`${styles["hire-col"]}`}>
                        <h2>I'm a <span> Frontent</span> Developer</h2>
                        <p className={`${styles["hire-col-p"]}`}>
                        I craft user interface using modern frontend web technologies.</p>
                        <p className={`${styles["hire-col-p-btn"]}`}><Link smooth to="#contact">Contact me</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hireme