import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const HomeSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animate, setAnimate] = useState(false)
  const slideDuration = 400000
  const changeSlide = newSlide => {
    setAnimate(false)
    setCurrentSlide(newSlide)

    setTimeout(() => {
      setAnimate(true)
    }, 1000)
  }
  const nextSlide = () => {
    changeSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    changeSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
  }
  useEffect(() => {
    const slideTimer = setInterval(nextSlide, slideDuration)

    // Clear the interval ehrn the component unmount
    return () => clearInterval(slideTimer)
  }, [currentSlide]) // Empty dependency array ensures this runs once on mount

  console.log(slides)
  return (
    <div className="homeSlider-container">
      <div className="homeSlider-background">
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="text-container">
              <div className="logo">
                <Image src={slide.image6} width={722} height={253} />
              </div>
              <div className="link-container">
                <div className="black" />
                <Link href="#">
                  See Our Works{' '}
                  <Image
                    className="ml-1"
                    src="/Arrow.png"
                    width={14}
                    height={10}
                    alt="arrow"
                  />
                </Link>
              </div>
            </div>
            <div className="image-container">
              <div className="image1">
                <img src={slides[currentSlide].image1} alt="" />
              </div>
              <div className="image2">
                <img src={slides[currentSlide].image2} alt="" />
              </div>
              <div className="image3">
                <img src={slides[currentSlide].image3} alt="" />
              </div>
              <div className="image4">
                <img src={slides[currentSlide].image4} alt="" />
              </div>
              <div className="image5">
                <img src={slides[currentSlide].image5} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeSlider
