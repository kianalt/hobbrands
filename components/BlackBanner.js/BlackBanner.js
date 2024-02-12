import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlackBanner = () => (
  <div className="BlackBannerContainer">
    <div className="text-container">
      <p>
        MEMORABLE BRANDS <br />
        MAKE BUSINESS STRONGER.
      </p>
    </div>
    <div className="link-blackContainer">
      <div className="white" />
      <Link href="#">
        See Our Works{' '}
        <Image
          className="ml-3"
          src="/Arrow2.png"
          width={14}
          height={10}
          alt="arrow"
        />
      </Link>
    </div>
  </div>
)

export default BlackBanner
