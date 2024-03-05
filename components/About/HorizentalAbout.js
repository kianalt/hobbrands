/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef, useEffect } from 'react'

const HorizentalAbout = ({ isHorizentalScroll, galleryRef }) => {
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const velocity = useRef(0)
  const lastX = useRef(0)
  const animationFrameId = useRef(null)
  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const enableBodyScroll = () => {
    document.body.style.overflow = ''
  }

  // Function to start dragging
  const startDragging = e => {
    setIsDragging(true)
    startX.current = e.pageX - galleryRef.current.offsetLeft
    scrollLeft.current = galleryRef.current.scrollLeft
    lastX.current = e.pageX
    velocity.current = 0
    window.cancelAnimationFrame(animationFrameId.current)
  }

  // Function to handle dragging
  const onDrag = e => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - galleryRef.current.offsetLeft
    const walk = (x - startX.current) * 2 // Adjust the scroll speed if necessary
    galleryRef.current.scrollLeft = scrollLeft.current - walk
    velocity.current = x - lastX.current
    lastX.current = x
  }

  // Function to stop dragging and handle inertia
  const stopDragging = () => {
    setIsDragging(false)
    const inertiaScroll = () => {
      if (Math.abs(velocity.current) > 1) {
        galleryRef.current.scrollLeft += velocity.current
        velocity.current *= 0.95 // Reduce the velocity by a friction factor
        animationFrameId.current = window.requestAnimationFrame(inertiaScroll)
      }
    }
    if (
      galleryRef.current &&
      galleryRef.current.scrollWidth - galleryRef.current.scrollLeft ===
        galleryRef.current.clientWidth
    ) {
      enableBodyScroll()
    }
    inertiaScroll()
  }

  useEffect(() => {
    if (isHorizentalScroll) {
      disableBodyScroll()

      // Optional: Automatically scroll the gallery to a certain position if needed
      // smoothScrollTo(galleryRef.current, targetPosition, duration);
    } else {
      enableBodyScroll() // Ensure vertical scrolling is re-enabled if isHorizentalScroll is false.
    }
  }, [isHorizentalScroll])
  return (
    <div className="HorizentalAbout-container">
      <div className="title-container">
        <h4>Services that bring your dream branding closer</h4>
      </div>
      <div
        className={`gallery ${isHorizentalScroll ? 'horizontalScroll ' : ''}`}
        ref={galleryRef}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDrag}
      >
        <div className="gallery-item">
          <img src="/horizental.png" />
          <h6>Branding</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </p>
        </div>
        <div className="gallery-item">
          <img src="/horizental.png" />
          <h6>Logo Branding</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </p>
        </div>
        <div className="gallery-item">
          <img src="/horizental.png" />
          <h6>Branding </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </p>
        </div>
        <div className="gallery-item">
          <img src="/horizental.png" />
          <h6>Branding / Logo Branding</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </p>
        </div>
        <div className="gallery-item">
          <img src="/horizental.png" />
          <h6>Branding </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </p>
        </div>
        <div className="gallery-item">
          <img src="/horizental.png" />
          <h6>Logo Branding</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </p>
        </div>
      </div>
    </div>
  )
}
export default HorizentalAbout
