import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/outline';

const Product = () => {
  const [image, setImage] = useState(0);
  const product = {
    id: 1,
    images: [
      '/images/i57.png',
      '/images/i51.png',
      '/images/i52.png',
      '/images/i56.png',
    ],
    discription:
      'Mug beans, froth aged saucer froth pumpkin spice variety. Pumpkin spice, white black iced turkish viennese dripper americano eu affogato. So, ut instant filter, mocha in single origin, chicory skinny breve rich blue mountain. Cultivar rich qui, café au lait irish carajillo acerbic so mazagran viennese. Con panna, instant a macchiato, whipped extraction barista froth rich. Steamed cultivar mug fair trade, eu single shot aroma arabica fair trade iced. Breve, sit brewed single origin kopi-luwak single origin fair trade affogato.',
    rate: [1, 2, 3, 4, 5],
    price: '$12',
    name: 'Super Crema Beans',
  };
  const images = product.images;

  return (
    <div>
      <div className="relative w-screen h-72">
        <div className=" absolute top-0 z-10 h-full w-full bg-black/80" />
        <div className=" absolute top-1/2 z-20 flex flex-col items-center  w-full space-y-4">
          <h3 className=" text-3xl font-mono">{product.name}</h3>
          <div className="text-[14px] flex space-x-2 items-center cursor-pointer text-gray-500 hover:text-gray-100 duration-200">
            <HomeIcon className=" h-5" />
            <Link href="/">Go Back to Home </Link>
          </div>
        </div>
        <Image src="/images/pic4.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-evenly lg:px-8 space-x-3">
        <div className="flex space-x-5 justify-center py-10 px-4">
          <div className=" space-y-5 flex flex-col justify-center items-center">
            <div
              className="p-2 bg-[#1d1d1d] cursor-pointer"
              onClick={() => setImage(0)}
            >
              <Image
                src={product.images[0]}
                width="50"
                height="50"
                objectFit="cover"
                alt=""
              />
            </div>
            <div
              className="p-2 bg-[#1d1d1d] cursor-pointer"
              onClick={() => setImage(1)}
            >
              <Image
                src={product.images[1]}
                width="50"
                height="50"
                objectFit="cover"
                alt=""
              />
            </div>
            <div
              className="p-2 bg-[#1d1d1d] cursor-pointer"
              onClick={() => setImage(2)}
            >
              <Image
                src={product.images[2]}
                width="50"
                height="50"
                objectFit="cover"
                alt=""
              />
            </div>
            <div
              className="p-2 bg-[#1d1d1d] cursor-pointer"
              onClick={() => setImage(3)}
            >
              <Image
                src={product.images[3]}
                width="50"
                height="50"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
          <div className=" relative bg-[#1d1d1d] min-h-max p-20  max-h-[30rem] flex items-center justify-center">
            <img src={product.images[image]} className=" max-h-[25rem] " />
          </div>
        </div>
        <div className=" max-w-md mx-auto space-y-3">
          <h3 className=" text-lg">Price: {product.price}</h3>
          <p className="text-neutral-500 text-sm">{product.discription}</p>
          <div className=" border-b-[1px] border-neutral-500" />
          <div className="flex space-x-2">
            <div className=" bg-[#1d1d1d] flex justify-center items-center h-12 w-72 cursor-pointer hover:animate-pulse">
              Add to Cart
            </div>
            <div className="border-[#1d1d1d] border-2">
              <input
                type="number"
                defaultValue={0}
                className=" w-11 h-12 text-gray-100 bg-neutral-900 text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
