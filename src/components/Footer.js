import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <div>
        <div className={`${styles["footer-wrapper"]}`}>
            <div className={`${styles["footer-container"]}`}>
                <div className={`${styles["footer-padding"]}`}>
                    <div className={`${styles["footer-row"]}`}>
                        <div className={`${styles["footer-col"]}`}>
                            <div className={`${styles["footer-col-center"]}`}>
                                <img src='portfolio-img.webp'/>
                                <span>
                                    <a href="/">harpreet-kaur.in</a>
                                </span>
                                <p>Frontend Web Developer</p>
                                <p>kaurharp1995@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles["footer-bottom"]}`}>
                    <div className={`${styles["footer-bottom-row"]}`}>
                        <div className={`${styles["footer-bottom-col"]}`}>
                            <div className={`${styles["footer-bottom-copyright"]}`}>
                                <p>
                                    Copyright 2022 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="/">Harpreet Kaur</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer