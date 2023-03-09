import React from "react";
import { NavLink } from 'react-router-dom'
import himg from '../../images/slider/img1.jpg'
import { Link } from 'react-scroll'
import { personalData } from '../../api/resumedata.js'

const Hero =() => {
    return (
        <section className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h2>Full Stack Software Developer</h2>
                            </div>
                            <div className="tp-hero-sub">
                                <p>Henry Lam</p>
                            </div>
                            <div className="btns">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <img src={himg} alt=""/>
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li><a href={personalData.linkedIn.url} target="_blank">LinkedIn</a></li>
                    <li><a href={personalData.github.url} target="_blank">GitHub</a></li>
                    <li><a href={personalData.instagram.url} target="_blank">Instagram</a></li>
                </ul>
            </div>
            <div className="visible-text">
                <h1>Developer</h1>
            </div>
        </section>
    )
}

export default Hero;