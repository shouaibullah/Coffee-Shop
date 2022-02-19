import React from 'react';

const HeroItem = ({ pic }) => {
  return (
    <div className="w-screen max-h-screen object-contain">
      <img
        src={pic}
        alt=""
        className=" hover:scale-105 hover:blur-sm duration-[2000ms]"
      />
      <div className=" absolute top-16 left-3 w-40 md:top-[15%] lg:top-[25%] md:left-[10%] lg:space-y-8">
        <h1 className=" uppercase text-6xl md:text-8xl">Enjoy Coffee</h1>
        <div>
          <button className=" border-[1px] h-10 w-32 border-yellow-800 hover:bg-yellow-800 delay-300">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
