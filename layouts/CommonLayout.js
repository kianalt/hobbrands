import React, { useEffect, useState } from 'react'

// Next
import Head from 'next/head'

// Componenets
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Sidebar from 'components/Sidebar/Sidebar'
// import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
function isSectionInView(sectionId) {
  const section = document.getElementById(sectionId)
  const bounding = section.getBoundingClientRect()

  // return (
  //   bounding.top >= 0 &&
  //   bounding.left >= 0 &&
  //   bounding.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   bounding.right <=
  //     (window.innerWidth || document.documentElement.clientWidth)
  // )
  return bounding.top > 0 && bounding.top < window.innerHeight
}
const CommonLayout = ({
  title,
  noBreadcrumb,
  parent,
  parentRoute,
  subParent,
  subParentRoute,
  children,
}) => {
  const breadcrumbList = []
  if (parentRoute) {
    breadcrumbList.push({
      title: parent,
      url: `${process.env.NEXT_PUBLIC_ORIGIN}${parentRoute}`,
    })
  }
  if (subParentRoute) {
    breadcrumbList.push({
      title: subParent,
      url: `${process.env.NEXT_PUBLIC_ORIGIN}${subParentRoute}`,
    })
  }
  breadcrumbList.push({
    title,
    url: undefined,
  })
  const [activeSection, setActiveSection] = useState('')
  const handleScroll = () => {
    if (isSectionInView('section1')) {
      setActiveSection('Text for Section 1')
    }
    if (isSectionInView('section2')) {
      setActiveSection('Text for Section 2')
    }
    if (isSectionInView('section3')) {
      setActiveSection('Text for Section 3')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{`${title} | Hoptoons `}</title>
      </Head>
      <Header noBreadcrumb={noBreadcrumb} />
      <div className="main" onScroll={handleScroll}>
        <Sidebar activeSection={activeSection} />
        <div className="page-container">
          {/* {!noBreadcrumb && (
          <Breadcrumb
            title={title}
            parent={parent}
            parentRoute={parentRoute}
            subParent={subParent}
            subParentRoute={subParentRoute}
          />
        )} */}

          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CommonLayout
