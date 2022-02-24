// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroItem from './HeroItem';

// Import Swiper styles
import 'swiper/css';

const Hero = () => {
  return (
    <div className="md:-mt-16 z-10">
      <Swiper slidesPerView={1}>
        <SwiperSlide>
          <HeroItem pic="/images/pic-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroItem pic="/images/pic-2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroItem pic="/images/pic-3.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
