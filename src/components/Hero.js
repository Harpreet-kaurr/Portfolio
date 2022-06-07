import React from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div id="hero">
        <div className={`${styles["hero-wrapper"]}`}>
            {/* <div className={`${styles["hero-overlay"]}`}></div> */}
            <div className={`${styles["hero-container"]}`}>
              <div className={`${styles["hero-row"]}`}>
                <div className={`${styles["hero-col-8"]}`}>
                  <div className={`${styles["hero-col-text"]}`}>
                    <span className={`${styles["hero-col-text-im"]}`}>Hey! I am</span>
                    <h1>Harpreet Kaur</h1>
                    <h2>I'm a &nbsp;
                      <span>Frontend Developer</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={`${styles["hero-mouse-container"]}`}>
              <a href="/" className={`${styles["hero-mouse-icon"]}`}>
                <div className={`${styles["hero-mouse-wheel"]}`}>
                  <span className={`${styles["hero-mouse-arrow-down"]}`}></span>
                </div>
              </a>
            </div> */}
        </div>
    </div>
  )
}

export default Hero