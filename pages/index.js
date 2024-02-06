import React from 'react'

// Componenet

import CommonLayout from 'layouts/CommonLayout'
import HomeSlider from 'components/HomeSlider.js/HomeSlider'
import Taq from 'components/Taq/Taq'

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
  return (
    <CommonLayout title="hobbrands" noBreadcrumb>
      <div className="">
        <HomeSlider slides={slides} />
        <Taq />
      </div>
    </CommonLayout>
  )
}
export default index
