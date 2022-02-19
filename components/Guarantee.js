import React from 'react';
import GuaranteeItem from './GuaranteeItem';

const Guarantee = () => {
  return (
    <div className=" bg-[#1d1d1d] my-10 flex  flex-col lg:flex-row items-center justify-center space-y-5 py-5 lg:px-4 space-x-5">
      <GuaranteeItem
        pic="/images/latte.svg"
        title="100% Natural Coffee"
        discription="That, lungo as coffee viennese extraction beans Acerbic coffee medium arabica."
      />
      <GuaranteeItem
        pic="/images/delivery.svg"
        title="Fust & Free Shipping"
        discription="Filter strong, dark cultivar siphon arabica as java sweet acerbic, half and half mug robusta coffee."
      />
      <GuaranteeItem
        pic="/images/distanc.svg"
        title="Money Cash Back"
        discription="Rich black frappuccino acerbic, sit percolator acerbic robusta. Americano aroma crema."
      />
      <GuaranteeItem
        pic="/images/save-mone.svg"
        title="Non-Contact Delivery"
        discription="Café au lait est dark, half and half mug variety dark viennese single half and half frappuccino."
      />
    </div>
  );
};

export default Guarantee;
