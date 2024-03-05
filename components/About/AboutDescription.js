import React from 'react'
import Image from 'next/image'

const AboutDescription = () => {
  const featureList = [
    {
      index: 0,
      title: 'Reasearch',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
    },
    {
      index: 1,
      title: 'Brand Strategy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
    },
    {
      index: 2,
      title: 'Brand Strategy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
    },
    {
      index: 3,
      title: 'Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
    },
    {
      index: 4,
      title: 'Realisation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
    },
    {
      index: 5,
      title: 'Implementation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
    },

    {
      index: 6,
      title: 'Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
    },
  ]
  return (
    <div className="description-container description-box m-t90">
      <div className="title">PROCESS</div>
      <div className="description">
        <p>
          Our way of working utilises a tried & tested procedure for each &
          every project, regardless of industry sector.
        </p>
        <div className="row feature-box ">
          {featureList.map((feature, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              className="feature-container col-lg-4 col-md-6 col-sm-12"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image
                  src="/portfolio/line.png"
                  width="52"
                  height="1"
                  className="mb-2 mr-3"
                />
                <h6>{feature.title}</h6>
              </div>
              <p> {feature.description} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutDescription
