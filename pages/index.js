import React from 'react'

// Componenet

import CommonLayout from 'layouts/CommonLayout'
import HomeSlider from 'components/HomeSlider.js/HomeSlider'
import Taq from 'components/Taq/Taq'
import HomePortfolio from 'components/HomePortfolio/HomePortfolio'
import BlackBanner from 'components/BlackBanner.js/BlackBanner'
import MasonryPortfolio from 'components/MaoneryPortfolio/MasonryPortfolio'
import HomeAbout from 'components/About/HomeAbout'
import api from 'utils/api'

export async function getStaticProps() {
  const specialPojectList = await api
    .getContentList({
      urlParams: { contentType: 'project' },
      params: { isFeatured: true },
    })
    .then(res => res.data)
  const projectList = await api
    .getContentList({
      urlParams: { contentType: 'project' },
    })
    .then(res => res.data)
  const categoryList = await api
    .getContentList({
      urlParams: { contentType: 'category' },
    })
    .then(res => res.data)

  const slides = await api
    .getContentList({
      urlParams: { contentType: 'slider' },
    })
    .then(res => res.data)
  return {
    props: {
      slides: slides || [],
      categoryList: categoryList || [],
      projectList: projectList || [],
      specialPojectList: specialPojectList || [],
    },
    revalidate: 10,
  }
}

const index = ({ specialPojectList, slides, projectList, categoryList }) => (
  <CommonLayout title="hobbrands" noBreadcrumb>
    <div className="">
      <div id="section1">
        <HomeSlider slides={slides} />
        <Taq text1="BRANDING" text2="PORTFOLIO" />
      </div>{' '}
      <div id="section2">
        <HomePortfolio
          specialPojectList={specialPojectList}
          categoryList={categoryList}
        />
        <BlackBanner />
      </div>
      <div id="section3">
        <MasonryPortfolio
          projectList={projectList}
          categoryList={categoryList}
        />
        <Taq text1="ABOUT" text2="HOBBRANDS" />
        <HomeAbout />
      </div>
    </div>
  </CommonLayout>
)
export default index
