import React from 'react'
// Componenet

import CommonLayout from 'layouts/CommonLayout'
import ProjectDetail1 from 'components/Portfolio/ProjectDetail1'
import ProjectDetail2 from 'components/Portfolio/ProjectDetail2'
import Marq from 'components/Portfolio/Marq'
import OtherProject from 'components/Portfolio/OtherProjec'

const ProjectDetail = () => (
  <CommonLayout title="hobbrands" noBreadcrumb>
    <div id="section1" style={{ marginTop: '120px' }}>
      <ProjectDetail1 /> <Marq />
    </div>
    <div id="section2">
      <ProjectDetail2 />
    </div>

    <div id="section3">
      <OtherProject />
    </div>
  </CommonLayout>
)

export default ProjectDetail
