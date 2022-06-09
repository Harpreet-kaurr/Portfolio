
import React, { useEffect } from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import styles from '../styles/Navbar.module.css'
import $ from 'jquery'
 const Navbar = () => {
    useEffect(() =>{
        const hero = document.getElementById("hero").offsetTop;
        const about = document.getElementById("about").offsetTop;
        const skills = document.getElementById("skills").offsetTop;
        const resume = document.getElementById("resume").offsetTop;
        const projects = document.getElementById("projects").offsetTop;
        const contact = document.getElementById("contact").offsetTop;
        window.addEventListener('scroll', () =>{
            //    console.log(hero,about,skills,resume,projects,contact)
            var navitems = document.getElementsByClassName("nav-item");
            var scrollposition = window.scrollY
            // console.log(scrollposition)
            for(var i=0;i<navitems.length;i++){

                navitems[i].classList.remove('active-menu');
            };
            if(scrollposition>400){
                document.getElementById("navbar").classList.add('navbar-scroll');
            }
            if(scrollposition<400){
                document.getElementById("navbar").classList.remove('navbar-scroll');
            }
            if(scrollposition>400 && scrollposition<skills){
                document.getElementById("about-item").classList.add('active-menu');
                
            }
            else if(scrollposition>skills && scrollposition<resume){
                document.getElementById("skills-item").classList.add('active-menu');
            }
            else if(scrollposition>resume && scrollposition<projects){
                document.getElementById("resume-item").classList.add('active-menu');
            }
            else if(scrollposition>projects && scrollposition<contact){
                document.getElementById("projects-item").classList.add('active-menu');
            }
            else if(scrollposition>contact){
                document.getElementById("contact-item").classList.add('active-menu');
            }
            else{

            }
        })
    },[])
    
  return (
    <div>
        <nav id="navbar" className={styles.navbar}>
            <div className={`${styles["navbar-container"]}`}>
                {/* <div className={`${styles["logo"]}`}>MUO</div>  */}
                <a className={`${styles["navbar-logo"]}`} href='/'><span>H</span>arpreet</a>  
                <ul className={`${styles["navbar-links"]}`}>
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" className={`${styles["hamburger"]}`}>&#9776;</label>
                    <div className={`${styles["menu"]}`}>
                        <li id="hero-item" className="nav-item"><Link smooth to="#hero">Home</Link></li>
                        <li id="about-item" className="nav-item"><Link smooth to="#about">About</Link></li>
                        <li id="skills-item" className="nav-item"><Link smooth to="#skills">Skills</Link></li>
                        <li id="resume-item" className="nav-item"><Link smooth to="#resume">Resume</Link></li>
                        <li id="projects-item" className="nav-item"><Link smooth to="#projects">Projects</Link></li>
                        <li id="contact-item" className="nav-item"><Link smooth to="#contact">Contact</Link></li>
                    </div>
                </ul>  
            </div> 
        </nav>
    </div>
  )
}

export default Navbar;