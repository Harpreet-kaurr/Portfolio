import React from 'react'
import styles from '../styles/Skills.module.css'

function Skills() {
  return (
    <div id="skills">
        <div className={`${styles["skills-wrapper"]}`}>
            <div className={`${styles["skills-container"]}`}>
                <div className={`${styles["skills-row"]}`}>
                    <div className={`${styles["skills-col-3"]}`}>
                        <a href="/">HTML</a>
                    </div>
                    <div className={`${styles["skills-col-3"]}`}>
                        <a href="/">CSS</a>
                    </div>
                    <div className={`${styles["skills-col-3"]}`}>
                        <a href="/">Javscript</a>
                    </div>
                    <div className={`${styles["skills-col-3"]}`}>
                        <a href="/">React</a>
                    </div>
                    {/* <div className={`${styles["skills-col-3"]}`}>
                        <a href="/">Next.js</a>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills