import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const PortfolioHomePage = ({ specialPojectList }) => {
  const gridRef = useRef()
  // eslint-disable-next-line no-unused-vars
  const [isotopeInstance, setIsotopeInstance] = useState(null)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768 // Example breakpoint
    import('isotope-layout').then(Isotope => {
      // Now you have access to Isotope as a constructor
      // eslint-disable-next-line new-cap
      const iso = new Isotope.default(gridRef.current, {
        itemSelector: '.masonery-portfolio',
        layoutMode: 'masonry',
        gutter: isMobile ? 0 : 93, // No gutter for mobile // Sets the horizontal space between the columns
      })
      setIsotopeInstance(iso) // Save the instance if you need to use it later
    })
  }, [])
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    // Breakpoint columns configuration

    <div className="my-masonry-grid" ref={gridRef}>
      {specialPojectList?.map(item => {
        const categories = item.relatedContents
          .filter(relatedContent => relatedContent.contentType === 'category')
          .map(category => category.values.slug)
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={item._id}
            className="masonery-portfolio"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="masonery-portfolio-image">
              <img
                src={`${process.env.NEXT_PUBLIC_ORIGIN}${item?.values.image}/1200x1200`}
              />
            </div>
            <div className="txt-masonery-container" />
            <div className="type">
              <img src="/portfolio/line.png" />
              <h6>{categories.join(` - `)}</h6>
            </div>

            <h3>{item?.values.title}</h3>
            <p>{item?.values.homeSubTitle}</p>
          </div>
        )
      })}
    </div>
  )
}
export default PortfolioHomePage
