import React from 'react'
import Link from 'next/link'

const ProjectDetail1 = () => {
  const slides = [
    {
      id: 0,
      image1: '/slides/1.png',
      image2: '/slides/2.png',
      image3: '/slides/3.png',
      image4: '/slides/4.png',
      image5: '/slides/5.png',
      image6: '/slides/6.png',
    },
  ]
  return (
    <div className="ProjectDetail1">
      {slides.map((slide, index) => (
        <div className="ProjectDetail1-text" key={index}>
          <div className="ProjectDetail1-title">
            <h1>Fonssa</h1>
            <div className="categoris-list">
              <div className="category-list">
                <Link href="#">Branding</Link>
              </div>
              <div className="category-list">
                {' '}
                <Link href="#">Photography</Link>
              </div>
              <div className="category-list">
                {' '}
                <Link href="#">Logo Design</Link>
              </div>
            </div>
          </div>
          <div className="ProjectDetail1-description">
            <p>
              This is a fashion and clothing design brand with a logo that
              combines F and S in a minimalist style that reflects the brand’s
              identity.
            </p>
          </div>
          <div className="ProjectDetail1-details">
            <div className="part1">
              <h6>Client</h6>
              <p>FONSSA Shop Center</p>
            </div>
            <div className="part2">
              <h6>When</h6>
              <p>2020</p>
            </div>
            <div className="part3">
              <h6>Share this project</h6>
              <p>LinkedIn</p>
            </div>
          </div>
          <div className="ProjectDetail1-images">
            <div className="image1">
              <img src={slide.image5} />
            </div>

            <div className="image2">
              <img src={slide.image6} />
            </div>
          </div>
          <div className="ProjectDetail1-description2">
            <h6>FONSSA Brand</h6>
            <p>
              The brand aims to attract mostly young customers and challenge the
              established brands. We not only designed the brand’s visual
              identity but also proposed some ideas for clothing design and
              print patterns.
            </p>
            <div className="secondimages">
              <img src={slide.image4} />
              <img src={slide.image3} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ProjectDetail1
