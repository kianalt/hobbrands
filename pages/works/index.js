import React from 'react'

// Componenet

import CommonLayout from 'layouts/CommonLayout'

import BlackBanner from 'components/BlackBanner.js/BlackBanner'
import MasonryPortfolio from 'components/MaoneryPortfolio/MasonryPortfolio'
import Title from 'components/Title/Title'

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

const index = () => {
  const portfolioList = [
    {
      id: 0,
      image: '/portfolio/1.png',
      title: 'Shop for your beautiful moments',
      category: 'branding',
    },

    {
      id: 1,
      image: '/portfolio/2.png',
      title: 'Make your dreams',
      category: 'logo-design',
    },
    {
      id: 2,
      image: '/portfolio/3.png',
      title: 'Beautiful Poeple, beauty world',
      category: 'ui-ux',
    },
    { id: 3, image: '/portfolio/4.png', title: 'Solution for everything' },
    {
      id: 4,
      image: '/portfolio/5.png',
      title: 'Beautiful Poeple, beauty world',
      category: 'photography',
    },
    {
      id: 5,
      image: '/portfolio/6.png',
      title: 'Beautiful Poeple, beauty world',
      category: 'socialmedia',
    },
  ]
  return (
    <CommonLayout title="hobbrands" noBreadcrumb>
      <div id="section1" style={{ marginTop: '-100px' }}>
        <Title title="WORKS" />
        <MasonryPortfolio
          portfolioList={portfolioList.slice(0, portfolioList.length / 2)}
          noButton
          isFilter
        />
      </div>
      <div id="section2">
        <BlackBanner />
      </div>

      <div id="section3">
        {' '}
        {portfolioList.length > 3 && (
          <MasonryPortfolio
            portfolioList={portfolioList.slice(
              portfolioList.length / 2,
              portfolioList.length,
            )}
            noButton
          />
        )}
      </div>
    </CommonLayout>
  )
}
export default index
