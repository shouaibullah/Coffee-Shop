import React from 'react';
import ShopItem from './ShopItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Shop = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 1 },
      items: 1,
    },
  };
  return (
    <div className="space-y-8 px-2 pt-10">
      <h2 className=" font-mono text-2xl px-9 ">Products</h2>
      <Carousel responsive={responsive} className="z-10">
        <div>
          <ShopItem
            pic="/images/i20.png"
            discount="12%"
            price="$370.00"
            name="Silver Cofee Machine"
          />
        </div>
        <div>
          <ShopItem
            pic="/images/i51.png"
            discount="12%"
            price="$370.00"
            name="Silver Cofee Machine"
          />
        </div>
        <div>
          <ShopItem
            pic="/images/i52.png"
            discount="12%"
            price="$370.00"
            name="Silver Cofee Machine"
          />
        </div>
        <div>
          <ShopItem
            pic="/images/i56.png"
            discount="12%"
            price="$370.00"
            name="Silver Cofee Machine"
          />
        </div>
        <div>
          <ShopItem
            pic="/images/i57.png"
            discount="12%"
            price="$370.00"
            name="Silver Cofee Machine"
          />
        </div>
        <div>
          <ShopItem
            pic="/images/i58.png"
            discount="12%"
            price="$370.00"
            name="Silver Cofee Machine"
          />
        </div>
        <div>
          <ShopItem
            pic="/images/i60.png"
            discount="12%"
            price="$370.00"
            name="Silver Cofee Machine"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Shop;
