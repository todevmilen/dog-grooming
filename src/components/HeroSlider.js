import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

// import data
import { heroSlider } from '../data';

const HeroSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {heroSlider.map((slide, index) => {
          // destructure slide
          const { title, subtitle, image, buttonText } = slide;
          return (
            <SwiperSlide key={index}>
              <div className='container mx-auto'>
                <div className='flex flex-col justify-between items-center lg:flex-row'>
                  <div className='flex-1'>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                  </div>
                  <div className='flex-1 flex justify-center'>
                    <img src={image.type} alt='' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroSlider;
