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
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>

                <div className={`${styles["projects-images-row"]}`}>
                    <div className={`${styles["projects-images-col-4"]}`}>
                        <div className={`${styles["projects-images-content"]}`}>
                            <a  href="/" className={`${styles["projects-images-bg-a-tag"]}`} />
                            <div className={`${styles["projects-images-desc-wrapper"]}`}>
                                <h3 className={`${styles["projects-images-desc-h3"]}`}>
                                    <a href="/">Why Lead Generation is Key for Business Growth</a>
                                </h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles["projects-images-col-4"]}`}>
                        <div className={`${styles["projects-images-content"]}`}>
                            <a  href="/" className={`${styles["projects-images-bg-a-tag"]}`} />
                            <div className={`${styles["projects-images-desc-wrapper"]}`}>
                                <h3 className={`${styles["projects-images-desc-h3"]}`}>
                                    <a href="/">Why Lead Generation is Key for Business Growth</a>
                                </h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles["projects-images-col-4"]}`}>
                        <div className={`${styles["projects-images-content"]}`}>
                            <a  href="/" className={`${styles["projects-images-bg-a-tag"]}`} />
                            <div className={`${styles["projects-images-desc-wrapper"]}`}>
                                <h3 className={`${styles["projects-images-desc-h3"]}`}>
                                    <a href="/">Why Lead Generation is Key for Business Growth</a>
                                </h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
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