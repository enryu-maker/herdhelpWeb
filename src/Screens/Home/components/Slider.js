import React from 'react'
import a from '../assets/banner-01.jpeg'
import b from '../assets/banner-02.jpeg'
import c from '../assets/banner-03.jpeg'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Slider = () => {
  return (
    <div className='w-full' >
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        showArrows={true}
        swipeable
        emulateTouch
        stopOnHover
        transitionTime={3000}

        className=" overflow-hidden flex w-full h-[650px] max-md:h-full"
      >
        <div>
          <img src={b} className='' alt='banner-1' />
        </div>

        <div>
          <img src={c} alt='banner-2' />
        </div>

        <div>
          <img src={a} alt='banner-3' />
        </div>

      </Carousel>
    </div>
  )
}

export default Slider;