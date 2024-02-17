import React from 'react'
import useScrollPosition from 'use-scroll-position'

const Taq = ({ text1, text2 }) => {
  const scrollPosition = useScrollPosition()
  let translateX = 0
  if (scrollPosition >= 0 && scrollPosition <= 90) {
    translateX = -1400
  } else if (scrollPosition > 90 && scrollPosition <= 250) {
    translateX = ((scrollPosition - 140) * 1200) / 110
  } else if (scrollPosition > 250) {
    translateX = 0
  }

  let translateX2 = 0
  if (scrollPosition >= 0 && scrollPosition <= 90) {
    translateX2 = 1400
  } else if (scrollPosition > 90 && scrollPosition <= 250) {
    translateX2 = ((scrollPosition - 140) * 1200) / 110
  } else if (scrollPosition > 250) {
    translateX2 = 0
  }
  return (
    <div className="taq-container">
      <div
        className={`${
          scrollPosition > 280 ? 'taq-text-1-animate' : 'taq-text-1'
        }`}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        <p>{text1} </p>
      </div>
      <div
        className={`${
          scrollPosition > 280 ? 'taq-text-2-animate' : 'taq-text-2'
        }`}
        style={{ transform: `translateX(${translateX2}px)` }}
      >
        <p>{text2} </p>
      </div>
    </div>
  )
}
export default Taq
