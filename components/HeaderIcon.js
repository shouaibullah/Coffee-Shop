import React from 'react';

const HeaderIcon = ({ Icon }) => {
  return (
    <div className="border-[1px] h-8 w-8 items-center flex justify-center">
      <Icon className="menu-icon" />
    </div>
  );
};

export default HeaderIcon;
