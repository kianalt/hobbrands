import Form2 from 'components/About/Contact/Form2'
import React from 'react'
import Link from 'next/link'

const Menue = () => (
  <div className="burgermenue-container ">
    <div id="section1">
      <div className="subMenue">
        <ul>
          <Link href="/">HOME</Link>
        </ul>
        <ul>
          <Link href="works">PORTFOLIO</Link>
        </ul>
        <ul>
          STUDIO
          <Link href="works">
            <li>Services</li>
          </Link>
          <Link href="about">
            <li>Process</li>
          </Link>
        </ul>
        <ul>
          CONTACT
          <a href="tel:02155662133">
            <li>+98 55662133</li>
          </a>
          <a href="mailto:hello@hopbrands.comw">
            <li>hello@hopbrands.com</li>
          </a>
        </ul>
      </div>
      <div className="conatct-form-burgur-menue row">
        <div className="col-lg-5">
          <h2>
            We look forward to <br /> hearing from you.
          </h2>
        </div>
        <div className="col-lg-7">
          <div className="contact-form">
            <Form2 />
          </div>
        </div>
      </div>
    </div>
    <div id="section2" />

    <div id="section3" />
  </div>
)

export default Menue
