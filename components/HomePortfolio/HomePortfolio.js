import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const PortfolioHomePage = ({ portfolioList }) => {
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
          itemSelector: '.masonery-portfolio',
          layoutMode: 'masonry',
          gutter: 93, // Sets the horizontal space between the columns
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

    <div className="my-masonry-grid" ref={gridRef}>
      {portfolioList.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="masonery-portfolio"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="masonery-portfolio-image">
            <img src={item.image} />
          </div>
          <div className="txt-masonery-container" />
          <div className="type">
            <img src="/portfolio/line.png" />
            <h6>Branding - Logo Design - UI / UX - Social</h6>
          </div>

          <h3>{item.title}</h3>
          <p>FONTSSA Cloths Shop</p>
        </div>
      ))}
    </div>
  )
}
export default PortfolioHomePage
