import React from 'react'

// Next
import Head from 'next/head'

// Componenets
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Sidebar from 'components/Sidebar/Sidebar'
// import Breadcrumb from 'components/Breadcrumb/Breadcrumb'

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
  return (
    <>
      <Head>
        <title>{`${title} | Hoptoons `}</title>
      </Head>
      <Header noBreadcrumb={noBreadcrumb} />
      <Sidebar />
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
      <Footer />
      <svg
        width={0}
        height={0}
        class="headermasksvg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="headermask" clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.000695 0.004879)"
            d="M1440 0H0V170C0 170 438.532 113.23 720.5 120C1003.35 126.792 1440 205 1440 205V0Z"
          />
        </clipPath>
        <clipPath id="whitePlace" clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.000695 0.01333)"
            d="M0 30.3016C0 30.3016 438.911 -3.59478 720.5 0.313787C1002.13 4.22295 1440 50.3016 1440 50.3016V74.3016H0V30.3016Z"
            fill="white"
          />
        </clipPath>
        <clipPath id="greenPlace" clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.000695 0.01333)"
            d="M0 30.3016C0 30.3016 438.911 -3.59478 720.5 0.313787C1002.13 4.22295 1440 50.3016 1440 50.3016V74.3016H0V30.3016Z"
            fill="#E7F4C3"
          />
        </clipPath>
        <clipPath id="blackPlace" clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.000695 0.01333)"
            d="M0 30.3016C0 30.3016 438.911 -3.59478 720.5 0.313787C1002.13 4.22295 1440 50.3016 1440 50.3016V74.3016H0V30.3016Z"
            fill="#262626"
          />
        </clipPath>
        <clipPath id="headermaskfooter" clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.0006945 0.0135)"
            d="M0 0C0 0 438.301 41.106 720 45C1001.32 48.8888 1440 20 1440 20V90H0V0Z"
            fill="#99CC01"
          />
        </clipPath>
      </svg>
    </>
  )
}

export default CommonLayout
