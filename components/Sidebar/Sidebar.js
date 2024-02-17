import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// function isSectionInView(sectionId) {
//   const section = document.getElementById(sectionId)
//   const bounding = section.getBoundingClientRect()
//   return (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   )
// }
const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  // const handleScroll = () => {
  //   if (isSectionInView('section1')) {
  //     setActiveSection('Text for Section 1')
  //   } else if (isSectionInView('section2')) {
  //     setActiveSection('Text for Section 2')
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])
  useEffect(() => {
    const handleScroll = () => {
      const footerPosition = document.querySelector('footer').offsetTop
      const scrollPosition = window.pageYOffset + window.innerHeight
      if (scrollPosition > footerPosition) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebar-text">
        <h3>{activeSection}</h3>
      </div>
      <div className="sochial  black">
        <Link href="#">
          <Image
            src="/social/1.png"
            width={17}
            height={17}
            style={{ opacity: isScrolled ? 0 : 1 }}
          />
        </Link>
        <Link href="#">
          <Image
            src="/social/2.png"
            width={17}
            height={13}
            style={{ opacity: isScrolled ? 0 : 1 }}
          />
        </Link>
        <Link href="#">
          <Image
            src="/social/3.png"
            width={17}
            height={17}
            style={{ opacity: isScrolled ? 0 : 1 }}
          />
        </Link>
        <Link href="#">
          <Image
            src="/social/4.png"
            width={21}
            height={21}
            style={{ opacity: isScrolled ? 0 : 1 }}
          />
        </Link>
        <Link href="#">
          <Image
            src="/social/5.png"
            width={21}
            height={21}
            style={{ opacity: isScrolled ? 0 : 1 }}
          />
        </Link>
      </div>
      <div className="sochial-white">
        <Link href="#">
          <Image
            src="/social-footer/1.png"
            width={17}
            height={17}
            style={{ opacity: isScrolled ? 1 : 0 }}
          />
        </Link>
        <Link href="#">
          <Image
            src="/social-footer/2.png"
            width={17}
            height={13}
            style={{ opacity: isScrolled ? 1 : 0 }}
          />
        </Link>
        <Link href="#">
          <Image
            src="/social-footer/3.png"
            width={17}
            height={17}
            style={{ opacity: isScrolled ? 1 : 0 }}
          />
        </Link>
        <Link href="#">
          <Image
            src="/social-footer/4.png"
            width={21}
            height={21}
            style={{ opacity: isScrolled ? 1 : 0 }}
          />
        </Link>
        <Link href="#">
          <Image
            src="/social-footer/5.png"
            width={21}
            height={21}
            style={{ opacity: isScrolled ? 1 : 0 }}
          />
        </Link>
      </div>
    </div>
  )
}
export default Sidebar
