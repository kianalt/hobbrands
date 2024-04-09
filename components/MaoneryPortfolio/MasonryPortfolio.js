/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MasonryPortfolio = ({
  projectList,
  noButton,
  isFilter,
  categoryList,
}) => {
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
          {categoryList?.map(category => (
            <button
              className="category-menue"
              onClick={() => filterItems(`${category?.values.slug}`)}
              type="button"
              key={category._id}
            >
              <img src="/upLine.png" />
              <p> {category?.values.title}</p>
              <img src="/downLine.png" />
            </button>
          ))}
        </div>
      )}
      <div className="main-content" style={{ position: 'relative' }}>
        <div className="my-masonry-grid-noTxt" ref={gridRef}>
          {projectList?.map(item => {
            const categories = item.relatedContents
              .filter(
                relatedContent => relatedContent.contentType === 'category',
              )
              .map(category => category.values.slug)

            return (
              <div
                key={item._id}
                className={`masonery-portfolio-noTxt masonery-col ${categories.join(
                  ' ',
                )}`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Link href={`works/${item?.values.slug}`}>
                  <div className="masonery-portfolio-image">
                    <img
                      src={`${process.env.NEXT_PUBLIC_ORIGIN}${item.values.image}`}
                      alt=""
                    />

                    <div className="overlay" />
                  </div>{' '}
                </Link>
                <div className="masonery-title-Hovertext">
                  <p>{item.values.title}</p>
                </div>
                <div className="masonery-portfolio-Hovertext">
                  {categories.map((category, index) => (
                    <Link href={`/works?category=${category}`} key={index}>
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        {!noButton && (
          <div className="link-container">
            {/* Link to see more works */}
            <Link href="/works">See Our Works</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default MasonryPortfolio
