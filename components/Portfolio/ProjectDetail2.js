import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectDetail2 = ({ project }) => {
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
        <p>{project?.values.description3}</p>
      </div>
      <div className="projectDetail2-images">
        <div className="main-content" style={{ position: 'relative' }}>
          <div className="my-masonry-grid-noTxt" ref={gridRef}>
            {project?.values.image5 && (
              <div
                className="masonery-portfolio"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="masonery-portfolio-image">
                  <img
                    src={`${process.env.NEXT_PUBLIC_ORIGIN}${project?.values.image5}`}
                  />
                </div>
                <div className="txt-masonery-container" />
              </div>
            )}
            {project?.values.image6 && (
              <div
                className="masonery-portfolio"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="masonery-portfolio-image">
                  <img
                    src={`${process.env.NEXT_PUBLIC_ORIGIN}${project?.values.image6}`}
                  />
                </div>
                <div className="txt-masonery-container" />
              </div>
            )}
            {project?.values.image7 && (
              <div
                className="masonery-portfolio"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="masonery-portfolio-image">
                  <img
                    src={`${process.env.NEXT_PUBLIC_ORIGIN}${project?.values.image7}`}
                  />
                </div>
                <div className="txt-masonery-container" />
              </div>
            )}
            {project?.values.image8 && (
              <div
                className="masonery-portfolio"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="masonery-portfolio-image">
                  <img
                    src={`${process.env.NEXT_PUBLIC_ORIGIN}${project?.values.image8}`}
                  />
                </div>
                <div className="txt-masonery-container" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectDetail2
