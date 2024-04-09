import React from 'react'
import Link from 'next/link'

const OtherProject = ({ projectList, project }) => {
  const currentIndex = projectList.findIndex(p => p._id === project._id)

  let prevProjectTitle = null
  if (currentIndex === 0) {
    prevProjectTitle = projectList[projectList.length - 1]
  } else {
    prevProjectTitle = projectList[currentIndex - 1]
  }
  const prevProjectCategories = prevProjectTitle.relatedContents
    .filter(relatedContent => relatedContent.contentType === 'category')
    .map(category => category.values.slug)
  let nextProjectTitle = null
  if (currentIndex === projectList.length - 1) {
    nextProjectTitle = projectList[0]
  } else {
    nextProjectTitle = projectList[currentIndex + 1]
  }
  const nextProjectCategories = nextProjectTitle.relatedContents
    .filter(relatedContent => relatedContent.contentType === 'category')
    .map(category => category.values.slug)
  return (
    <div>
      <div className="otherProject-container">
        <div className="prev-project">
          <h6>Previous Project</h6>
          <img
            src={`${process.env.NEXT_PUBLIC_ORIGIN}${prevProjectTitle?.values.image}`}
          />
          <p>{prevProjectTitle?.values.title}</p>
          <div className="category">
            {prevProjectCategories.map((category, index) => (
              <Link Link href={`/works?filter=${category}`} key={index}>
                {category}
              </Link>
            ))}
          </div>
        </div>
        <div className="next-project">
          <h6>Next Project</h6>

          <img
            src={`${process.env.NEXT_PUBLIC_ORIGIN}${nextProjectTitle?.values.image}`}
          />
          <p>{nextProjectTitle?.values.title}</p>
          <div className="category">
            {nextProjectCategories.map((category, index) => (
              <Link Link href={`/works?filter=${category}`} key={index}>
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default OtherProject
