import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomeAbout = () => {
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
    <div className="m-125 mb-5 ">
      <div>
        <h2
          className="text-left font-60 "
          style={{ fontWeight: '500px', lineHeight: '78px' }}
        >
          Honest Folks Doing
          <br /> Honest Work
        </h2>

        <p className="lead text-muted mt-5">
          We&rsquo;re a creative brand agency specialising in helping brands
          Become Unstoppable. We’re a bunch of sharp thinkers and creative
          makers on a mission to do the best work of our lives and always enjoy
          the ride.
        </p>
        <img
          src="/office.png"
          className="m-b50"
          style={{ marginTop: '100px', width: '100%' }}
        />
        <div className="description-box m-t90">
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
      </div>
      <div className="aboutHome-link-container mt-5">
        <div className="black" />
        <Link href="#">
          About Us{' '}
          <Image
            className="ml-1"
            src="/Arrow.png"
            width={14}
            height={10}
            alt="arrow"
          />
        </Link>
      </div>
    </div>
  )
}
export default HomeAbout
