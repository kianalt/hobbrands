import React from 'react'

// Componenet

import CommonLayout from 'layouts/CommonLayout'
import Contact from 'components/About/Contact/Contact'

const contact = () => (
  <CommonLayout title="hobbrands" noBreadcrumb>
    <div className="">
      <div id="section1">
        <Contact />
      </div>
      <div id="section2" />
      <div id="section3" />
    </div>
  </CommonLayout>
)

export default contact
