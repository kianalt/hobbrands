import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
        <div className="copyRight-mobile">
          <div className="social-footer">
            <Link href="#">
              <Image src="/social-footer/1.png" width={17} height={17} />
            </Link>
            <Link href="#">
              <Image src="/social-footer/2.png" width={17} height={13} />
            </Link>
            <Link href="#">
              <Image src="/social-footer/3.png" width={17} height={17} />
            </Link>
            <Link href="#">
              <Image src="/social-footer/4.png" width={21} height={21} />
            </Link>
          </div>
          <div className="foter-part-3">
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
        </div>
      </div>
    </footer>
  )
}
export default Footer
