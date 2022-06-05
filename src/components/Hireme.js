import React from 'react'
import styles from '../styles/HireMe.module.css'
const Hireme = () => {
  return (
    <div>
        <div className={`${styles["hire-wrapper"]}`}>
            <div className={`${styles["hire-overlay"]}`}></div>
            <div className={`${styles["hire-container"]}`}>
                <div className={`${styles["hire-row"]}`}>
                    <div className={`${styles["hire-col"]}`}>
                        <h2>I'm <span>Available</span> for freelancing</h2>
                        <p className={`${styles["hire-col-p"]}`}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <p className={`${styles["hire-col-p-btn"]}`}><a href="/">Hire me</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hireme