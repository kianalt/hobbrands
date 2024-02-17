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
      <div className="main">
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
      </div>
      <Footer />
    </>
  )
}

export default CommonLayout
