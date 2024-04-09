import React from 'react'

// Componenet

import CommonLayout from 'layouts/CommonLayout'
import MasonryPortfolio from 'components/MaoneryPortfolio/MasonryPortfolio'
import Title from 'components/Title/Title'
import ImageBanner from 'components/ImageBanner.js/ImageBanner'

import api from 'utils/api'

export async function getStaticProps() {
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

  return {
    props: {
      categoryList: categoryList || [],
      projectList: projectList || [],
    },
    revalidate: 10,
  }
}
const index = ({ categoryList, projectList }) => (
  <CommonLayout title="hobbrands" noBreadcrumb>
    <div id="section1" style={{ marginTop: '-100px' }}>
      <Title title="WORKS" />
      <MasonryPortfolio
        projectList={projectList.slice(0, projectList.length / 2 + 1)}
        categoryList={categoryList}
        noButton
        isFilter
      />
    </div>
    <div id="section2">
      <ImageBanner />
    </div>

    <div id="section3">
      {projectList.length > 3 && (
        <MasonryPortfolio
          categoryList={categoryList}
          projectList={projectList.slice(
            projectList.length / 2 + 1,
            projectList.length,
          )}
          noButton
        />
      )}
    </div>
  </CommonLayout>
)
export default index
