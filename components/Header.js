import React, { useEffect, useState } from 'react';
import {
  HeartIcon,
  MenuIcon,
  RefreshIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import MenuItem from './MenuItem';
import HumbergerMenu from './HumbergerMenu';
import SearchBar from './SearchBar';
import Cart from './Cart';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [searchHover, setSearchHover] = useState(false);
  const [cartHover, setCarthover] = useState(false);

  const [nav, setNav] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const transisionNavBar = () => {
    if (window.scrollY > 70) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transisionNavBar);
  }, []);
  return (
    <main
      className={`flex justify-between p-3 lg:px-11 sticky top-0 z-[100] ${
        nav && ` bg-neutral-900 duration-300 transition-all ease-in `
      }`}
    >
      <div className="lg:hidden z-20" onClick={() => setMenu(!menu)}>
        <HeaderIcon Icon={MenuIcon} />
      </div>
      <div
        className="relative h-8 w-24 lg:h-10 lg:w-28 cursor-pointer z-20"
        onClick={scrollToTop}
      >
        <Image
          src="/images/logo.png"
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
      <div className="lg:flex space-x-6 hidden z-20">
        <MenuItem title="Home" />
        <MenuItem title="About Us" />
        <MenuItem title="Services" />
        <MenuItem title="Shop" />
        <MenuItem title="Blog" />
        <MenuItem title="Contacts" />
      </div>
      <div className="flex space-x-3 z-20">
        <div
          onMouseEnter={() => {
            setSearchHover(false);
            setCarthover(true);
          }}
        >
          <HeaderIcon Icon={ShoppingCartIcon} />
        </div>
        <HeaderIcon Icon={HeartIcon} />
        <HeaderIcon Icon={RefreshIcon} />
        <div
          onMouseEnter={() => {
            setSearchHover(true);
            setCarthover(false);
          }}
        >
          <HeaderIcon Icon={SearchIcon} />
        </div>
      </div>
      {menu && <HumbergerMenu setMenu={setMenu} />}
      {searchHover && (
        <>
          <div
            className=" w-screen h-screen absolute top-16 z-30"
            onMouseMove={() => {
              setSearchHover(false);
            }}
          />
          <SearchBar />
        </>
      )}
      {cartHover && (
        <>
          <Cart
            product="Silver Coffee Machine"
            price="$370.00"
            qty="1"
            total="$370.00"
          />
          <div
            className=" w-screen h-screen absolute top-16 z-30"
            onMouseMove={() => {
              setCarthover(false);
            }}
          />
        </>
      )}
    </main>
  );
};

export default Header;
