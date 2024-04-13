import {
  // useState,
  useRef,
  useEffect,
} from 'react'

// next
// import { useRouter } from 'next/navigation'
// import Image from 'next/image'
// import Link from 'next/link'

// mui
// import { useTheme } from '@mui/material/styles'
// import { Box, Container, Stack, Typography } from '@mui/material'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack'

// components
// import ProjectCard from 'components/Home/ProjectCard'

import { register } from 'swiper/element/bundle'

// constants
// import useWindowSize from 'components/CustomHooks/useWindowSize'
// import HomeProductIntroCount1 from 'public/images/HomeProductIntroCount1.svg'
// import HomeProductIntroCount2 from 'public/images/HomeProductIntroCount2.svg'

// import { toFaDigit, toEnDigit } from 'fa-utils'

export function CustomSwiper(props) {
  // const [isOpen, setIsOpen] = useState(null)
  const swiperRef = useRef(null)
  const { children, ...rest } = props

  // const muiTheme = useTheme()
  // const router = useRouter()

  useEffect(() => {
    // Register Swiper web component
    register()

    // pass component props to parameters
    const swiperParams = {
      ...rest,
    }

    // Assign it to swiper element
    Object.assign(swiperRef.current, swiperParams)

    // initialize swiper
    swiperRef.current.initialize()
  }, [rest])

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  )
}

export function CustomSwiperSlide(props) {
  const { children, ...rest } = props

  return <swiper-slide {...rest}>{children}</swiper-slide>
}
