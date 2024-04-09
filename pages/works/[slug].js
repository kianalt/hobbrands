import React from 'react'

// Componenet
import CommonLayout from 'layouts/CommonLayout'
import ProjectDetail1 from 'components/Portfolio/ProjectDetail1'
import ProjectDetail2 from 'components/Portfolio/ProjectDetail2'
import Marq from 'components/Portfolio/Marq'
import OtherProject from 'components/Portfolio/OtherProjec'
import api from 'utils/api'

export async function getStaticPaths() {
  const projectList = await api
    .getContentList({ urlParams: { contentType: 'project' } })
    .then(res => res.data)
  const paths = projectList
    .filter(project => project.values.slug)
    .map(project => ({
      params: {
        slug: project.values.slug,
      },
    }))
  return {
    paths,
    fallback: true,
  }
}
export async function getStaticProps({ params }) {
  const projectList = await api
    .getContentList({
      urlParams: { contentType: 'project' },
      params: {
        values: {
          slug: params.slug,
        },
      },
    })
    .then(res => res.data)
  const projectLists = await api
    .getContentList({
      urlParams: { contentType: 'project' },
    })
    .then(res => res.data)

  return {
    props: {
      project: projectList[0],
      projectList: projectLists || [],
    },
    revalidate: 10,
  }
}
const ProjectDetail = ({ project, projectList }) => (
  <CommonLayout title="hobbrands" noBreadcrumb>
    <div id="section1" style={{ marginTop: '120px' }}>
      <ProjectDetail1 project={project} />
      <Marq project={project} />
    </div>
    <div id="section2">
      <ProjectDetail2 project={project} />
    </div>

    <div id="section3">
      {projectList && (
        <OtherProject project={project} projectList={projectList} />
      )}
    </div>
  </CommonLayout>
)

export default ProjectDetail
