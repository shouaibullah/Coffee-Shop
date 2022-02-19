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

const Header = () => {
  const [menu, setMenu] = useState(false);

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
          src="/images/download-2.svg"
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
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={HeartIcon} />
        <HeaderIcon Icon={RefreshIcon} />
        <HeaderIcon Icon={SearchIcon} />
      </div>
      {menu && <HumbergerMenu setMenu={setMenu} />}
    </main>
  );
};

export default Header;
