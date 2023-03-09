import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form method="post" className="contact-validation-active" onSubmit={(e) => submitHandler(e)} >
            <div className="row align-items-center">
                <div className="col-md-7 order-md-2 order-1 col-12">
                    <div className="contact-info">
                        <ul>
                            <li><i className="fi flaticon-phone-call"></i> +16465934489</li>
                            <li><i className="fi flaticon-mail"></i> henrywlam@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default ContactForm;