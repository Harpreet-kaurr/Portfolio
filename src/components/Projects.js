import React from 'react'
import styles from '../styles/Projects.module.css'

const Projects = () => {
  return (
    <div id="projects">
        <div className={`${styles["projects-wrapper"]}`}>
            <div className={`${styles["projects-container"]}`}>
                <div className={`${styles["projects-header-row"]}`}>
                    <div className={`${styles["projects-header-col-12"]}`}>
                        <h2>Projects</h2>
                        <p>These are projects i develop as my side learning during my job or freelancing journey.</p>
                    </div>
                </div>

                <div className={`${styles["projects-images-row"]}`}>
                    <div className={`${styles["projects-images-col-4"]}`}>
                        <div className={`${styles["projects-images-content"]}`}>
                            <a  href="/" className={`${styles["projects-images-bg-a-tag"]}`} />
                            <div className={`${styles["projects-images-desc-wrapper"]}`}>
                                <h3 className={`${styles["projects-images-desc-h3"]}`}>
                                    <a href="/">My Portfolio</a>
                                </h3>
                                <p>Tech Stack : ReactJs, States, JSX, react-router-hash-link, react-hook-form, CSS3 </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles["projects-images-col-4"]}`}>
                        <div className={`${styles["projects-images-content"]}`}>
                            <a  href="/" className={`${styles["projects-images-bg-a-tag"]}`} />
                            <div className={`${styles["projects-images-desc-wrapper"]}`}>
                                <h3 className={`${styles["projects-images-desc-h3"]}`}>
                                    <a href="/">Music Player</a>
                                </h3>
                                <p>Tech Stack : HTML, CSS , Javascript, DOM</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles["projects-images-col-4"]}`}>
                        <div className={`${styles["projects-images-content"]}`}>
                            <a  href="/" className={`${styles["projects-images-bg-a-tag"]}`} />
                            <div className={`${styles["projects-images-desc-wrapper"]}`}>
                                <h3 className={`${styles["projects-images-desc-h3"]}`}>
                                    <a href="/">Movie and Tv Series Searching App</a>
                                </h3>
                                <p>Tech Stack : React, Material-UI, States, Hooks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects