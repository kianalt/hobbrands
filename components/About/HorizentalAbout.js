import React from 'react'

import { CustomSwiper, CustomSwiperSlide } from 'components/About/CustomSwiper'

// const CustomNextArrow = () => (
//   <div className="custom-arrow custom-next">
//     <img src="rightArrow.png" />
//   </div>
// )

// const CustomPrevArrow = () => (
//   <div className="custom-arrow custom-prev">
//     <img src="leftArrow.png" />
//   </div>
// )
const HorizentalAbout = () => (
  <div className="HorizentalAbout-container">
    <div className="title-container">
      <h4>Services that bring your dream branding closer</h4>
    </div>
    {/* 
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        freeMode
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="mySwiper gallery"
        breakpoints={{
          640: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: false,
          },

          1024: {
            slidesPerView: 1.4,
            spaceBetween: 30,
            centeredSlides: false,
          },
        }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="gallery-item">
              <img src={slide.img} alt="Branding" />
              <h6>{slide.title}</h6>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPrevArrow />
      <CustomNextArrow /> */}
    <CustomSwiper
      dir="rtl"
      slidesPerView={1.4}
      loop
      spa
      speed="300"
      autoplay={{
        delay: 3000,
      }}
      // breakpoints={{ 768: { slidesPerView: 4 } }}
      // on={{
      //   slideChange: () => {
      //     console.log('slide changed')
      //   },
      //   progress: (s, progress) => {
      //     console.log(`progress is ${progress}`)
      //   },
      // }}
    >
      {[
        {
          id: '1',
          img: '/horizental.png',
          title: 'Branding / Logo Branding',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
        },
        {
          id: '2',
          img: '/horizental.png',
          title: 'Branding / Logo Branding',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
        },
        {
          id: '3',
          img: '/horizental.png',
          title: 'Branding / Logo Branding',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
        },
        {
          id: '4',
          img: '/horizental.png',
          title: 'Branding / Logo Branding',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
        },
        {
          id: '5',
          img: '/horizental.png',
          title: 'Branding / Logo Branding',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.',
        },
      ].map(slide => (
        <CustomSwiperSlide key={slide.id}>
          <div className="gallery-item">
            <img src={slide.img} alt="Branding" />
            <h6>{slide.title}</h6>
            <p>{slide.description}</p>
          </div>
        </CustomSwiperSlide>
      ))}
    </CustomSwiper>
  </div>
)
export default HorizentalAbout
