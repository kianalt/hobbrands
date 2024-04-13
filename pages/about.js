import React, { useEffect, useRef, useState } from 'react'

// Componenet

import CommonLayout from 'layouts/CommonLayout'
import AboutDetails from 'components/About/AboutDetails'
import AboutDescription from 'components/About/AboutDescription'
// import HorizentalAbout from 'components/About/HorizentalAbout'
// Api
// import api from 'utils/api'

// export async function getStaticProps() {
//   const singleProject = await api
//     .getInfoByName({
//       urlParams: { name: 'home-project' },
//     })
//     .then(res => res.data.values)

//   const artList = await api
//     .getContentList({
//       urlParams: { contentType: 'art' },
//       params: { isFeatured: true },
//     })
//     .then(res => res.data)

//   const projectList = await api
//     .getContentList({
//       urlParams: { contentType: 'project' },
//       params: { isFeatured: true },
//     })
//     .then(res => res.data)
//   const slides = await api
//     .getContentList({
//       urlParams: { contentType: 'slider' },
//     })
//     .then(res => res.data)
//   return {
//     props: {
//       singleProject,
//       artList: artList || [],
//       slides: slides || [],
//       projectList: projectList || [],
//     },
//     revalidate: 10,
//   }
// }

const About = () => {
  const galleryRef = useRef(null)
  const [isHorizentalScroll, setIsHorizentalScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return
      const rect = galleryRef.current.getBoundingClientRect()
      const { top, bottom } = rect
      const viewportHeight = window.innerHeight

      // check if the gallery section is fully in view
      if (top <= viewportHeight && bottom >= 0) {
        setIsHorizentalScroll(true)
      } else {
        setIsHorizentalScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <CommonLayout title="hobbrands" noBreadcrumb>
      <div className="">
        <div id="section1">
          <AboutDetails />
        </div>
        <div id="section2">
          {/* <HorizentalAbout
            isHorizentalScroll={isHorizentalScroll}
            galleryRef={galleryRef}
          /> */}
        </div>
        <div id="section3">
          <AboutDescription />
        </div>
      </div>
    </CommonLayout>
  )
}
export default About
