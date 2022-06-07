import React from 'react'
import styles from '../styles/About.module.css'
import ExampleDoc from '../myCV/Harpreet_Kaur_CV.pdf'

const About = () => {
  return (
    <div id="about">
        <div className={`${styles["about-container"]}`}>
            <div className={`${styles["about-row"]}`}>
                <div className={`${styles["about-col-6-left"]}`}>
                    <div className={`${styles["about-col-image"]}`}>
                    </div>
                </div>
                <div className={`${styles["about-col-6-right"]}`}>
                    <div className={`${styles["about-right-top-content-row"]}`}>
                        <div className={`${styles["about-right-top-content-col-12"]}`}>
                            <h2>About Me</h2>
                            <p>A frontend web developer passionate about creating interactive applications and experiences on the web.</p>
                            <ul>
                                <li><span>Name:</span> <span>Harpreet Kaur</span></li>
                                <li><span>DOB:</span> <span>September 27, 1995</span></li>
                                <li><span>Address:</span> <span>Tarn Tarn Punjab India</span></li>
                                <li><span>Zip code:</span> <span>143408</span></li>
                                <li><span>Email:</span> <span>kaurharp1995@gmail.com</span></li>
                                <li><span>Phone: </span> <span>+1-2234-5678-9-0</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles["about-right-bottom-content"]}`}>
                        <div>
                            <p className={`${styles["about-right-bottom-content-projects"]}`}>
                                <span>120 </span>
                                <span>Project complete</span>
                            </p>
                            <p className={`${styles["about-right-bottom-content-btn-cv"]}`}>
                                <a href={ExampleDoc} download="Harpreet-Kaur-CV" target='_blank'>Download CV</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About