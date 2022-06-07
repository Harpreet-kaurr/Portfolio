import React from 'react'
import styles from '../styles/Contact.module.css'
import { useForm } from 'react-hook-form'

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
    <div id="contact">
        <div className={`${styles["contact-wrapper"]}`}>
            <div className={`${styles["contact-container"]}`}>
                <div className={`${styles["contact-header-row"]}`}>
                    <div className={`${styles["contact-header-col-12"]}`}>
                        <h2>Contact Me</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>

                <div className={`${styles["contact-cards-row"]}`}>
                    <div className={`${styles["contact-cards-col-3"]}`}>
                        <div className={`${styles["contact-cards-col-3-box-shadow"]}`}>
                            <div className={`${styles["contact-cards-icon-circle"]}`}>
                                <span class="fa fa-github-square" aria-hidden="true"></span>
                            </div>
                            <div>
                                <h3 class="mb-4">github</h3>
                                <p><a href='/'>yoursite.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles["contact-cards-col-3"]}`}>
                        <div className={`${styles["contact-cards-col-3-box-shadow"]}`}>
                            <div className={`${styles["contact-cards-icon-circle"]}`}>
                                <span class="fa fa-phone" aria-hidden="true"></span>
                            </div>
                            <div>
                                <h3 class="mb-4">Contact</h3>
                                <p><a href='/'>yoursite.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles["contact-cards-col-3"]}`}>
                        <div className={`${styles["contact-cards-col-3-box-shadow"]}`}>
                            <div className={`${styles["contact-cards-icon-circle"]}`}>
                                <span class="fa fa-envelope" aria-hidden="true"></span>
                            </div>
                            <div>
                                <h3 class="mb-4">Email</h3>
                                <p><a href='/'>yoursite.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles["contact-cards-col-3"]}`}>
                        <div className={`${styles["contact-cards-col-3-box-shadow"]}`}>
                            <div className={`${styles["contact-cards-icon-circle"]}`}>
                                <span class="fa fa-commenting" aria-hidden="true"></span>
                            </div>
                            <div>
                                <h3 class="mb-4">LinkedIn</h3>
                                <p><a href='/'>yoursite.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="contactform" className={`${styles["contact-form-row"]}`}>
                    <div className={`${styles["contact-form-col-6"]}`}>
                        <div className={`${styles["contact-form-bg-image"]}`}></div>
                    </div>
                    <div className={`${styles["contact-form-col-6"]}`}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={`${styles["contact-form-form-group"]}`}>
                                <input type="text" className={`${styles["contact-form-form-control"]}`} placeholder="Your Name" {...register("firstName", { required: true, maxLength: 10 })}/>
                                {errors.firstName && <p className={`${styles["contact-form-errors"]}`}>Please check the First Name</p>}
                            </div>
                            <div className={`${styles["contact-form-form-group"]}`}>
                                <input type="text" className={`${styles["contact-form-form-control"]}`} placeholder="Your Email" 
                                    {...register("email", 
                                    { 
                                        required: true,  
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                                    })}
                                />
                                {errors.email && <p className={`${styles["contact-form-errors"]}`}>Please check the Email</p>}
                            </div>
                            <div className={`${styles["contact-form-form-group"]}`}>
                                <input type="text" className={`${styles["contact-form-form-control"]}`} placeholder="Subject" />
                            </div>
                            <div className={`${styles["contact-form-form-group"]}`}>
                                <textarea  rows="7" cols="30" className={`${styles["contact-form-form-control"]}`} placeholder="Message" ></textarea>
                            </div>
                            <div className={`${styles["contact-form-form-group"]}`}>
                                <input type="submit" value="Send Message" className={`${styles["contact-form-btn"]}`} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact