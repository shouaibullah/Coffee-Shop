import React from 'react';
import Image from 'next/image';

const Grid = () => {
  return (
    <div className="grid grid-rows-4  gap-4  lg:grid-cols-4  lg:max-h-[25rem] p-2">
      <div className=" relative h-52 lg:h-96 cursor-pointer ">
        <div>
          <Image
            src="/images/bgimage1.jpg"
            layout="fill"
            alt=""
            objectFit="cover"
          />
        </div>
        <div className=" absolute top-0 w-full h-full bg-neutral-900/70 hover:backdrop-blur-md transition-all duration-1000 group" />
        <div className=" absolute top-1/2 right-[30%] lg:right-[25%] uppercase border-2  border-yellow-700  w-48 h-12 flex items-center justify-center hover:bg-yellow-700 duration-200 cursor-pointer">
          Natural coffee
        </div>
      </div>
      <div className="relative h-52 lg:h-96">
        <Image
          src="/images/bgimage2.jpg"
          layout="fill"
          alt=""
          objectFit="cover"
        />
        <div className=" absolute top-0 w-full h-full bg-neutral-900/70 hover:backdrop-blur-md transition-all duration-1000" />
        <div className=" absolute top-1/2 right-[37%] lg:right-[30%] uppercase border-2  border-yellow-700 w-32 h-12 flex items-center justify-center hover:bg-yellow-700 duration-200 cursor-pointe">
          Dishes
        </div>
      </div>
      <div className=" relative h-52 lg:h-96">
        <Image
          src="/images/bgimage3.jpg"
          layout="fill"
          alt=""
          objectFit="cover"
        />
        <div className=" absolute top-0 w-full h-full bg-neutral-900/70 hover:backdrop-blur-md transition-all duration-1000" />
        <div className=" absolute top-1/2 right-[37%] lg:right-[30%] uppercase border-2  border-yellow-700 w-32 h-12 flex items-center justify-center hover:bg-yellow-700 duration-200 cursor-pointe">
          capsule
        </div>
      </div>
      <div className=" relative h-52 lg:h-96">
        <Image
          src="/images/bgimage1.jpg"
          layout="fill"
          alt=""
          objectFit="cover"
        />
        <div className=" absolute top-0 w-full h-full bg-neutral-900/70 hover:backdrop-blur-md transition-all duration-1000" />
        <div className=" absolute top-1/2 right-[37%] lg:right-[30%] uppercase border-2  border-yellow-700 w-32 h-12 flex items-center justify-center hover:bg-yellow-700 duration-200 cursor-pointe">
          Machines
        </div>
      </div>
    </div>
  );
};

export default Grid;
