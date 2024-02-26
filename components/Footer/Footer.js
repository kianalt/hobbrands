import React, { useState } from 'react'

const Footer = () => {
  const [imageSrc, setImageSrc] = useState('/flash.png')
  return (
    <footer>
      <div className="footer-container">
        <div className="call-to-action">
          <h2>Lets Get Started!</h2>
        </div>
        <div className="copyRight">
          <div className="description">
            <div className="address">
              <p>
                Hopbrands Design Studio
                <br />
                <span>
                  Location: Iran Tehran St. Shariati St. harley 42541{' '}
                </span>
              </p>
            </div>
            <div className="tel">
              <a>Tel: +98 52164873</a>
            </div>
            <div className="date">
              <p>
                © 2015 - 2023 Hopbrands. <br />
                Privacy / Cookies Policy
              </p>
            </div>
          </div>
          <div className="conatcUs">
            <p>Contact Us</p>
          </div>
          <div
            className="up"
            onMouseEnter={() => {
              setImageSrc('/flash.png')
            }}
            onMouseLeave={() => {
              setImageSrc('/flash.png')
            }}
          >
            <img src={imageSrc} />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
