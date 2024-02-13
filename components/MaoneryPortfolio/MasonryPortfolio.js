import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

const MasonryPortfolio = ({ portfolioList }) => {
  const gridRef = useRef()
  // eslint-disable-next-line no-unused-vars
  const [isotopeInstance, setIsotopeInstance] = useState(null)

  useEffect(() => {
    // Ensure this code runs only in the browser
    if (typeof window !== 'undefined') {
      import('isotope-layout').then(Isotope => {
        // Now you have access to Isotope as a constructor
        // eslint-disable-next-line new-cap
        const iso = new Isotope.default(gridRef.current, {
          itemSelector: '.masonery-portfolio-noTxt',
          layoutMode: 'masonry',
          gutter: 20, // Sets the horizontal space between the columns
        })
        setIsotopeInstance(iso) // Save the instance if you need to use it later
      })
    }
  }, [])
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    // Breakpoint columns configuration

    <div className="my-masonry-grid-noTxt" ref={gridRef}>
      {portfolioList.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="masonery-portfolio-noTxt masonery-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {' '}
          <div className="masonery-portfolio-image">
            <div className="masonery-shadow-img" />
            <img src={item.image} />
          </div>
          <div className="masonery-portfolio-Hovertext">
            <Link href="#">Branding</Link>
            <Link href="#">photography</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MasonryPortfolio
