/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ status, setStatus }) => (
  <header>
    <div className="mainHeader">
      <div className="header-logo">
        <Image src="/logo/LogoHob.png" width={100} height={53} />
      </div>
      <div className="header-menue ">
        <ul className="">
          <li className="header-li">
            <Image src="/logo/hover.png" width={30} height={12} />
            <Link href="/">Home</Link>
          </li>
          <li className="header-li">
            <Image src="/logo/hover.png" width={30} height={12} />
            <Link href="/works">Our Works</Link>
          </li>
          <li className="header-li">
            <Image src="/logo/hover.png" width={30} height={12} />
            <Link href="/about">About Us</Link>
          </li>
          <li className="header-li">
            <Image src="/logo/hover.png" width={30} height={12} />
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div
        className="burgur-menue-icon"
        onClick={() => {
          setStatus(!status)
        }}
      >
        <Image src="/logo/burgur.png" width={40} height={20} />
      </div>
    </div>
  </header>
)
export default Header
