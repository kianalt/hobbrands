import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ImageBanner = () => (
  <div className="ImageBanner">
    <div className="backgroundImage">
      <img src="/imageBanner.png" />
    </div>
    <div className="text-container">
      <div className="imageBanner-title-container">
        <p>Design is life.</p>
      </div>
      <div className="imageBanner-button-container">
        <Link href="/contact" style={{ textDecoration: 'none', color: '#fff' }}>
          Lets Design Your Dream
          <Image
            className="ml-3"
            src="/Arrow2.png"
            width={16}
            height={12}
            alt="arrow"
            style={{ marginLeft: '5px' }}
          />
        </Link>
      </div>
    </div>
  </div>
)

export default ImageBanner
