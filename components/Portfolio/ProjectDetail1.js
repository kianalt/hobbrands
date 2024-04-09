/* eslint-disable react/no-array-index-key */
import React from 'react'
import Link from 'next/link'

const ProjectDetail1 = ({ project }) => {
  const categories = project.relatedContents
    .filter(relatedContent => relatedContent.contentType === 'category')
    .map(category => category.values.slug)
  return (
    <div className="ProjectDetail1">
      <div className="ProjectDetail1-text">
        <div className="ProjectDetail1-title">
          <h1>{project?.values.title}</h1>
          <div className="categoris-list">
            {categories.map((category, index) => (
              <div className="category-list" key={index}>
                <Link href={`/works?category=${category}`}>{category}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="ProjectDetail1-description">
          <p>{project?.values.description1}</p>
        </div>
        <div className="ProjectDetail1-details">
          <div className="part1">
            <h6>Client</h6>
            <p>{project?.values.title}</p>
          </div>
          <div className="part2">
            <h6>When</h6>
            <p>{project?.values.when}</p>
          </div>
          <div className="part3">
            <h6>Share this project</h6>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className="ProjectDetail1-images">
          <div className="image1">
            <img
              src={`${process.env.NEXT_PUBLIC_ORIGIN}${project?.values.image1}`}
            />
          </div>

          <div className="image2">
            <img
              src={`${process.env.NEXT_PUBLIC_ORIGIN}${project?.values.image2}`}
            />
          </div>
        </div>
        <div className="ProjectDetail1-description2">
          <h6>{project?.values.title}</h6>
          <p>{project?.values.description2}</p>
          <div className="secondimages">
            <img
              src={`${process.env.NEXT_PUBLIC_ORIGIN}${project?.values.image3}`}
            />
            <img
              src={`${process.env.NEXT_PUBLIC_ORIGIN}${project?.values.image4}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectDetail1
