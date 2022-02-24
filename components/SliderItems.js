import React from 'react';
import Image from 'next/image';

const SliderItems = ({ img }) => {
  return (
    <div className="cursor-pointer hover:animate-pulse py-2 ">
      <Image src={img} alt="" width={70} height={70} objectFit="contain" />
    </div>
  );
};

export default SliderItems;
