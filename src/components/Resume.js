
import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import styles from '../styles/Resume.module.css'

const Resume = () => {
    const handlechange = (e) =>{
        var target = e.currentTarget.id;
        var tabs = document.getElementsByClassName('tab');
        for(var i=0;i<tabs.length;i++){
            // console.log(tabs[i]);
            tabs[i].classList.remove('active-item');
        };
        document.getElementById(target).classList.add('active-item');
    }
  return (
    <div id="resume">
        <div className={`${styles["resume-wrapper"]}`}>
            <div className={`${styles["resume-container"]}`}>
                <div className={`${styles["resume-row"]}`}>
                    <div className={`${styles["resume-col-3"]}`}>
                        <nav>
                            <ul>
                                <li><Link smooth to="#page-1"  id="page1" className="tab active-item" onClick={handlechange}>Education</Link></li>
                                <li ><Link smooth to="#page-2" id="page2" className="tab" onClick={handlechange}>Experience</Link></li>
                                <li><Link smooth to="#page-3"  id="page3" className="tab" onClick={handlechange}>Skills</Link></li>
                                <li><Link smooth to="#page-4"  id="page4" className="tab" onClick={handlechange}>Awards</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={`${styles["resume-col-9"]}`}>
                        <div id="page-1" className={`${styles["resume-page-1"]}`}>
                            <h2>Education</h2>
                            <div className={`${styles["resume-education-wrapper"]}`}>
                                <div className={`${styles["resume-education-icon"]}`}>
                                    <span class="fa fa-graduation-cap"></span>
                                </div>
                                <div className={`${styles["resume-education-details"]}`}>
                                    <span>2013-2016</span>
                                    <h2>Bachelor of Computer Application</h2>
                                    <span>Guru Arjan Dev Khalsa Collage</span>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                            <div className={`${styles["resume-education-wrapper"]}`}>
                                <div className={`${styles["resume-education-icon"]}`}>
                                    <span class="fa fa-graduation-cap"></span>
                                </div>
                                <div className={`${styles["resume-education-details"]}`}>
                                    <span>2016-2017</span>
                                    <h2>Diploma in Computer Teaching</h2>
                                    <span>Apex Institute</span>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>

                            <div className={`${styles["resume-education-wrapper"]}`}>
                                <div className={`${styles["resume-education-icon"]}`}>
                                    <span class="fa fa-graduation-cap"></span>
                                </div>
                                <div className={`${styles["resume-education-details"]}`}>
                                    <span>2017-2020</span>
                                    <h2>Masters of Computer Application</h2>
                                    <span>St. Soldier Technical and Management Collage</span>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                        </div>


                        <div id="page-2" className={`${styles["resume-page-1"]}`}>
                            <h2>Experience</h2>
                            <div className={`${styles["resume-education-wrapper"]}`}>
                                <div className={`${styles["resume-education-icon"]}`}>
                                    <span class="fa fa-graduation-cap"></span>
                                </div>
                                <div className={`${styles["resume-education-details"]}`}>
                                    <span>2020-2021</span>
                                    <h2>Fullstack Web Developer</h2>
                                    <span>Medical Network Pvt. Ltd.</span>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                            <div className={`${styles["resume-education-wrapper"]}`}>
                                <div className={`${styles["resume-education-icon"]}`}>
                                    <span class="fa fa-graduation-cap"></span>
                                </div>
                                <div className={`${styles["resume-education-details"]}`}>
                                    <span>2021-Present</span>
                                    <h2>Frontent Web Developer</h2>
                                    <span>Freelancer</span>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                        </div>



                        <div id="page-3" className={`${styles["resume-page-1"]}`}>
                            <h2>Awards & Certifications</h2>
                            <div className={`${styles["resume-education-wrapper"]}`}>
                                <div className={`${styles["resume-education-icon"]}`}>
                                    <span class="fa fa-graduation-cap"></span>
                                </div>
                                <div className={`${styles["resume-education-details"]}`}>
                                    <span>2017-2020</span>
                                    <h2>Merit List Holder</h2>
                                    <span>I.K.G Punjab Technical University</span>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>

                            <div className={`${styles["resume-education-wrapper"]}`}>
                                <div className={`${styles["resume-education-icon"]}`}>
                                    <span class="fa fa-graduation-cap"></span>
                                </div>
                                <div className={`${styles["resume-education-details"]}`}>
                                    <span>2021</span>
                                    <h2>Data Analyst</h2>
                                    <span>Google Data Analyst Certifications</span>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                        </div>


                        <div id="page-4" className={`${styles["resume-page-1"]}`}>
                            <h2>Skills</h2>
                            <div className={`${styles["resume-skills-row"]}`}>
                                <div className={`${styles["resume-skills-col-3"]}`}>
                                    <div className={`${styles["resume-skills-col-card"]}`}>
                                        <h2>HTML</h2>  
                                    </div> 
                                </div>
                                <div className={`${styles["resume-skills-col-3"]}`}>
                                    <div className={`${styles["resume-skills-col-card"]}`}>
                                        <h2>CSS</h2>
                                    </div>
                                </div>
                                <div className={`${styles["resume-skills-col-3"]}`}>
                                    <div className={`${styles["resume-skills-col-card"]}`}>
                                        <h2>Javascript</h2>
                                    </div>
                                </div> 
                                <div className={`${styles["resume-skills-col-3"]}`}>
                                    <div className={`${styles["resume-skills-col-card"]}`}>
                                        <h2>React</h2>
                                    </div>
                                </div> 
                                <div className={`${styles["resume-skills-col-3"]}`}>
                                    <div className={`${styles["resume-skills-col-card"]}`}>
                                        <h2>Redux</h2>
                                    </div>
                                </div> 
                                <div className={`${styles["resume-skills-col-3"]}`}>
                                    <div className={`${styles["resume-skills-col-card"]}`}>
                                        <h2>Hubspot</h2>
                                    </div>
                                </div>
                                <div className={`${styles["resume-skills-col-3"]}`}>
                                    <div className={`${styles["resume-skills-col-card"]}`}>
                                        <h2>Python</h2>
                                    </div>
                                </div>
                                <div className={`${styles["resume-skills-col-3"]}`}>
                                    <div className={`${styles["resume-skills-col-card"]}`}>
                                        <h2>Problem Solving</h2>
                                    </div>
                                </div>
                                <div className={`${styles["resume-skills-col-3"]}`}>
                                    <div className={`${styles["resume-skills-col-card"]}`}>
                                        <h2>C/C++</h2>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume