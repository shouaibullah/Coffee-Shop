import React from 'react';
import SliderItems from './SliderItems';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 1 },
      items: 2,
    },
  };
  return (
    <Carousel responsive={responsive} centerMode={true} infinite={true}>
      <div>
        <SliderItems img="/images/slider1.png" />
      </div>
      <div>
        <SliderItems img="/images/slider2.png" />
      </div>
      <div>
        <SliderItems img="/images/slider1.png" />
      </div>
      <div>
        <SliderItems img="/images/slider1.png" />
      </div>
      <div>
        <SliderItems img="/images/slider1.png" />
      </div>
      <div>
        <SliderItems img="/images/slider1.png" />
      </div>
    </Carousel>
  );
};

export default Slider;
