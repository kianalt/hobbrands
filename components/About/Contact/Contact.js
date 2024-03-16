import React from 'react'
import Form from './Form'

const Contact = () => (
  <div className="contact-container">
    <div className="contact-title">
      <div className="main-title">
        <h1>CONTACT US</h1>
      </div>
      <div className="title-description">
        <h6>Let’s chat.</h6>
        <p>
          This could be the start of
          <br /> something beautiful.
        </p>
      </div>
    </div>
    <div className="contact-dscription">
      <div className="contact-address">
        <h5>The Studio</h5>
        <p>
          We are worldwide branding studio in Iran, Tehran. If you are not a fan
          of forms, Call us!
        </p>
        <h6>+98 55662133</h6>
        <h6>hello@hopbrands.com</h6>
      </div>
      <div className="contact-form">
        <Form />
      </div>
    </div>
  </div>
)

export default Contact
