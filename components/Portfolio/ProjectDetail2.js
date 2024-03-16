import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectDetail2 = () => {
  const portfolioList = [
    {
      id: 0,
      image: '/portfolio/1.png',
      title: 'Shop for your beautiful moments',
      category: 'branding',
    },

    {
      id: 1,
      image: '/portfolio/2.png',
      title: 'Make your dreams',
      category: 'logo-design',
    },
    {
      id: 2,
      image: '/portfolio/3.png',
      title: 'Beautiful Poeple, beauty world',
      category: 'ui-ux',
    },
    { id: 3, image: '/portfolio/4.png', title: 'Solution for everything' },
    {
      id: 4,
      image: '/portfolio/5.png',
      title: 'Beautiful Poeple, beauty world',
      category: 'photography',
    },
    {
      id: 5,
      image: '/portfolio/6.png',
      title: 'Beautiful Poeple, beauty world',
      category: 'socialmedia',
    },
  ]
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
        gutter: isMobile ? 0 : 3, // No gutter for mobile // Sets the horizontal space between the columns
      })
      setIsotopeInstance(iso) // Save the instance if you need to use it later
    })
  }, [])
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className="ProjectDetail2">
      <div className="ProjectDetail2-text">
        <h6>Shop for your beautiful moments</h6>
        <p>
          The brand aims to attract mostly young customers and challenge the
          established brands. We not only designed the brand’s visual identity
          but also proposed some ideas for clothing design and print patterns.
        </p>
      </div>
      <div className="projectDetail2-images">
        <div className="main-content" style={{ position: 'relative' }}>
          <div className="my-masonry-grid-noTxt" ref={gridRef}>
            {portfolioList.slice(3, portfolioList.length).map((item, index) => (
              <div
                key={index}
                className="masonery-portfolio"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="masonery-portfolio-image">
                  <img src={item.image} />
                </div>
                <div className="txt-masonery-container" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectDetail2
