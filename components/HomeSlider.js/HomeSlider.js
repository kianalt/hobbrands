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
            // eslint-disable-next-line react/no-array-index-key
            key={slide._id}
          >
            <div className="text-container">
              <div className="logo">
                <Image
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${slide?.values.logo}/1200x1200`}
                  width={722}
                  height={253}
                />
              </div>
              <div className="link-container">
                <div className="black" />
                <Link href={`/works/${slide?.values.slug}`}>
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
                <img
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${slides[currentSlide]?.values.image1}  /1200x1200`}
                  alt=""
                />
              </div>
              <div
                className={`${animate ? ' image2 image2-animate' : 'image2'}`}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${slides[currentSlide]?.values.image2}  /1200x1200`}
                  alt=""
                />
              </div>
              <div
                className={`${animate ? ' image3 image3-animate' : 'image3'}`}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${slides[currentSlide]?.values.image3} /1200x1200`}
                  alt=""
                />
              </div>
              <div
                className={`${animate ? ' image4 image4-animate' : 'image4'}`}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${slides[currentSlide]?.values.image4}  /1200x1200`}
                  alt=""
                />
              </div>
              <div
                className={`${animate ? ' image5 image5-animate' : 'image5'}`}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${slides[currentSlide]?.values.image5}  /1200x1200`}
                  alt=""
                />
              </div>
            </div>
            <div className="image-container-mobile">
              <div
                className={`${
                  animate ? '  imageMobile-animate' : 'imageMobile'
                }`}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${slides[currentSlide]?.values.image6}  /1200x1200`}
                  alt=""
                />
                <div className="downArrow">
                  <Link href={`/works/${slide?.values.slug}`}>
                    <Image src="/downArrow.png" width={10} height={20} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeSlider
