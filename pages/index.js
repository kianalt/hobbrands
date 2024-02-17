import React from 'react'

// Componenet

import CommonLayout from 'layouts/CommonLayout'
import HomeSlider from 'components/HomeSlider.js/HomeSlider'
import Taq from 'components/Taq/Taq'
import HomePortfolio from 'components/HomePortfolio/HomePortfolio'
import BlackBanner from 'components/BlackBanner.js/BlackBanner'
import MasonryPortfolio from 'components/MaoneryPortfolio/MasonryPortfolio'
import HomeAbout from 'components/About/HomeAbout'

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
  const slides = [
    {
      id: 0,
      image1: '/slides/1.png',
      image2: '/slides/2.png',
      image3: '/slides/3.png',
      image4: '/slides/4.png',
      image5: '/slides/5.png',
      image6: '/slides/6.png',
    },
    {
      id: 1,
      image1: '/slides/1.png',
      image2: '/slides/2.png',
      image3: '/slides/3.png',
      image4: '/slides/4.png',
      image5: '/slides/5.png',
      image6: '/slides/6.png',
    },
    {
      id: 3,
      image1: '/slides/1.png',
      image2: '/slides/2.png',
      image3: '/slides/3.png',
      image4: '/slides/4.png',
      image5: '/slides/5.png',
      image6: '/slides/6.png',
    },
  ]
  const portfolioList = [
    {
      id: 0,
      image: '/portfolio/1.png',
      title: 'Shop for your beautiful moments',
    },

    { id: 1, image: '/portfolio/2.png', title: 'Make your dreams' },
    {
      id: 2,
      image: '/portfolio/3.png',
      title: 'Beautiful Poeple, beauty world',
    },
    { id: 3, image: '/portfolio/4.png', title: 'Solution for everything' },
    {
      id: 4,
      image: '/portfolio/5.png',
      title: 'Beautiful Poeple, beauty world',
    },
    {
      id: 5,
      image: '/portfolio/6.png',
      title: 'Beautiful Poeple, beauty world',
    },
  ]
  return (
    <CommonLayout title="hobbrands" noBreadcrumb>
      <div className="">
        <div id="section1">
          <HomeSlider slides={slides} />
          <Taq text1="BRANDING" text2="PORTFOLIO" />
        </div>{' '}
        <div id="section2">
          <HomePortfolio portfolioList={portfolioList} />
          <BlackBanner />
        </div>
        <div id="section3">
          <MasonryPortfolio portfolioList={portfolioList} />
          <Taq text1="ABOUT" text2="HOBBRANDS" />
          <HomeAbout />
        </div>
      </div>
    </CommonLayout>
  )
}
export default index
