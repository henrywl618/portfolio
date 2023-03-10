import React from 'react'
import aImg from '../../images/about/img2.jpg'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <img src={aImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>about Me</small>
                                <h2>Hi, I'm Henry.</h2>
                                <h5>I am a full stack software developer based in New York City.</h5>
                                <p>My two passions are coding and healthcare. As a licensed pharmacist with over 8 years of experience, I've worked in a variety of settings including retail, clinical pharmacy and startups. I grew interested in coding after collaborating with developers at a pharmacy startup. This ultimately lead me to enroll in a software engineering bootcamp at Springboard. I look forward to continuing my journey as a full stack developer and combining my experiences to create software that solves complex problems and improves lives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;