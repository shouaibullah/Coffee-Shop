import React from 'react';

const GuaranteeItem = ({ pic, title, discription }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[20rem] space-y-3">
      <img
        src={pic}
        className=" h-28 w-28 lg:h-12 hover:scale-95 duration-200"
      />
      <h3 className=" text-xl">{title}</h3>
      <p className=" text-sm text-center">{discription}</p>
    </div>
  );
};

export default GuaranteeItem;
