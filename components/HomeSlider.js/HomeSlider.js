import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const HomeSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animate, setAnimate] = useState(false)
  const slideDuration = 10000

  // Add more slides as needed

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

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, slideDuration)

    return () => clearInterval(slideTimer)
  }, [])

  return (
    <div className="homeSlider-container">
      <div className="homeSlider-background">
        {slides.map((slide, index) => (
          <div
            className={`  animationSlider-slide${
              currentSlide === index ? 'animationSlider-active ' : ''
            } `}
            key={index}
          >
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
              <div
                className={`${animate ? ' image1 image1-animate' : 'image1'}`}
              >
                <img src={slides[currentSlide].image1} alt="" />
              </div>
              <div
                className={`${animate ? ' image2 image2-animate' : 'image2'}`}
              >
                <img src={slides[currentSlide].image2} alt="" />
              </div>
              <div
                className={`${animate ? ' image3 image3-animate' : 'image3'}`}
              >
                <img src={slides[currentSlide].image3} alt="" />
              </div>
              <div
                className={`${animate ? ' image4 image4-animate' : 'image4'}`}
              >
                <img src={slides[currentSlide].image4} alt="" />
              </div>
              <div
                className={`${animate ? ' image5 image5-animate' : 'image5'}`}
              >
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
