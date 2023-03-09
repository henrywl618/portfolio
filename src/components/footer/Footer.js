import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <div className="tp-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-info">
                            <ul>
                                <li><i className="fi flaticon-phone-call"></i> +16465934489</li>
                                <li><i className="fi flaticon-mail"></i> henrywlam@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                <li><a href="https://www.facebook.com/henry.lam.1293/" target={"_blank"}><i className="ti-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/onthe__lam/" target={"_blank"}><i className="ti-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/henry-lam-94961b238/" target={"_blank"}><i className="ti-linkedin"></i></a></li>
                                <li><a href="https://github.com/henrywl618/" target={"_blank"}><i className="ti-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;