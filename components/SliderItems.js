import React from 'react';
import Image from 'next/image';

const SliderItems = ({ img }) => {
  return (
    <div className="cursor-pointer hover:animate-pulse ">
      <Image src={img} alt="" width={150} height={150} />
    </div>
  );
};

export default SliderItems;
