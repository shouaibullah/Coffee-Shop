import React from 'react';
import HeaderIcon from './HeaderIcon';
import {
  HeartIcon,
  RefreshIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

const ShopItem = ({ pic, discount, price, name }) => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center group cursor-pointer">
        <div className=" max-w-xl px-20 py-10 bg-[#1d1d1d]">
          <img
            src={pic}
            className=" h-64 group-hover:scale-110 duration-700 transition-all ease-in-out object-contain"
          />
          <div className="flex justify-center space-x-3 pt-6 opacity-0 group-hover:opacity-100 duration-700">
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={RefreshIcon} />
            <HeaderIcon Icon={HeartIcon} />
          </div>
        </div>
      </div>
      <div className=" pl-8 py-6 space-y-2">
        <p className=" hover:text-yellow-900 cursor-pointer duration-200">
          {name}
        </p>
        <p className="">{price}</p>
      </div>
    </>
  );
};

export default ShopItem;
