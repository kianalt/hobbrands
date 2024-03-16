import React from 'react'
import Link from 'next/link'

const OtherProject = () => (
  <div>
    <div className="otherProject-container">
      <div className="prev-project">
        <h6>Previous Project</h6>
        <img src="/prev.png" />
        <p>Smart Solution</p>
        <div className="category">
          <Link Link href="#">
            branding
          </Link>
          <Link href="#">Logo Design</Link>
        </div>
      </div>
      <div className="next-project">
        <h6>Next Project</h6>
        <img src="/next.png" />
        <p>Hoptoons</p>
        <div className="category">
          <Link Link href="#">
            branding
          </Link>
          <Link Link href="#">
            Photography
          </Link>
          <Link href="#">Logo Design</Link>
        </div>
      </div>
    </div>
  </div>
)

export default OtherProject
