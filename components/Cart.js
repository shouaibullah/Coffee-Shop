import React from 'react';

const Cart = ({ product, price, qty, total }) => {
  return (
    <div className=" absolute top-16 right-2 lg:right-10 h-96 w-[30rem] z-40 bg-neutral-900 flex items-center justify-center">
      <div className="px-2 bg-[#1d1d1d] w-[28rem] h-[22rem] space-y-3">
        <div className="flex  justify-between p-2 font-semibold">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
        </div>
        <div className="flex  px-2 text-sm text-gray-400">
          <p className=" w-28 ">{product}</p>
          <p className="w-28">{price}</p>
          <p className="w-28">{qty}</p>
          <p>{total}</p>
        </div>
        <button className=" absolute bottom-10 right-10 bg-neutral-900 h-8 w-28 rounded-lg text-gray-400 hover:bg-neutral-800 hover:text-gray-100 duration-200 border-[1px] border-neutral-700">
          Purchase
        </button>
        <h4 className=" absolute bottom-10 left-10">Grand Total : {price}</h4>
      </div>
    </div>
  );
};

export default Cart;
