/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MasonryPortfolio = ({ portfolioList, noButton, isFilter }) => {
  const gridRef = useRef()
  const [isotopeInstance, setIsotopeInstance] = useState(null)
  const router = useRouter()

  // Initialize Isotope and apply initial filter from URL
  useEffect(() => {
    const handleIsotope = async () => {
      const Isotope = (await import('isotope-layout')).default
      const iso = new Isotope(gridRef.current, {
        itemSelector: '.masonery-portfolio-noTxt',
        layoutMode: 'masonry',
        gutter: window.innerWidth <= 768 ? 0 : 20, // Adjust based on your needs
      })
      setIsotopeInstance(iso)

      // Apply filter based on URL query parameter
      const { category } = router.query
      if (category) {
        iso.arrange({
          filter: `.${category}`,
        })
      }
    }

    if (typeof window !== 'undefined') {
      handleIsotope()
    }

    AOS.init()
    return () => {
      if (isotopeInstance) {
        isotopeInstance.destroy()
      }
    }
  }, [router.query])

  // Update Isotope filtering and URL based on selected category
  const filterItems = filter => {
    if (isotopeInstance) {
      const filterQuery = filter === '*' ? '' : filter
      router.push(`/works?category=${filterQuery}`, undefined, {
        shallow: true,
      })
      isotopeInstance.arrange({
        filter: filter === '*' ? '*' : `.${filter}`,
      })
    }
  }

  return (
    <div>
      {isFilter && (
        <div className="category-filters">
          <button
            className="category-menue"
            onClick={() => filterItems('*')}
            type="button"
          >
            <img src="/upLine.png" />
            <p> All</p>
            <img src="/downLine.png" />
          </button>
          <button
            className="category-menue"
            onClick={() => filterItems('branding')}
            type="button"
          >
            <img src="/upLine.png" />
            <p> Branding</p>
            <img src="/downLine.png" />
          </button>
          <button
            className="category-menue"
            onClick={() => filterItems('logodesign')}
            type="button"
          >
            <img src="/upLine.png" />
            <p> Logo Design</p> <img src="/downLine.png" />
          </button>
          <button
            className="category-menue"
            onClick={() => filterItems('ui-ux')}
            type="button"
          >
            <img src="/upLine.png" /> <p>UI / UX </p>
            <img src="/downLine.png" />
          </button>
          <button
            className="category-menue"
            onClick={() => filterItems('photography')}
            type="button"
          >
            <img src="/upLine.png" />
            <p> Photography</p>
            <img src="/downLine.png" />
          </button>
          <button
            className="category-menue"
            onClick={() => filterItems('socialmedia')}
            type="button"
          >
            <img src="/upLine.png" /> <p>Social Media</p>
            <img src="/downLine.png" />
          </button>
          <button
            className="category-menue"
            onClick={() => filterItems('socialmedia')}
            type="button"
          >
            <img src="/upLine.png" />
            <p> Promotional Video / Animation</p>
            <img src="/downLine.png" />
          </button>
        </div>
      )}
      <div className="main-content" style={{ position: 'relative' }}>
        <div className="my-masonry-grid-noTxt" ref={gridRef}>
          {portfolioList.map((item, index) => (
            <div
              key={index}
              className={`masonery-portfolio-noTxt masonery-col ${item.category}`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="masonery-portfolio-image">
                <img src={item.image} alt="" />
                <div className="overlay" />
              </div>
              <div className="masonery-title-Hovertext">
                <p>title</p>
              </div>
              <div className="masonery-portfolio-Hovertext">
                <Link href="#">Branding</Link>
                <Link href="#">photography</Link>
              </div>
            </div>
          ))}
        </div>
        {!noButton && (
          <div className="link-container">
            {/* Link to see more works */}
            <Link href="/portfolio">See Our Works</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default MasonryPortfolio
